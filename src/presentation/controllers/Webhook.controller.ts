import { Request, Response } from "express";
import WebhookService from "../../application/services/Webhook.service";
import { inject, injectable } from "tsyringe";
import WebhookCreateDTO from "../../application/dto/Webhook.create.dto";
import { AppErrors } from "../../shared/errors/AppErrors";

@injectable()
export default class WebhookController {
    constructor(
        @inject(WebhookService) private webhookService: WebhookService
    ) { }

    async createWebhook(req: Request, res: Response):
    Promise<Response> {
        const signature = req.headers['x-hub-signature-256'] as string;
        try {
            const dto = new WebhookCreateDTO(req.body, (req as any).rawBody, signature);
            const message: string = await this.webhookService.handleWebhook(dto);
            return res.status(200).json(message);
        } catch (error) {
            if (error instanceof AppErrors) return res.status(error.statusCode).json(error);
            else {
                return res.status(500).json(error);
            }
        }
    }
}