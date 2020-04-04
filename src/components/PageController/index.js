import React from "react";
import "./style.css";
import PageClicker from "../PageClicker";
import PageStore from "../PageStore";
import PageAwards from "../PageAwards";

function PageController(){
    return(
        <div>
            <div className="row pages">
                
            <div className="col-4 padding-zero">
                <PageClicker/>
            </div>
            <div className="col-4 padding-zero">
                <PageStore/>
            </div>
            <div className="col-4 padding-zero">
                <PageAwards/>
            </div>
            </div>
        </div>
    );
};

export default PageController;