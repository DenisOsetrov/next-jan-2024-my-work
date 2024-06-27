interface IUser {
    name: string;
    id: number;
    username: string;
    email: string;
}

interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string,
}

interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}