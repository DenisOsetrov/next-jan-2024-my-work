import React from 'react';
import {commentService} from "@/services/comment.service";
import CommentComponent from "@/components/CommentComponent";

const CommentsPage = async () => {

    const comments = await commentService.getAllComments();

    return (
        <div>
            CommentsPage
            <ul>
                {comments.map((comment: IComment) => (
                    <li key={comment.id}>
                        <CommentComponent comment={comment}/>
                    </li>
                ) )}
            </ul>
        </div>
    );
};

export default CommentsPage;