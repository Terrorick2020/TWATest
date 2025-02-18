import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiRoutes } from '~/config/routes.config'

const appGlobal = ApiRoutes.app.global
const appInner = ApiRoutes.app.inner

@Controller(appGlobal)
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get(appInner.hello)
    getHello(): string {
        return this.appService.getHello()
    }
}
