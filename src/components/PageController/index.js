import React from "react";
import "./style.css";
import PageClicker from "../PageClicker";
import PageStore from "../PageStore";
import PageAwards from "../PageAwards";

function PageController(){
    return(
        <div>
            <div className="row">
                <PageClicker/>
            </div>
            <div className="row">
                <PageStore/>
            </div>
            <div className="row">
                <PageAwards/>
            </div>
        </div>
    );
};

export default PageController;