import React from "react";
import "./style.css";

function Title(props) {
  return <header className="title"> Clicky Game  
  <h4>Click on any image to earn a point, but don't click on the same picture more than once or you lose. </h4>
  <h3>Score: {props.score} Highscore: {props.highscore} </h3> 
    </header>
 
}

export default Title;