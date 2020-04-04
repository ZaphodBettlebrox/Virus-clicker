import React from "react";
import Navbar from "../components/Navbar";
import "./style.css";
import SettingsButton from "../components//SettingsButton";
import PageController from "../components//PageController";

function Home() {
  return (
    <div>
        <div >
          <SettingsButton />
        </div>

        {/* body content that switches based on navbar click  */}
        <div>
          <PageController />
        </div>
        {/* end here */}

        <div>
          <Navbar />
        </div>

      </div>
  );
}
export default Home;
