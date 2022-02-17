import React, { useState, useContext } from "react";
import { myContext } from "./ContextProvider";
import "./HomeModal.css";

export const PostDetailsModal = (props) => {
  const { setIsModalShown, setProgramComments, programComments } =
    useContext(myContext);

  const [inputs, setInputs] = useState({});

  let comment = {};
  let comments = programComments;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
    comment = inputs;
    comments.push(comment);
    setProgramComments(comments);
    setInputs({});
    setIsModalShown(false);
  };

  return (
    <div className="Modal" aria-hidden="true">
      <div className="Window Card">
        <form className="form" onSubmit={handleUserSubmit}>
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
              Title:
              <input
                type="text"
                name="title"
                value={inputs.title || ""}
                className="input"
                onChange={handleChange}
              />
            </label>{" "}
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
            </label>
            <br></br>
            <label>
              Target:
              <input
                type="text"
                name="target"
                value={inputs.target || ""}
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
              value="add comment"
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
