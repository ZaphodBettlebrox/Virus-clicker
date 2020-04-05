import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

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
    <input type="radio" name="tabbar-material-b" onClick={DisplayStore}/>
    <button className="tabbar__button tabbar--material__button storeBtn" >
    <i><FontAwesomeIcon icon={faStore} size="2x" color="#29bcd6"/></i>
    </button>
  </label>

  <label className="tabbar__item tabbar--material__item">

    <input type="radio" name="tabbar-material-b"onClick={DisplayClicker} defaultChecked/>
    <button className="tabbar__button tabbar--material__button clickerBtn" >
    <i><FontAwesomeIcon icon={faVirus} size="2x" color="#29bcd6" /> </i>
    </button>
  </label>



  <label className="tabbar__item tabbar--material__item">
    <input type="radio" name="tabbar-material-b" onClick={DisplayAwards}/>
    <button className="tabbar__button tabbar--material__button awardBtn " >
    <i><FontAwesomeIcon icon={faMedal} size="2x" color="#29bcd6"/></i>
    </button>
  </label>
</div>    

    </div>
    );
    
};

export default Navbar;