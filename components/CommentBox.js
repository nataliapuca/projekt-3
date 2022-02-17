import React, { useState, createContext, useContext } from "react";
import { myContext } from "./ContextProvider";

export const CommentBox = (props) => {
  const {
    programComments,
    postChosen,
    setCommentChosen,
    commentChosen,
    setProgramComments,
  } = useContext(myContext);

  function onRemove(content) {
    setCommentChosen(content);
    setProgramComments(
      programComments.filter((comment) => comment.content !== commentChosen)
    );
  }

  return (
    <div>
      {programComments
        .filter((comment) => comment.target === postChosen)
        .map((comment, index) => (
          <div key={index} className="Post Comment">
            <h3>{comment.title}</h3>
            {comment.mail}
            <br></br>
            <br></br>
            {comment.content}
            <br></br>
            <div className="button-container">
              <button
                className="my-button remove"
                onClick={() => onRemove(comment.content)}
              >
                Remove comment
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
