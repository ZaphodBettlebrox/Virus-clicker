import React from "react";
import "./style.css";
import settings from "../../assets/Settings_White.PNG";
import gear from "../../assets/Gear_White.png";
// import Settings from "../PageSettings";


function SettingsButton(){
    function DisplaySettings(){

        const settings = document.querySelector(".settingsbox");
        if (settings.style.display === "block") {
          settings.style.display = "none";
        } else {
          settings.style.display = "block";
        }
        
    }

    return(
        <div>
            <div>
            <button className="settings-button" onClick={DisplaySettings}><img
              className="settings-gear"
              src={gear}
              alt="gear"
            ></img>
            <img
              className="settings-logo"
              src={settings}
              alt="Settings"
            ></img></button>
            </div>
           
        </div>
    )
}
export default SettingsButton