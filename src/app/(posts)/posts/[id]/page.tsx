import React from 'react';
import {postService} from "@/services/post.service";

type Params = {id:string};
const PostByIdPage = async ({params}: {params:Params}) => {

    const post = await postService.getPostById(params.id);
    return (
        <div>
            <h4>{post?.id}. {post?.body}</h4>
            <p>{post?.title}</p>
        </div>
    );
};

export default PostByIdPage;