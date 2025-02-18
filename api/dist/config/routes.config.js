"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoutes = void 0;
exports.apiRoutes = {
    app: {
        global: 'app',
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
};
//# sourceMappingURL=routes.config.js.map