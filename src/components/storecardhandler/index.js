import React from "react";
import "./style.css";
import Scard from "../storecard";
import storelist from "../store.json";
import Unknown from "../storecardunknown";

function Storecardhandler() {
  // function here

  return (
    <div>
      <div id="cardbat">
        <Scard
          name={storelist[0].name}
          image={storelist[0].image}
          desc={storelist[0].description}
          background={storelist[0].background}

        />
      </div>
      <div id="cardhuman">
        <Scard
          name={storelist[1].name}
          image={storelist[1].image}
          desc={storelist[1].description}
          background={storelist[1].background}

        />
      </div>
      <div id="cardrestraunt">
        <Scard
          name={storelist[2].name}
          image={storelist[2].image}
          desc={storelist[2].description}
          background={storelist[2].background}

        />
      </div>
      <div id="cardhotel">
        <Scard
          name={storelist[3].name}
          image={storelist[3].image}
          desc={storelist[3].description}
          background={storelist[3].background}

        />
      </div>
      <div id="cardairport">
        <Scard
          name={storelist[4].name}
          image={storelist[4].image}
          desc={storelist[4].description}
          background={storelist[4].background}

        />
      </div>
      <div id="cardtown">
        <Scard
          name={storelist[5].name}
          image={storelist[5].image}
          desc={storelist[5].description}
          background={storelist[5].background}

        />
      </div>
      <div id="cardcity">
        <Scard
          name={storelist[6].name}
          image={storelist[6].image}
          desc={storelist[6].description}
          background={storelist[6].background}

        />
      </div>
      <div id="cardunknown">
        <Unknown/>
      </div>
      <div className="storeempty">

      </div>
    </div>
  );
}
export default Storecardhandler;
