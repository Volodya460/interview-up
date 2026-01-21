"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCookiesMiddleware = void 0;
const common_1 = require("@nestjs/common");
let LogCookiesMiddleware = class LogCookiesMiddleware {
    use(req, _res, next) {
        console.log('--- INCOMING REQUEST ---');
        console.log('url:', req.originalUrl);
        console.log('cookie header:', req.headers.cookie);
        console.log('req.cookies:', req.cookies);
        next();
    }
};
exports.LogCookiesMiddleware = LogCookiesMiddleware;
exports.LogCookiesMiddleware = LogCookiesMiddleware = __decorate([
    (0, common_1.Injectable)()
], LogCookiesMiddleware);
//# sourceMappingURL=find_cookie.js.map