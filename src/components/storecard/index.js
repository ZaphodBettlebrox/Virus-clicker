import React, { Component } from "react";
import "./style.css";
import Buy from "../../assets/buyiconpixel.png";
import Arrow from "../../assets/arrowpixel2.png";

class Storecard extends Component {
  
  render() {
    return (
      <div className="storecard Pixlefont">
          <img
            className="storecardbackground"
            alt="background"
            src={this.props.background}
          ></img>

          <div className="storecardimg">
            <img
              alt={this.props.name}
              src={this.props.image}
              className="scpicture"
            />
          </div>
          <img
            className="arrowdown"
            alt="open"
            src={Arrow}
            onClick={() => this.props.Descriptionshow(this.props.id)}
          />
          <img
            className="arrowup"
            alt="open"
            src={Arrow}
            onClick={() => this.props.Descriptionshow(this.props.id)}

          />
          <p className="storecardtitle">{this.props.name}</p>

          <p className="storecardcost">99999999999</p>
          <p className="storecardowned">999 owned</p>

          <div className="storecardbuy">
            <img
              alt={this.props.name}
              src={Buy}
              className="scbuy"
              onClick={() => this.props.BuyCard(this.props.id)}
            />
          </div>
          <div className="storecarddesc">
            <p className="Pixlefont descspacing">{this.props.desc}</p>
            <p className="Pixlefont descblink">.</p>
          </div>
        </div>
    );
  }
}
export default Storecard;
