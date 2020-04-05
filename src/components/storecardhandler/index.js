import React from "react";
import Scard from "../storecard";
import storelist from "../store.json";

function Storecardhandler() {
  // function here

  return (
    <div>
      <div id="cardbat">
        <Scard
          name={storelist[0].name}
          image={storelist[0].image}
          desc={storelist[0].description}
        />
      </div>
      <div id="cardhuman">
        <Scard
          name={storelist[1].name}
          image={storelist[1].image}
          desc={storelist[1].description}
        />
      </div>
      <div id="cardrestraunt">
        <Scard
          name={storelist[2].name}
          image={storelist[2].image}
          desc={storelist[2].description}
        />
      </div>
      <div id="cardhotel">
        <Scard
          name={storelist[3].name}
          image={storelist[3].image}
          desc={storelist[3].description}
        />
      </div>
      <div id="cardairport">
        <Scard
          name={storelist[4].name}
          image={storelist[4].image}
          desc={storelist[4].description}
        />
      </div>
      <div id="cardtown">
        <Scard
          name={storelist[5].name}
          image={storelist[5].image}
          desc={storelist[5].description}
        />
      </div>
      <div id="cardcity">
        <Scard
          name={storelist[6].name}
          image={storelist[6].image}
          desc={storelist[6].description}
        />
      </div>
    </div>
  );
}
export default Storecardhandler;
