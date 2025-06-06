export default class WebhookCreateDTO {
    public payload: any;
    public rawBody: Buffer;
    public signature: string;

    constructor(payload: any, rawBody: Buffer, signature: string) {
        this.payload = payload;
        this.rawBody = rawBody;
        this.signature = signature;
    }
}