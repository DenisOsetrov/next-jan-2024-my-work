import React from 'react';
import {postService} from "@/services/post.service";

type Params = {id:string};
const PostByIdPage = async ({params}: {params:Params}) => {

    const post = await postService.getPostById(params.id);
    return (
        <div>
            <h4>№{post?.id}.</h4>
            <h5>{post?.body}</h5>
            <p>Title: {post?.title}</p>
        </div>
    );
};

export default PostByIdPage;