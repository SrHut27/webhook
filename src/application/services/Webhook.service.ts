import crypto from "crypto";
import { exec } from "child_process";
import { PROJECT_PATH, PROJECT_SCRIPT, SECRET } from "../../shared/config/secrets";
import { injectable } from "tsyringe";
import WebhookCreateDTO from "../dto/Webhook.create.dto";
import { NotFound } from "../../shared/errors/AppErrors";

@injectable()
export default class WebhookService {
    async handleWebhook(webhook: WebhookCreateDTO):
    Promise<string> {
        const hmac = crypto.createHmac("sha256", SECRET);
        const digest = "sha256=" + hmac.update(webhook.rawBody).digest("hex");

        if (webhook.signature !== digest) {
            throw new NotFound("Assinatura inválida.");
        }

        if (webhook.payload.ref === "refs/heads/master") {
            return await this.deploy();
        }

        return "Branch ignorada.";
    }

    private deploy():
    Promise<string> {
        return new Promise((resolve, reject) => {
            exec(PROJECT_PATH + "&&" + PROJECT_SCRIPT, 
                (err, stdout, stderr) => {
                    if (err) {
                        return reject(`Erro no deploy: ${stderr}`);
                    }
                    resolve(`Deploy feito: ${stdout}`);
                });
        })
    }
}