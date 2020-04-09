import React from "react";
import "./style.css";
import minivirus from "../../assets/virus_mini.png";
import virus from "../../assets/Virus.png";
import "../../hover.css";

class PageClicker extends React.Component {
  render() {
    return (
      <div>
        <div className="backgroundMain"></div>
        <div className="x1">
        <img className="y1" src={minivirus} alt="virus"></img>
        </div>
        <div className="x2">
        <img className="y2" src={minivirus} alt="virus"></img>
        </div>
        <div className="x3">
        <img className="y3" src={minivirus} alt="virus"></img>
        </div>
        <div className="x4">
        <img className="y4" src={minivirus} alt="virus"></img>
        </div>
        <div className="x5">
          <img className="y5" src={minivirus} alt="virus"></img>
        </div>
        <div className="backgroundTop"></div>
        <div className="clicker">
        <img className="virus1 hvr-bounce-out hvr-bounce-out:hover hvr-bounce-out:focus hvr-bounce-out:active" src={virus} alt="virus"></img>
        </div>
      </div>
    );
  }
}

// LOOK AT THE CSS FILE FOR THE ANIMATION.

export default PageClicker;
