import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AuthMiddleware } from '@/middleware/auth.middleware'

import { PrismaModule } from '~/prisma/prisma.module'
import { PostsController } from './posts.controller'
import { PostsService } from './posts.service'

import type { TApiRoutes, TPostsInnerRoutes } from '~/types/main.types'

@Module({
    imports: [PrismaModule],
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostsModule implements NestModule {
    constructor(private readonly configService: ConfigService) {}

    configure(consumer: MiddlewareConsumer) {
        const apiRoutes: TApiRoutes =
            this.configService.get<TApiRoutes>('apiRoutes')

        const postsRoutesGlob: string = apiRoutes.posts.global
        const postsRoutesInner: TPostsInnerRoutes = apiRoutes.posts.inner

        consumer.apply(AuthMiddleware).forRoutes(
            {
                path: `/${postsRoutesGlob}/${postsRoutesInner.add}`,
                method: RequestMethod.POST,
            },
            {
                path: `/${postsRoutesGlob}/${postsRoutesInner.edit}`,
                method: RequestMethod.PUT,
            },
            {
                path: `/${postsRoutesGlob}/${postsRoutesInner.delete}`,
                method: RequestMethod.DELETE,
            },
        )
    }
}
