import React, { useState } from "react";
import "./NewData.css";

export default function NewData(props) {
  const [newPerson, setNewPerson] = useState({
    city: "",
    country: "",
    employer: "",
    favoriteMovies: [],
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

  // function handleFirstMovie(event) {
  //   const first = [...newPerson.favoriteMovies, event.target.value];
  //   setNewPerson((prevNewPerson) => {
  //     return {
  //       ...prevNewPerson,
  //       favoriteMovies: first,
  //     };
  //   });
  //   console.log(newPerson.favoriteMovies);
  // }

  // function handleSecondMovie(event) {
  //   const second = [...newPerson.favoriteMovies, event.target.value];
  //   setNewPerson((prevNewPerson) => {
  //     return {
  //       ...prevNewPerson,
  //       favoriteMovies: second,
  //     };
  //   });
  //   console.log(newPerson.favoriteMovies);
  // }

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
        <input type="text" /> <br />
        <input type="text" /> <br />
        <input type="text" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
