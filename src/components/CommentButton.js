function CommentButton({ isCommentShow, setIsCommentShow }) {
    function handleClick() {
        setIsCommentShow(isCommentShow => !isCommentShow)
    }

    return (
        <button onClick={handleClick}>{isCommentShow ? "Hide Comments" : "Show Comments"}</button>
    )
}

export default CommentButton