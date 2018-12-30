import React from "react";
import AllCards from "./AllCards";

const App = () => {
  return (
    <div className="container">
      <ul className="nav nav-tabs bg-dark mb-5 justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <h1 className="text-center">Star Wars Characters</h1>
      <div className="container mb-5">
        <div className="row mt-5">
          <AllCards />
        </div>
      </div>
    </div>
  );
};

export default App;
