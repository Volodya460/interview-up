import { ConfigService } from '@nestjs/config';
interface SendMailData {
    to: string;
    subject: string;
    html: string;
}
export declare class EmailService {
    private readonly config;
    private readonly api;
    private readonly sender;
    private readonly logger;
    constructor(config: ConfigService);
    sendMail({ to, subject, html }: SendMailData): Promise<boolean>;
}
export {};
