import { Injectable } from '@nestjs/common'
import { DbCrashedException } from '@/exceptions'
import { PrismaService } from '~/prisma/prisma.service'
import { PostsListFields, PostFields } from './utils/posts.utils'

import type { TNewPost, TEditionBody } from '~/types/posts.types'

@Injectable()
export class PostsService {
    constructor(private readonly prisma: PrismaService) {}

    async getPostsList() {
        const postsList = await this.prisma.posts.findMany({
            select: {
                ...PostsListFields,
            },
        })

        if (!postsList) {
            throw DbCrashedException
        }

        return {
            message: 'success',
            postsList,
        }
    }

    async getPost(postId: number) {
        const post = await this.prisma.posts.findUnique({
            where: {
                id: postId,
            },
            select: {
                ...PostFields,
            },
        })

        if (!post) {
            throw DbCrashedException
        }

        return {
            message: 'success',
            post,
        }
    }

    async addPost(data: TNewPost) {
        // const newPost = await this.prisma.posts.create({
        //     data,
        // })

        // if (!newPost) {
        //     throw DbCrashedException
        // }

        return {
            message: 'success',
            data,
            // newPost,
        }
    }

    async editPost(editionBody: TEditionBody) {
        const editionPost = await this.prisma.posts.update({
            where: {
                id: editionBody.postId,
            },
            data: {
                ...editionBody.data,
            },
            select: {
                ...PostFields,
            },
        })

        if (!editionPost) {
            throw DbCrashedException
        }

        return {
            message: 'success',
            editionPost,
        }
    }

    async deletePost(postId: number) {
        const deletedPost = await this.prisma.posts.delete({
            where: {
                id: postId,
            },
            select: { id: true },
        })

        if (!deletedPost) {
            throw DbCrashedException
        }

        return {
            message: 'success',
        }
    }
}
