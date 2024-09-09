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
                <li key={comment.id}>{comment.text}<br></br>
                <button onClick={() => deleteComment(comment.id)}>Удалить {comment.id} комментарий</button>
                </li>
            )}
        </ul>
    );
}

export default CommentsList;