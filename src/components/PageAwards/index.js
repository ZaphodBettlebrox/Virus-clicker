import React from "react";
import "./style.css";
import Achievements from "../Achievements";
import Leaderboards from "../Leaderboards";


function PageAwards() {
  return (
    <div>
      <div className="row awardsPage">
        <h1>
          Awards
        </h1>
      </div>
      <div className="row">
        <Achievements />
      </div>
      <div className="row">
        <Leaderboards />
      </div>
    </div>
  );
}

export default PageAwards;
