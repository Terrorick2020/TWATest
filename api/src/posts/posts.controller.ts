import {
    Controller,
    HttpCode,
    HttpStatus,
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PostsService } from './posts.service'
import { ApiRoutes } from '~/config/routes.config'

import type { TNewPost, TEditionBody } from '~/types/posts.types'

const postsGlobal = ApiRoutes.posts.global
const postsInner = ApiRoutes.posts.inner

@Controller(postsGlobal)
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
        private readonly configService: ConfigService,
    ) {}

    @Get(postsInner.getList)
    @HttpCode(HttpStatus.OK)
    async getPostsList() {
        return this.postsService.getPostsList()
    }

    @Get(postsInner.byId)
    @HttpCode(HttpStatus.OK)
    async getPost(@Param('postId') postId: string) {
        return this.postsService.getPost(Number(postId))
    }

    @Post(postsInner.add)
    @HttpCode(HttpStatus.CREATED)
    async addPost(@Body() data: TNewPost) {
        return this.postsService.addPost(data)
    }

    @Put(postsInner.edit)
    @HttpCode(HttpStatus.OK)
    async editPost(@Body() editionBody: TEditionBody) {
        return this.postsService.editPost(editionBody)
    }

    @Delete(postsInner.delete)
    @HttpCode(HttpStatus.NO_CONTENT)
    async deletePost(@Body() postId: number) {
        return this.postsService.deletePost(postId)
    }
}
