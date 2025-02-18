import { TApiRoutes } from '~/types/main.types'

export const apiRoutes: TApiRoutes = {
    app: {
        global: '',
        inner: {
            hello: 'hello',
        },
    },
    posts: {
        global: 'posts',
        inner: {
            getList: 'get-list',
            byId: ':postId',
            add: 'add',
            edit: 'edit',
            delete: 'delete',
        },
    },
}
