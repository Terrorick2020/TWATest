export default () => ({
    apiRoutes: {
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
    },
})

export const ApiRoutes = {
    prefix: 'api',
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
} as const
