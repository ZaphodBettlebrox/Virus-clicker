import React from "react";
import Navbar from "../components/Navbar";
import "./style.css";
import SettingsButton from "../components/SettingsButton";
import PageController from "../components/PageController";
import Settings from "../components/PageSettings";


function Home() {
  return (
    <div>
        <div>
          <PageController />
        </div>
        {/* end here */}
        <div >
          <SettingsButton />
        </div>
        <div>
            <Settings/>
        </div>
        {/* body content that switches based on navbar click  */}

        <div>
          <Navbar />
        </div>

      </div>
  );
}
export default Home;
