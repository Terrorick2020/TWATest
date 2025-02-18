export type TNewPost = {
    headline: string;
    desc: string;
    text: string;
};
type TEditionPost = {
    headline?: string;
    desc?: string;
    text?: string;
};
export type TEditionBody = {
    postId: number;
    data: TEditionPost;
};
export {};
