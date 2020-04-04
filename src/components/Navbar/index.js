import React from "react";
import "./style.css";


function Navbar(){
    return (
        <div>
            <div className="row nav">
                <div className="col-4 ">
                    <button className="navbarstore">store</button>
                </div>
                <div className="col-4 ">
                <button className="navbarclicker">Virus Clicker</button>

                </div>
                <div className="col-4">
                <button className="navbarawards">Awards</button>

                </div>
            </div>
        </div>
    );
    
};

export default Navbar;