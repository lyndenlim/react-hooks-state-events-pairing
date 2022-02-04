function Comments({ comments }) {
    const commentsElements = comments.map(comment => {
        return (
            <>
                <h3>{comment.user}</h3>
                <small>{comment.comment}</small>
            </>
        )
    })

    return (
        <div>
            <h2>2 Comments</h2>
            {commentsElements}
        </div>
    )
}

export default Comments