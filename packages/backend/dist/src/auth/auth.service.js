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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const bcrypt = __importStar(require("bcrypt"));
const jwt_1 = require("@nestjs/jwt");
const crypto_1 = require("crypto");
const user_service_1 = require("../user/user.service");
const prisma_service_1 = require("../prisma/prisma.service");
const email_sender_service_1 = require("../email-sender/email-sender.service");
let AuthService = class AuthService {
    user;
    jwtService;
    prisma;
    emailService;
    constructor(user, jwtService, prisma, emailService) {
        this.user = user;
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.emailService = emailService;
    }
    async register(dt) {
        const { username, password, email, country } = dt;
        const byEmail = await this.user.findByEmail(email);
        if (byEmail)
            throw new common_1.ForbiddenException('Email already exists');
        const byUsername = await this.user.findByUsername(username);
        if (byUsername)
            throw new common_1.ForbiddenException('Username already exists');
        const hashPassword = await bcrypt.hash(password, 10);
        const verificationCode = this.generateVerificationCode();
        const newUser = await this.user.createUser({
            username,
            email,
            password: hashPassword,
            country,
            verificationCode,
        });
        if (!newUser) {
            throw new common_1.ForbiddenException('User registration failed');
        }
        const verifyEmail = {
            to: email,
            subject: 'Email Verification Code',
            html: `<p>Your verification code is: <strong>${verificationCode}</strong></p>`,
        };
        await this.emailService.sendMail(verifyEmail);
        return 'You are successfully registered. Please check your email to verify your account';
    }
    async login(dto) {
        const user = await this.user.findByEmail(dto.email);
        if (!user) {
            throw new common_1.ForbiddenException('User not found!');
        }
        if (!user.verify) {
            throw new common_1.HttpException('Email not verified', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const isPasswordMatch = await bcrypt.compare(dto.password, user.password);
        if (!isPasswordMatch) {
            throw new common_1.ForbiddenException('Wrong password');
        }
        const tokens = await this.getTokens(user.id, user.email, user.role);
        await this.updateRefreshTokenHash(user.id, tokens.refresh_token);
        return tokens;
    }
    async verifyEmail(verificationCode) {
        const user = await this.user.findByVerify(verificationCode);
        if (!user) {
            throw new common_1.ForbiddenException('Invalid verification code');
        }
        if (user?.verificationCode !== verificationCode) {
            throw new common_1.ForbiddenException('Invalid verification code');
        }
        await this.user.updateUserVerify(verificationCode);
        return 'Email verified successfully';
    }
    async resendVerifyCode(email) {
        const user = await this.user.findByEmail(email);
        if (!user) {
            throw new common_1.ForbiddenException('User not found!');
        }
        const verificationCode = this.generateVerificationCode();
        await this.user.updateUserVerifyCode(verificationCode, email);
        const verifyEmail = {
            to: email,
            subject: 'Email Verification Code',
            html: `<p>Your verification code is: <strong>${verificationCode}</strong></p>`,
        };
        await this.emailService.sendMail(verifyEmail);
        return 'Please check your email to verify your account';
    }
    async logout(userId) {
        await this.prisma.user.update({
            where: { id: userId },
            data: { hashed_rt: null },
        });
    }
    async validateAccessTokenUser(userID) {
        const user = (await this.user.findById(userID));
        if (!user)
            throw new common_1.UnauthorizedException('User not found');
        if (!user.verify)
            throw new common_1.UnauthorizedException('Email not verified');
        return user;
    }
    async validateRefreshTokenUser(userID, refreshToken) {
        const user = (await this.user.findById(userID));
        if (!user)
            throw new common_1.UnauthorizedException('User not found');
        if (!user.hashed_rt)
            throw new common_1.UnauthorizedException('Refresh token is not set');
        const hashedRt = user.hashed_rt;
        const compareResult = await (0, bcrypt_1.compare)(refreshToken, hashedRt);
        if (typeof compareResult !== 'boolean') {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
        const ok = compareResult;
        if (!ok)
            throw new common_1.UnauthorizedException('Invalid refresh token');
        return { id: user.id, email: user.email, role: user.role };
    }
    async getTokens(userId, email, role) {
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
        const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
        if (!accessTokenSecret || !refreshTokenSecret) {
            throw new Error('JWT secrets are not configured');
        }
        const tokens = await Promise.all([
            this.jwtService.signAsync({ sub: userId, email, role }, { secret: accessTokenSecret, expiresIn: '5m' }),
            this.jwtService.signAsync({ sub: userId, email, role }, { secret: refreshTokenSecret, expiresIn: '7d' }),
        ]);
        const [at, rt] = tokens;
        return {
            access_token: at,
            refresh_token: rt,
        };
    }
    async refresh(userId) {
        const user = await this.user.findById(userId);
        if (!user)
            throw new common_1.ForbiddenException('Access denied');
        const tokens = await this.getTokens(user.id, user.email, user.role);
        await this.updateRefreshTokenHash(user.id, tokens.refresh_token);
        return tokens;
    }
    async updateRefreshTokenHash(userId, rt) {
        const hashedRt = (await (0, bcrypt_1.hash)(rt, 10));
        await this.prisma.user.update({
            where: { id: userId },
            data: { hashed_rt: hashedRt },
        });
    }
    generateVerificationCode() {
        return (0, crypto_1.randomInt)(1000, 10000).toString();
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        prisma_service_1.PrismaService,
        email_sender_service_1.EmailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map