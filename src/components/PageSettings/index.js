import React from "react";
import "./style.css";
import Settingslogo from "../../assets/Settings_Blue.PNG";
import X from "../../assets/xpixel.PNG";

function PageSettings() {
  function settingsX(){
    const settingsbutton = document.querySelector(".settings-button");
    const settingsbox = document.querySelector(".settingsbox");

    settingsbutton.style.display = "block";
    settingsbox.style.display = "none";


  }
  return (
    <div>
      <div className="settingsbox">
        <img
            className="Pagesettings-X"
            src={X}
            alt="X"
            onClick={settingsX}
          ></img>
        <div>
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
