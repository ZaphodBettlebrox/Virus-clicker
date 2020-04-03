import React from "react";
import Navbar from "../components/Navbar";

import SettingsButton from "../components//SettingsButton";
import PageController from "../components//PageController";

function Home() {
  return (
    <div>
        <div className="row">
          <SettingsButton />
        </div>

        {/* body content that switches based on navbar click  */}
        <div className="row">
          <PageController />
        </div>
        {/* end here */}

        <div className="row">
          <Navbar />
        </div>

      </div>
  );
}
export default Home;
