"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NODE_ENV = String(process.env.NODE_ENV) || 'development';
const isDev = NODE_ENV === 'development';
exports.default = () => ({
    PORT: Number(process.env.PORT) || 4000,
    HOST: String(process.env.HOST) || 'localhost',
    PREFIX: String(process.env.PREFIX) || 'api',
    isDev,
});
//# sourceMappingURL=main.config.js.map