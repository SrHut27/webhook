import { container } from "tsyringe";
import { Router } from "express";
const router = Router();

import WebhookController from "../controllers/Webhook.controller";
const webhookController = container.resolve(WebhookController);

router.post("/webhook", webhookController.createWebhook.bind(webhookController));

export default router;