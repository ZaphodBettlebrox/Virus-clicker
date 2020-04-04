import React from "react";
import "./style.css";


function Navbar(){
    return (
        <div>
            {/* <div className="row nav">
                <div className="col-4 ">
                    <button className="navbarstore">store</button>
                </div>
                <div className="col-4 ">
                <button className="navbarclicker">Virus Clicker</button>

                </div>
                <div className="col-4">
                <button className="navbarawards">Awards</button>

                </div>
            </div> */}
            <div class="tabbar">
  <label className="tabbar__item">
    <input type="radio" name="tabbar-a" checked="checked"/>
    <button className="tabbar__button">
      <i className="tabbar__icon ion-stop"></i>
      <div className="tabbar__label">One</div>
    </button>
  </label>

  <label className="tabbar__item">
    <input type="radio" name="tabbar-a"/>
    <button className="tabbar__button">
      <i class="tabbar__icon ion-record"></i>
      <div className="tabbar__label">Two</div>
    </button>
  </label>

  <label class="tabbar__item">
    <input type="radio" name="tabbar-a"/>
    <button class="tabbar__button">
      <i class="tabbar__icon ion-star"></i>
      <div class="tabbar__label">Three</div>
    </button>
  </label>
</div>
            
        </div>
    );
    
};

export default Navbar;