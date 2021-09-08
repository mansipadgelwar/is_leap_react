import React, { useState } from "react";
import "./styles.css";

let inputDate = "";
let userName = "";

export default function App() {
  const [output, setOutput] = useState("");

  function isLeapYear(year) {
    year = Number(year);

    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }

  function clickHandler(e) {
    e.preventDefault();

    var userBirthDate = inputDate.split("-");
    var output = "";
    var YYYY = Number(userBirthDate[0]);

    if (userName === "" && inputData === "") {
      output = "Please enter all the details.";
    } else if (inputDate === "") {
      output = "Please enter your birthdate.";
    } else if (userName === "") {
      output = "Please enter your name.";
    } else {
      if (isLeapYear(YYYY)) {
        output = "🎊🎉Hurray!! You were born on a leap year. ";
      } else {
        output = "😥Ohh no!! You were not born on a leap year.";
      }
    }
    setOutput(output);
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>enter name and DOB to check were you born on a leap year.</h2>
      <div>
        <input
          className="input"
          type="text"
          onChange={(e) => {
            userName = e.target.value;
          }}
          placeholder="Enter name"
        />
      </div>
      <div>
        <input
          className="input"
          id="txt-input"
          type="date"
          onChange={(e) => {
            inputDate = e.target.value;
          }}
          placeholder="DD/MM/YYYY"
        />
      </div>
      <div>
        <button onClick={clickHandler} type="submit">
          Is LeapYear
        </button>
      </div>
      <div className="output">
        <h1>{output}</h1>
      </div>
    </div>
  );
}
