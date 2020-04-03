import React from "react";
import "./style.css";


function Navbar(){
    return (
        <div>
            <div className="row">
                <div className="col-4 padding-zero">
                    <button className="navbarstore">store</button>
                </div>
                <div className="col-4 padding-zero">
                <button className="navbarclicker">Virus Clicker</button>

                </div>
                <div className="col-4 padding-zero">
                <button className="navbarawards">Awards</button>

                </div>
            </div>
        </div>
    );
    
};

export default Navbar;