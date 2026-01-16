"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const Brevo = __importStar(require("@getbrevo/brevo"));
const config_1 = require("@nestjs/config");
let EmailService = EmailService_1 = class EmailService {
    config;
    api;
    sender;
    logger = new common_1.Logger(EmailService_1.name);
    constructor(config) {
        this.config = config;
        const apiKey = this.config.get('BREVO_API_KEY');
        const fromEmail = this.config.get('BREVO_SENDER_EMAIL');
        const fromName = this.config.get('BREVO_SENDER_NAME') ?? 'App';
        if (!apiKey) {
            throw new common_1.InternalServerErrorException('BREVO_API_KEY is not provided');
        }
        if (!fromEmail) {
            throw new common_1.InternalServerErrorException('BREVO_SENDER_EMAIL is not provided');
        }
        this.api = new Brevo.TransactionalEmailsApi();
        this.api.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);
        this.sender = { email: fromEmail, name: fromName };
    }
    async sendMail({ to, subject, html }) {
        try {
            const email = new Brevo.SendSmtpEmail();
            email.sender = this.sender;
            email.to = [{ email: to }];
            email.subject = subject;
            email.htmlContent = html;
            await this.api.sendTransacEmail(email);
            return true;
        }
        catch (err) {
            const detail = err?.response?.text ??
                err?.response?.body ??
                err?.message ??
                String(err);
            this.logger.error(`Brevo sendMail error: ${detail}`);
            throw new common_1.InternalServerErrorException('Failed to send email');
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmailService);
//# sourceMappingURL=email-sender.service.js.map