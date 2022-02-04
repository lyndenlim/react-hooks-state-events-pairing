import video from "../data/video.js";
import Video from "./Video"
import RatingButton from "./RatingButtons";
import CommentButton from "./CommentButton"
import Comments from "./Comments"
import React, { useState } from "react";

function App() {
  const [isCommentShow, setIsCommentShow] = useState(true)

  return (
    <div className="App">
      <Video
        embedUrl={video.embedUrl}
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
      />
      <br></br>
      <RatingButton upvotes={video.upvotes} downvotes={video.downvotes} />
      <br></br>
      <CommentButton isCommentShow={isCommentShow} setIsCommentShow={setIsCommentShow}/>
      <hr />
      {isCommentShow ? <Comments comments={video.comments}/> : null}
    </div>

  );
}

export default App;
