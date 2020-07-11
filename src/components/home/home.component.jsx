import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase/firebase.utils";

import Post from "../post/post.component";

import "./home.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="home">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram"
        />
        <CustomButton onClick={() => auth.signOut()}> Log out</CustomButton>
      </div>

      {posts.map(({ ...props }, i) => (
        <Post key={i} {...props} />
      ))}
    </div>
  );
}

export default Home;
