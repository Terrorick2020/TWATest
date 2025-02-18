import { Controller, Get } from '@nestjs/common'

import { AppService } from './app.service'
import { apiRoutes } from '~/config/routes.config'

import type { TAppInnerRoutes } from '~/types/main.types'

const appGlobal: string = apiRoutes.app.global
const appInner: TAppInnerRoutes = apiRoutes.app.inner

@Controller(appGlobal)
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get(appInner.hello)
    getHello(): string {
        return this.appService.getHello()
    }
}
