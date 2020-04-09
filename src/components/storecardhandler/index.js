import React, { Component } from "react";
import "./style.css";
import Scard from "../storecard";
import storelists from "../store.json";
import Unknown from "../storecardunknown";
import Storecard from "../storecard";

class Storecardhandler extends Component {
  
  state = {
    storelists
  };

  BuyCard = id => {
    console.log("buy "+id);
    
    // maybe??
    // this.state.storelists
    
    document.querySelector(".scbuy").classList.add("buyclick");
    setTimeout(function () {
      document.querySelector(".scbuy").classList.remove("buyclick");
    }, 690);
  };

  Descriptionshow = id => {
    console.log("description of "+id);

    const arrowup = document.querySelector(".arrowup");
    const arrowdown = document.querySelector(".arrowdown");
    const desc = document.querySelector(".storecarddesc");
    if (arrowdown.style.display === "none") {
      arrowdown.style.display = "block";
      arrowup.style.display = "none";
      desc.style.display = "none";
    } else {
      arrowdown.style.display = "none";
      arrowup.style.display = "block";
      desc.style.display = "block";
    }
  }


  render() {
    return (
      // <Storecard Buybutton={this.Buybutton}/>
      // <Storecard Description={this.Description}/>

      <div>
        <div>
          {this.state.storelists.map(storelist => (
            <Scard
              Descriptionshow={this.Descriptionshow}
              BuyCard={this.BuyCard}
              id={storelist.id}
              key={storelist.id}
              name={storelist.name}
              image={storelist.image}
              desc={storelist.description}
              background={storelist.background}
            />
          ))}
        </div>

        <div id="cardunknown">
          <Unknown />
        </div>
        <div className="storeempty"></div>
        
        <Storecard Description={this.Description}/>

      </div>
    );
  }
}
export default Storecardhandler;
