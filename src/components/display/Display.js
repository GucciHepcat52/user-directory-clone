import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import "./Display.css";
import NewData from "./NewData";

export default function Display() {
  const { userData, setUserData } = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(1);
  const person = userData[index];
  const [displayNew, setDisplayNew] = useState(false)

  // console.log(userData);

  function prevHandler() {
    if (counter > 1) {
      setIndex(index - 1);
      setCounter(counter - 1);
    } else {
      console.log("cant go down more");
    }
  }

  function deleteHandler() {
    setUserData((prevUserData) => {
      const newState = [...prevUserData];
      newState.splice(index, 1);
      return newState;
    });
  }

  function nextHandler() {
    if (counter < userData.length) {
      setIndex(index + 1);
      setCounter(counter + 1);
    } else {
      console.log("cant go up more");
    }
  }

  return (
    <div className="Display">
      <div className="box">
        <h2 className="counter">
          {counter}/{userData.length}
        </h2>
        <div key={index} className="user-display">
          <h2 className="name">
            {person.name.first} {person.name.last}
          </h2>
          <div className="user-info">
            <h3 className="info">
              From:{" "}
              <p>
                {person.city}, {person.country}
              </p>
            </h3>
            <h3 className="info">
              Job Title: <p>{person.title}</p>
            </h3>
            <h3 className="info">
              Employer: <p>{person.employer}</p>
            </h3>
          </div>
          <h3>Favorite Movies:</h3>
          <ol>
            <li>{person.favoriteMovies[0]}</li>
            <li>{person.favoriteMovies[1]}</li>
            <li>{person.favoriteMovies[2]}</li>
          </ol>
        </div>
      </div>
      <div className="nav-bar">
        <button className="direction-btns" onClick={prevHandler}>
          {"< Previous"}
        </button>
        <div className="middle-btns">
          <button>{"Edit"}</button>
          <button onClick={deleteHandler}>{"Delete"}</button>
          <button onClick={() => setDisplayNew(!displayNew)}>{"New"}</button>
        </div>
        <button className="direction-btns" onClick={nextHandler}>
          {"Next >"}
        </button>
      </div>
        <NewData display={displayNew}/>
    </div>
  );
}
