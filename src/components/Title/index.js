import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title"> Clicky Game Score: {props.score} Highscore: {props.highscore}  </h1>;
 
}

export default Title;