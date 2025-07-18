import React from "react";
import AdditionalInfo from "../components/AdditionalInfo";
import Advertise from "../components/Advertise";
import Banner from "../components/Banner";
import Bestseller from "../components/Bestseller";
import BigAdd from "../components/BigAdd";
import NewArrival from "../components/NewArrival";
import SpecialOffer from "../components/SpecialOffer";

const Home = () => {
  return (
   <>
     <Banner />
     <AdditionalInfo/>
     <Advertise/>
     <NewArrival/>
     <Bestseller/>
     <BigAdd/>
     <SpecialOffer/>
   </>
  )
};

export default Home;
