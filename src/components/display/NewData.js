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

  return (
    <div className="new-data-container" id={props.display ? null : "hidden"}>
      <form>
        <label htmlFor="fname">Enter First Name:</label> <br />
        <input type="text" id="fname" /> <br />
        <label htmlFor="lname">Enter Last Name:</label> <br />
        <input type="text" id="lname" /> <br />
        <label htmlFor="job">Enter Job Title:</label> <br />
        <input type="text" id="job" /> <br />
        <label htmlFor="employer">Enter Employer:</label> <br />
        <input type="text" id="employer" /> <br />
        <label htmlFor="city">Enter City:</label> <br />
        <input type="text" id="city" /> <br />
        <label htmlFor="country">Enter Country:</label> <br />
        <input type="text" id="country" /> <br />
        <label>Enter Your Top 3 Movies:</label> <br />
        <input type="text" /> <br />
        <input type="text" /> <br />
        <input type="text" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
