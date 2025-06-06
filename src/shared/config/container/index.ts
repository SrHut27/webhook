import { container } from "tsyringe";
import WebhookController from "../../../presentation/controllers/Webhook.controller";
import WebhookService from "../../../application/services/Webhook.service";

container.register("WebhookService", { useValue: WebhookController });
container.register("WebhookController", { useValue: WebhookController });