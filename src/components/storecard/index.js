import React from "react";
import "./style.css";
import Buy from "../../assets/buyiconpixel.png";
import Arrow from "../../assets/arrowpixel2.png";

function Storecard(props) {
  function Description() {
    const arrowup = document.querySelector(".arrowup");
    const arrowdown = document.querySelector(".arrowdown");
    const desc = document.querySelector(".storecarddesc");
    if (arrowdown.style.display === "none") {
      arrowdown.style.display = "block";
      arrowup.style.display = "none";
      desc.style.display = "none";
    } else {
      arrowdown.style.display = "none";
      arrowup.style.display = "block";
      desc.style.display = "block";
    }
  }
  function Buybutton() {
    document.querySelector(".scbuy").classList.add("buyclick");
    setTimeout(function () {
      document.querySelector(".scbuy").classList.remove("buyclick");
    }, 690);
  }
  return (
    <div className="storecard Pixlefont">
      <div>
        <img
          className="storecardbackground"
          alt="background"
          src={props.background}
        ></img>
      </div>
     

      <div className="storecardimg">
        <img alt={props.name} src={props.image} className="scpicture" />
        
      </div>
      <div>
        <img
          className="arrowdown"
          alt="open"
          src={Arrow}
          onClick={Description}
        />
        <img className="arrowup" alt="open" src={Arrow} onClick={Description} />
      </div>
      <p className="storecardtitle">{props.name}</p>

      <p className="storecardcost">99999999999</p>
      <div>
        <p className="storecardowned">999 owned</p>
      </div>
      <div className="storecarddesc">
        <p className="Pixlefont descspacing">{props.desc}</p>
        <p className="Pixlefont descblink">.</p>
      </div>
      <div className="storecardbuy">
        <img alt={props.name} src={Buy} className="scbuy" onClick={Buybutton} />
      </div>
    </div>
  );
}
export default Storecard;
