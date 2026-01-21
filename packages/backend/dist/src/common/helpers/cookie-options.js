"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshCookieOptions = void 0;
const refreshCookieOptions = () => ({
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/auth/refresh',
    maxAge: 7 * 24 * 60 * 60 * 1000,
});
exports.refreshCookieOptions = refreshCookieOptions;
//# sourceMappingURL=cookie-options.js.map