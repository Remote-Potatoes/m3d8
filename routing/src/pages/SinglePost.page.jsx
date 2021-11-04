import React from "react";
import { useParams } from "react-router";

function SinglePost() {
  // req.params -> app.get("/posts/:postId") -> req.params.postId
  const { postId } = useParams();
  return (
    <div>
      What is the post id?? {"=>"} {postId}
    </div>
  );
}

export default SinglePost;
