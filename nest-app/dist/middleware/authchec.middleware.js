"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthchecMiddleware = void 0;
class AuthchecMiddleware {
    use(reg, res, next) {
        if (reg.headers.authorization)
            next();
        res.status(403).json({ code: 403, message: 'Not authorized' });
    }
}
exports.AuthchecMiddleware = AuthchecMiddleware;
//# sourceMappingURL=authchec.middleware.js.map