//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
ReactDom.render(
  <div>
    <h1>hello world</h1>
    <p>{time}</p>
  </div>,
  document.getElementById("root")
);
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
