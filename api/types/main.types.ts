export type TAppInnerRoutes = {
    hello: string
}

export type TAppRoutes = {
    global: string
    inner: TAppInnerRoutes
}

export type TPostsInnerRoutes = {
    getList: string
    byId: string
    add: string
    edit: string
    delete: string
}

export type TPostsRoutes = {
    global: string
    inner: TPostsInnerRoutes
}

export type TApiRoutes = {
    app: TAppRoutes
    posts: TPostsRoutes
}

export type 