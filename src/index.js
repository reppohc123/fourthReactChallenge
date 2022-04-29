//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";
import "/public/styles.css";

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
const greetings = ["Good Morning", "Good Afternoon", "Good Evening"];
var greets = greetings[0];
if (today.getHours() >= 12 && today.getHours() < 18) {
  var greets = greetings[1];
} else if (today.getHours() >= 18 && today.getHours() < 0) {
  var greets = greetings[2];
} else {
  var greets = "The time has an faulty vaulue";
}

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.

ReactDom.render(
  <div>
    <h1>hello world</h1>
    <p>{time}</p>
    <h1 className="heading">{greetings[0]}</h1>
  </div>,
  document.getElementById("root")
);
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
