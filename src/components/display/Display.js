import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import "./Display.css";

export default function Display() {
  const { userData, setUserData } = useContext(DataContext);
  const [index, setIndex] = useState(1);

  console.log(userData);

  function prevHandler() {
    if (index > 1) {
      setIndex(index - 1);
    } else {
      console.log("cant go down more");
    }
  }

  function nextHandler() {
    if (index < userData.length) {
      setIndex(index + 1);
    } else {
      console.log("cant go up more");
    }
  }

  return (
    <div className="Display">
      <div className="box">
        <h2 className="counter">
          {index}/{userData.length}
        </h2>
        {userData
          .filter((person) => {
            return person.id === index;
          })
          .map((person, index) => {
            return (
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
            );
          })}
      </div>
      <div className="nav-bar">
        <button className="direction-btns" onClick={prevHandler}>
          {"< Previous"}
        </button>
        <div className="middle-btns">
          <button>{"Edit"}</button>
          <button>{"Delete"}</button>
          <button>{"New"}</button>
        </div>
        <button className="direction-btns" onClick={nextHandler}>
          {"Next >"}
        </button>
      </div>
    </div>
  );
}
