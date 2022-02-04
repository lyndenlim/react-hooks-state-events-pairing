import { useState } from "react"

function RatingButton({ upvotes, downvotes }) {
    const [upvoteCount, setUpvoteCount] = useState(upvotes)
    const [downvoteCount, setDownvoteCount] = useState(downvotes)

    function handleUpvote() {
        setUpvoteCount(upvoteCount => upvoteCount + 1)
    }

    function handleDownvote() {
        setDownvoteCount(downvoteCount => downvoteCount + 1)
    }

    return (
        <div>
            <button onClick={handleUpvote}>{`${upvoteCount}👍`}</button>
            <button onClick={handleDownvote}>{`${downvoteCount}👎`}</button>
        </div>
    )
}

export default RatingButton