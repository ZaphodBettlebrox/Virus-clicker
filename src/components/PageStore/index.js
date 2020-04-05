import React from "react";
import "./style.css";
import Storelogo from "../../assets/Store_Blue.PNG";
import Storecardhandler from "../storecardhandler";

function PageStore() {
  return (
    <div>
      <div className="row storePage">
        <div className="row">
          <img
            className="Pagestore-logo"
            src={Storelogo}
            alt="Settings"
          ></img>
        </div>
        <div className="storemoney Pixlefont">
          Virus: 10000
        </div>
        <div className="storecards">
          <Storecardhandler/>
        </div>
      </div>
    </div>
  );
}

export default PageStore;
