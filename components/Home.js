import React, { useContext } from "react";
import { myContext } from "./ContextProvider";
import { Link } from "react-router-dom";
import "./Home.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { chosenUser } from "../features/user";
import { adduser } from "../features/users";

export const Home = () => {
  const { setUserChosen, isModalShown, setIsModalShown } =
    useContext(myContext);

  const dispatch = useDispatch();
  const programUsers = useSelector((state) => state.users.value);
  const x = useSelector((state) => state.user.value);

  function onClick() {
    dispatch(
      chosenUser({
        name: "Aleksander",
        surename: "Stecki",
        age: "23",
        mail: "olololo@gmail.com",
        job: "student",
      })
    );
    console.log(x);
  }

  function onClickRight() {
    dispatch(
      adduser({
        name: "Aleksander",
        surename: "Stecki",
        age: "23",
        mail: "olololo@gmail.com",
        job: "student",
      })
    );
    console.log(programUsers);
  }

  return (
    <>
      <header className="App-header">
        <button className="round-button cancel">welcome to my app!</button>
        <h1>Home</h1>
        <button className="round-button" onClick={onClickRight}>
          add user
        </button>
      </header>
      <div className="ContainerA">
        <button className="my-button" onClick={() => onClick()}>
          See user details
        </button>
      </div>
    </>
  );
};
