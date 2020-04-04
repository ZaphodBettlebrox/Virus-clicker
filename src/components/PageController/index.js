import React from "react";
import "./style.css";
import PageClicker from "../PageClicker";
import PageStore from "../PageStore";
import PageAwards from "../PageAwards";


function PageController(){
    return(
        <div>
            <div className="row pages">
                
            <div className="padding-zero">
                <PageClicker/>
            </div>
            {/* <div className="padding-zero">
                <PageStore/>
            </div>
            <div className="padding-zero">
                <PageAwards/>
            </div> */}
            </div>
        </div>
    );
};

export default PageController;