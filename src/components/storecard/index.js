import React from "react";
import "./style.css";
import Bat from "../../assets/batpixel.png";
import Buy from "../../assets/buyiconpixel.png";
import Arrow from "../../assets/arrowpixel2.png"

function Storecard(props) {
  return (
    <div className="storecard">
      <div className="storecardimg">
        <img alt={props.name} src={Bat} className="scpicture" />
      </div>
      <div className="storecardtitle">
        <p>{props.name}</p>
      </div>
      <div className="storecardbutton">
        <div className="descriptionopen">
          <img className="arrowdown" alt="open" src={Arrow}/>
        </div>
        <div className="descriptionclosed">
          <img className="arrowup" alt="open" src={Arrow}/>
        </div>
      </div>

      <div className="storecardcost">
      <p>999999999</p>
      </div>
      {/* <div>
        <p>{props.desc}</p>
      </div> */}
    </div>
  );
}
export default Storecard;
