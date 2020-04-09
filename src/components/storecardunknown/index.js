import React from "react";
import "./style.css";
import question from "../../assets/questionmarkpixel.png";

function Storecardunknown(props) {
  return (
    <div className="storecardunknown">
      <div className="storecardimgunknown">
        <img alt="question" src={question} className="scpicture" />
      </div>
      <div>
        <p className="storecardtitle">???</p>
      </div>

      <p className="storecardcost">??????????</p>
      <div>
        <p className="storecardowned">NA</p>
      </div>
      <div className="storecarddesc">
        <p className="Pixlefont descspacing">{props.desc}</p>
      </div>
    </div>
  );
}
export default Storecardunknown;
