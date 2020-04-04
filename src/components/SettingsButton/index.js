import React from "react";
import "./style.css";
import settings from "../../assets/Settings_White.PNG"

function SettingsButton(){
    return(
        <div>
            <div className="row settingsbutton">
            <img
              className="settings-logo"
              src={settings}
              alt="Settings"
            ></img>
            </div>
        </div>
    )
}
export default SettingsButton