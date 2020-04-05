import React from "react";
import "./style.css";


function Navbar(){
    function DisplayAwards(){

        const dspStore = document.querySelector(".storePage");
        const dspClicker = document.querySelector(".clickerPage");
        const dspAwards = document.querySelector(".awardsPage");

            dspAwards.style.display = "block";
            dspClicker.style.display = "none";
            dspStore.style.display = "none";


        
    }
    function DisplayClicker(){

        const dspStore = document.querySelector(".storePage");
        const dspClicker = document.querySelector(".clickerPage");
        const dspAwards = document.querySelector(".awardsPage");
   
            dspClicker.style.display = "block";
            dspAwards.style.display = "none";
            dspStore.style.display = "none";

        
    }
    function DisplayStore(){

        const dspStore = document.querySelector(".storePage");
        const dspClicker = document.querySelector(".clickerPage");
        const dspAwards = document.querySelector(".awardsPage");
            
            dspStore.style.display = "block";
            dspAwards.style.display = "none";
            dspClicker.style.display = "none";

    

        
    }


    return (
        
        <div>
            <div className="tabbar tabbar--material">
  <label className="tabbar__item tabbar--material__item">
    <input type="radio" name="tabbar-material-c" onClick={DisplayStore}/>
    <button className="tabbar__button tabbar--material__button storeBtn" >
      <i className="tabbar__icon tabbar--material__icon zmdi zmdi-phone"></i>
      <div className="tabbar__label tabbar--material__label">Store</div>
    </button>
  </label>

  <label className="tabbar__item tabbar--material__item">
    <input type="radio" name="tabbar-material-c"onClick={DisplayClicker} defaultChecked/>
    <button className="tabbar__button tabbar--material__button clickerBtn" >
      <i className="tabbar__icon tabbar--material__icon zmdi zmdi-favorite"></i>
      <div className="tabbar__label tabbar--material__label">Virus Clicker</div>
    </button>
  </label>



  <label className="tabbar__item tabbar--material__item">
    <input type="radio" name="tabbar-material-c" onClick={DisplayAwards}/>
    <button className="tabbar__button tabbar--material__button awardBtn " >
      <i className="tabbar__icon tabbar--material__icon zmdi zmdi-delete"></i>
      <div className="tabbar__label tabbar--material__label">Awards</div>
    </button>
  </label>
</div>    

    </div>
    );
    
};

export default Navbar;