import React, { useContext } from "react";
import { DataContext } from "../App";
import "./Display.css";

export default function Display() {
  const { userData, setUserData } = useContext(DataContext);

  function clickHandler() {
    console.log(userData);
  }
  return (
    <div className="Display">
      <div className="box"></div>
      <div className="nav-bar">
        <button className="direction-btns">{"< Previous"}</button>
        <div className="middle-btns">
          <button>{"Edit"}</button>
          <button>{"Delete"}</button>
          <button>{"New"}</button>
        </div>
        <button className="direction-btns" onClick={clickHandler}>
          {"Next >"}
        </button>
      </div>
    </div>
  );
}
