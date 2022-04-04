import React, { useState, useContext } from "react";
import "./NewData.css";
import { DataContext } from "../App";

export default function NewData(props) {
  const { userData, setUserData } = useContext(DataContext);
  const [newPerson, setNewPerson] = useState({
    city: "",
    country: "",
    employer: "",
    favoriteMovies: ["", "", ""],
    name: {
      first: "",
      last: "",
    },
    title: "",
  });

  function handleFirstNameChange(event) {
    const { value } = event.target;
    setNewPerson((prevNewPerson) => {
      return {
        ...prevNewPerson,
        name: {
          ...prevNewPerson.name,
          first: value,
        },
      };
    });
  }

  function handleLastNameChange(event) {
    const { value } = event.target;
    setNewPerson((prevNewPerson) => {
      return {
        ...prevNewPerson,
        name: {
          ...prevNewPerson.name,
          last: value,
        },
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewPerson((prevNewPerson) => {
      return {
        ...prevNewPerson,
        [name]: value,
      };
    });
  }

  function handleMovieChange(event) {
    const { name, value } = event.target;
    setNewPerson((prevNewPerson) => {
      const newArray = (prevNewPerson.favoriteMovies[name] = value);
      return {
        ...prevNewPerson,
        favoriteMovies: [...prevNewPerson.favoriteMovies, newArray].filter(
          (movie, index) => index < 3
        ),
      };
    });
  }

  function handleSubmit() {
    const addedPerson = {...newPerson, id: userData.length + 1}
    setUserData((prevData) => {
      return [...prevData, addedPerson];
    });
  }

  return (
    <div className="new-data-container" id={props.display ? null : "hidden"}>
      <form>
        <label htmlFor="fname">Enter First Name:</label> <br />
        <input
          type="text"
          id="fname"
          name="first"
          value={newPerson.name.first}
          onChange={handleFirstNameChange}
        />{" "}
        <br />
        <label htmlFor="lname">Enter Last Name:</label> <br />
        <input
          type="text"
          id="lname"
          name="last"
          value={newPerson.name.last}
          onChange={handleLastNameChange}
        />{" "}
        <br />
        <label htmlFor="job">Enter Job Title:</label> <br />
        <input
          type="text"
          id="job"
          name="title"
          value={newPerson.title}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="employer">Enter Employer:</label> <br />
        <input
          type="text"
          id="employer"
          name="employer"
          value={newPerson.employer}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="city">Enter City:</label> <br />
        <input
          type="text"
          id="city"
          name="city"
          value={newPerson.city}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="country">Enter Country:</label> <br />
        <input
          type="text"
          id="country"
          name="country"
          value={newPerson.country}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Enter Your Top 3 Movies:</label> <br />
        <input type="text" name="0" onChange={handleMovieChange} /> <br />
        <input type="text" name="1" onChange={handleMovieChange} /> <br />
        <input type="text" name="2" onChange={handleMovieChange} /> <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
