import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { PostsModule } from '@/posts/posts.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import mainConfig from '~/config/main.config'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [mainConfig],
        }),
        PostsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
