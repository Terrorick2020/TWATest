import { Injectable, NestMiddleware } from '@nestjs/common'
// HttpStatus
import { ConfigService } from '@nestjs/config'
// import {
//     AuthUnauthorizedException,
//     AuthServiceUnavailableException,
// } from '@/exceptions'
import { Request, Response, NextFunction } from 'express'

// import axios from 'axios'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly configService: ConfigService) {}

    async use(req: Request, _res: Response, next: NextFunction) {
        // const accessToken = req.headers.authorization

        // const AUTH_URL = this.configService.get<string>('AUTH_URL')

        // if (!accessToken) {
        //     throw AuthUnauthorizedException
        // }

        // const response = await axios.get(AUTH_URL, {
        //     headers: { Authorization: accessToken },
        // })

        // if (!response) {
        //     throw AuthServiceUnavailableException
        // }

        // if (response.status !== HttpStatus.OK) {
        //     throw AuthUnauthorizedException
        // }

        next()
    }
}
