//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
const greetings = ["Good Morning", "Good Afternoon", "Good Evening"];
//Apply the "heading" style in the styles.css
import "/public/styles.css";
//Dynamically change the color of the h1 using inline css styles.
var customiseStyle = { color: "" };
//Morning = red, Afternoon = green, Night = blue.
if (today.getHours() < 12) {
  var greets = greetings[0];
  customiseStyle.color = "red";
} else if (today.getHours() < 18) {
  var greets = greetings[1];
  customiseStyle.color = "violet";
} else {
  var greets = greetings[2];
  customiseStyle.color = "blue";
}
ReactDom.render(
  <div>
    {" "}
    <h1>hello world</h1> <p>{time}</p> <h1 style={customiseStyle}>{greets}</h1>{" "}
  </div>,
  document.getElementById("root")
);
