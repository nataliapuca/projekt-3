import React, { useState, createContext, useContext } from "react";
import { myContext } from "./ContextProvider";
import { UserDetailsModal } from "./UserDetailsModal";
import { Link } from "react-router-dom";
import "./UserDetails.css";

export const UserDetails = (props) => {
  const {
    programPosts,
    userChosen,
    setPostChosen,
    setProgramPosts,
    postChosen,
    isModalShown,
    setIsModalShown,
  } = useContext(myContext);

  function onClick(content) {
    setPostChosen(content);
  }
  function onRemove(content) {
    setPostChosen(content);
    setProgramPosts(programPosts.filter((post) => post.content !== postChosen));
  }
  function onClickRight() {
    setIsModalShown(true);
  }
  return (
    <>
      <header className="App-header">
        <Link to="/">
          {" "}
          <button className="round-button cancel">go back</button>
        </Link>
        <h1>User Details</h1>
        <button className="round-button" onClick={onClickRight}>
          add post
        </button>
        {isModalShown && <UserDetailsModal overl />}
      </header>
      <div className="ContainerB">
        {programPosts
          .filter((post) => post.mail === userChosen)
          .map((post, index) => (
            <div key={index} className="Post">
              <h3>{post.title}</h3>
              {post.mail}
              <br></br>
              <br></br>
              {post.content}
              <br></br>
              <div className="button-container">
                <Link to="/PostDetails">
                  <button
                    className="my-button "
                    onClick={() => onClick(post.content)}
                  >
                    See post details
                  </button>
                </Link>
                <button
                  className="my-button remove"
                  onClick={() => onRemove(post.content)}
                >
                  Remove post
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
