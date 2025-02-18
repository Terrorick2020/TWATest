"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCrashedException = exports.AuthServiceUnavailableException = exports.AuthUnauthorizedException = void 0;
const common_1 = require("@nestjs/common");
class AuthUnauthorizedException extends common_1.HttpException {
    constructor() {
        super('There is no access token or it is incorrect!', common_1.HttpStatus.UNAUTHORIZED);
        super.getStatus();
    }
}
exports.AuthUnauthorizedException = AuthUnauthorizedException;
class AuthServiceUnavailableException extends common_1.HttpException {
    constructor() {
        super('The authorization server is unavailable, please try later...', common_1.HttpStatus.UNAUTHORIZED);
        super.getStatus();
    }
}
exports.AuthServiceUnavailableException = AuthServiceUnavailableException;
class DbCrashedException extends common_1.HttpException {
    constructor() {
        super('Db crashed!', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        super.getStatus();
    }
}
exports.DbCrashedException = DbCrashedException;
//# sourceMappingURL=exceptions.js.map