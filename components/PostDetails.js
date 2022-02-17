import React, { useState, createContext, useContext } from "react";
import { myContext } from "./ContextProvider";
import "./PostDetails.css";
import { CommentBox } from "./CommentBox";
import { PostDetailsModal } from "./PostDetailsModal";
import { Link } from "react-router-dom";

export const PostDetails = (props) => {
  const { programPosts, postChosen, setIsModalShown, isModalShown } =
    useContext(myContext);

  function onClickRight() {
    setIsModalShown(true);
  }

  return (
    <>
      <header className="App-header">
        <Link to="/UserDetails">
          <button className="round-button cancel">go back</button>
        </Link>
        <h1>Post Details</h1>
        <button className="round-button" onClick={onClickRight}>
          add comment
        </button>
        {isModalShown && <PostDetailsModal overl />}
      </header>
      <div className="ContainerB">
        {programPosts
          .filter((post) => post.content === postChosen)
          .map((post, index) => (
            <div key={index} className="Post">
              <h3>{post.title}</h3>
              {post.mail}
              <br></br>
              <br></br>
              {post.content}
              <br></br>
            </div>
          ))}
        <CommentBox></CommentBox>
      </div>
    </>
  );
};
