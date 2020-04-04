import React from "react";
import "./style.css";
import Settingslogo from "../../assets/Settings_Blue.PNG";

function PageSettings() {
  return (
    <div>
      <div className="row settingsbox">
        <div className="row">
          <img
            className="Pagesettings-logo"
            src={Settingslogo}
            alt="Settings"
          ></img>
        </div>
        <div className="settingsmenu">
          <div className="Pixlefont">
            <p>Put settings text and such here:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSettings;
