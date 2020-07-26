import React from "react";
import Product from "./Product";
import Banner from "../assets/images/amazon_banner.jpeg";
import Prod1 from "../assets/images/prod1.jpg";
import Prod2 from "../assets/images/prod2.jpg";
import Prod3 from "../assets/images/prod3.jpg";
import Prod4 from "../assets/images/prod4.png";
import Prod5 from "../assets/images/prod5.jpeg";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* https://images-eu.ssl-images-amazon.com/images/G
    /02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_
    XSite_1500x600_PV_en-GB._CB428684220._jpg */}
      <img className="home__image" src={Banner} alt="banner_img"></img>

      <div className="home__row">
        <Product id="1" title="Hello" price={11.26} rating={5} image={Prod1} />
        <Product id="2" title="Hello" price={11.26} rating={2} image={Prod2} />
      </div>
      <div className="home__row">
        <Product id="3" title="Hello" price={11.26} rating={5} image={Prod3} />
        <Product id="4" title="Hello" price={11.26} rating={3} image={Prod4} />
        <Product id="5" title="Hello" price={11.26} rating={4} image={Prod5} />
      </div>
      <div className="home__row">
        <Product id="6" title="Hello" price={11.26} rating={1} image={Prod5} />
      </div>
    </div>
  );
}

export default Home;
