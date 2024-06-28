import React, {FC} from 'react';
import Link from "next/link";

interface IProps {
    post: IPost;
}
const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <Link href={`/posts/${post.id}`}>{post.id}. {post.title}</Link>
            {/*<h2>{post.title}</h2>*/}
            {/*<p>{post.body}</p>*/}
        </div>
    );
};

export default PostComponent;