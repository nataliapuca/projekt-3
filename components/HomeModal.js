import React, { useState, useContext } from "react";
import { myContext } from "./ContextProvider";
import "./HomeModal.css";

export const HomeModal = (props) => {
  const { setIsModalShown, setProgramUsers, programUsers } =
    useContext(myContext);

  const [inputs, setInputs] = useState({});

  let user = {};
  let users = programUsers;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
    user = inputs;
    users.push(user);
    setProgramUsers(users);
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
              Name:
              <input
                type="text"
                name="name"
                value={inputs.name || ""}
                className="input"
                onChange={handleChange}
              />
            </label>{" "}
            <br></br>
            <label>
              Surename:
              <input
                type="text"
                name="surename"
                value={inputs.surename || ""}
                className="input"
                onChange={handleChange}
              />
            </label>
            <br></br>
            <label>
              Job:
              <input
                type="text"
                name="job"
                value={inputs.job || ""}
                className="input"
                onChange={handleChange}
              />
            </label>
            <br></br>
            <label>
              Town:{" "}
              <input
                type="text"
                name="town"
                value={inputs.town || ""}
                className="input"
                onChange={handleChange}
              />
            </label>
            <br></br>
            <label>
              Age:{" "}
              <input
                type="text"
                name="age"
                value={inputs.age || ""}
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
              value="add user"
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
