import React from "react";
import "./style.css";
import Storelogo from "../../assets/Store_Blue.PNG";
import Storecardhandler from "../storecardhandler";
import minivirus from "../../assets/virus_mini.png";

function PageStore() {
  return (
    <div className="storePage">
      <div className="storeheader">
        <div className="row">
          <img className="Pagestore-logo" src={Storelogo} alt="Store"></img>
        </div>
        <div className="storemoney Pixlefont">Virus: 10000</div>
        <img className="minivirus1" src={minivirus} alt="virus"></img>
        <img className="minivirus2" src={minivirus} alt="virus"></img>
        <img className="minivirus3" src={minivirus} alt="virus"></img>
        <img className="minivirus4" src={minivirus} alt="virus"></img>
        <img className="minivirus5" src={minivirus} alt="virus"></img>
        <img className="minivirus6" src={minivirus} alt="virus"></img>
      </div>

      <div className="storescroll">
        <Storecardhandler />
      </div>
    </div>
  );
}

export default PageStore;
