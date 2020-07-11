import React from "react";

import Avatar from "@material-ui/core/avatar";
import "./post.styles.scss";

const Post = ({ username, caption, imageUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" srcSet="" alt="KingSaad98" />
        <h4 className="userame">{username}</h4>
      </div>
      <div className="image__div">
        <img className="post__img" src={imageUrl} alt="post" />
      </div>
      <div className="post__footer">
        <h4 className="post__text">
          <strong>{username} </strong>
          {caption}
        </h4>
      </div>
    </div>
  );
};

export default Post;
