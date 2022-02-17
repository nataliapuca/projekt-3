import React, { useState, useContext } from "react";
import { myContext } from "./ContextProvider";
import "./HomeModal.css";

export const UserDetailsModal = (props) => {
  const { setIsModalShown, setProgramPosts, programPosts } =
    useContext(myContext);

  const [inputs, setInputs] = useState({});

  let post = {};
  let posts = programPosts;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    post = inputs;
    posts.push(post);
    setProgramPosts(posts);
    setInputs({});
    setIsModalShown(false);
  };

  return (
    <div className="Modal" aria-hidden="true">
      <div className="Window Card">
        <form className="form" onSubmit={handlePostSubmit}>
          <>
            <label>
              Mail:{" "}
              <input
                type="text"
                name="mail"
                value={inputs.mail || ""}
                className="input"
                onChange={handleChange}
              />
            </label>
            <br></br>
            <label>
              Content:
              <input
                type="text"
                name="content"
                value={inputs.content || ""}
                className="input"
                onChange={handleChange}
              />
            </label>{" "}
            <br></br>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={inputs.title || ""}
                className="input"
                onChange={handleChange}
              />
            </label>
            <br></br>
          </>

          <div className="button-container">
            <input
              type="submit"
              className="my-button "
              value="add post"
            ></input>
            <button
              className="my-button remove"
              onClick={() => setIsModalShown(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
