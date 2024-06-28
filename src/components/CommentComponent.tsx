import React, {FC} from 'react';

interface IProps {
    comment: IComment;
}
const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            <h4>{comment.id}. {comment.name}</h4>
            <h4>Email: {comment.email}</h4>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;