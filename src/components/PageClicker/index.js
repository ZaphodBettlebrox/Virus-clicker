import React from "react";
import "./style.css";
import minivirus from "../../assets/virus_mini.png";
import virus from "../../assets/Virus.png";
import "../../hover.css";

class PageClicker extends React.Component {

  Clickerbobdown() {
    const test = document.querySelector(".virus1");
    // test.style.width=90%
      // document.querySelector(".virus1").classList.add("virusbobdown");
    
  }

  Clickerbobup(){
    // document.querySelector(".virus1").classList.add("virusbobup");
    // setTimeout(function () {
    //   document.querySelector(".virus1").classList.remove("virusbobdown");
    // }, 999);
  }

  render() {

    return (
      <div className="clickerPage">
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
          <img
            className="virus1"
            src={virus}
            alt="virus"
            onMouseDown={this.Clickerbobdown}
            onMouseUp={this.Clickerbobup}
          ></img>
        </div>
      </div>
    );
  }
}

// LOOK AT THE CSS FILE FOR THE ANIMATION.

export default PageClicker;
