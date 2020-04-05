import React from "react";
import "./style.css";
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PageClicker extends React.Component {


  render() {
    return (
      <div>
          <div className="backgroundMain">
          </div>
          <div className="x">
          <i><FontAwesomeIcon icon={faVirus} size="2x" className="virusA y" color="#29bcd6" /> </i>
          </div>
          <div className="xaxis">
          <i><FontAwesomeIcon icon={faVirus} size="2x" className=" yaxis" color="#29bcd6" /> </i>
          </div>
          <div className="x2">
          <i><FontAwesomeIcon icon={faVirus} size="2x" className="virusA y2" color="#29bcd6" /> </i>
          </div>
          <div className="backgroundTop">
          </div>
        <div className="clickerPage">
          <h1>Virus Clicker</h1>
        </div>

      </div>
    );
  }
}


export default PageClicker;
