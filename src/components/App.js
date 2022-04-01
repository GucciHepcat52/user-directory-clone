import React, { createContext, useState } from "react";
import "./App.css";
import Header from "../components/header/Header";
import Display from "./display/Display";
import data from "../data";

const DataContext = createContext();

function App() {
  const [userData, setUserData] = useState(data);
  return (
    <DataContext.Provider value={{ userData, setUserData }}>
      <div className="App">
        <Header />
        <div className="main-div">
          <Display />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
export { DataContext };
