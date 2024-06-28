import React from 'react';
import {postService} from "@/services/post.service";
import PostComponent from "@/components/PostComponent";

const PostsPage = async () => {

    let posts = await postService.getAllPosts();
    return (
        <div>
            PostsPage
            <ul>
                {posts.map((post: IPost) => (
                    <li key={post.id}>
                        <PostComponent post={post}/>
                    </li>))}
            </ul>
        </div>
    );
};

export default PostsPage;