import React from "react";
import "./style.css";
import PageClicker from "../PageClicker";
import PageStore from "../PageStore";
import PageAwards from "../PageAwards";


function PageController(){
    return(
        <div>
            <div>
                
            <div>
                <PageClicker/>
            </div>
            <div>
                <PageStore/>
            </div>
            <div >
                <PageAwards/>
            </div>
            </div>
        </div>
    );
};

export default PageController;