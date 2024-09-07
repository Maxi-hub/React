import { useState } from "react";

function CommentsList() {

    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const deleteComment = (id) => {
        const newComments = comments.filter(comment => comment.id !== id);
        console.log(newComments);
        setComments(newComments);
    }

    return (
        <ul>
            {comments.map(comment =>
                <div key={comment.id}>
                    <li>{comment.text}</li>
                    <button onClick={() => deleteComment(comment.id)}>Удалить {comment.id} комментарий</button>
                </div>)}
        </ul>
    );
}

export default CommentsList;