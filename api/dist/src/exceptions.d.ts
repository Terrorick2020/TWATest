import { HttpException } from '@nestjs/common';
export declare class AuthUnauthorizedException extends HttpException {
    constructor();
}
export declare class AuthServiceUnavailableException extends HttpException {
    constructor();
}
export declare class DbCrashedException extends HttpException {
    constructor();
}
