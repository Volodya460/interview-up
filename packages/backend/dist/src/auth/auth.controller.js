"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./dto/auth.dto");
const rf_guard_1 = require("./guards/rf.guard");
const getUser_decorator_1 = require("../common/decorators/getUser.decorator");
const at_guard_1 = require("./guards/at.guard");
const cookie_options_1 = require("../common/helpers/cookie-options");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    signup(dto) {
        return this.authService.register(dto);
    }
    async signin(dto, res) {
        const tokens = await this.authService.login(dto);
        res.cookie('rt', tokens.refresh_token, (0, cookie_options_1.refreshCookieOptions)());
        return { access_token: tokens.access_token };
    }
    verifyEmail(dto) {
        return this.authService.verifyEmail(dto.verificationCode);
    }
    resendVerifyCode(dto) {
        return this.authService.resendVerifyCode(dto.email);
    }
    async refreshTokens(user, res) {
        const tokens = await this.authService.refresh(user.sub);
        res.cookie('rt', tokens.refresh_token, (0, cookie_options_1.refreshCookieOptions)());
        return { access_token: tokens.access_token };
    }
    logout(user, res) {
        res.clearCookie('rt', { path: '/auth/refresh' });
        return this.authService.logout(user.sub);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
__decorate([
    (0, common_1.Post)('verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.VerifyEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('resend'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ResendVerifyEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendVerifyCode", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, common_1.UseGuards)(rf_guard_1.RtGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, getUser_decorator_1.GetUserDecorator)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokens", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(at_guard_1.AtGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, getUser_decorator_1.GetUserDecorator)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map