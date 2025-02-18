import { HttpException, HttpStatus } from '@nestjs/common'

export class AuthUnauthorizedException extends HttpException {
    constructor() {
        super(
            'There is no access token or it is incorrect!',
            HttpStatus.UNAUTHORIZED,
        )
        super.getStatus()
    }
}
export class AuthServiceUnavailableException extends HttpException {
    constructor() {
        super(
            'The authorization server is unavailable, please try later...',
            HttpStatus.UNAUTHORIZED,
        )
        super.getStatus()
    }
}

export class DbCrashedException extends HttpException {
    constructor() {
        super('Db crashed!', HttpStatus.SERVICE_UNAVAILABLE)
        super.getStatus()
    }
}
