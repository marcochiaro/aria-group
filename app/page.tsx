import React from "react";
import "animate.css";
import Header from "./components/Header";
import MinimumChargeCard from "./components/MinimumChargeCard/MinimumChargeCard";
import CreateAccountButton from "./components/CreateAccountButton/CreateAccountButton";



const phoneNumber: number = 1123350022;
const Home = () => {
  return (
    <>
      {/* <Script src="META SCRIPT" /> */}

      <Header />

      {/** Minimo de carga - Card  */}
      <MinimumChargeCard minimumCharge={200} />

      {/** BOTON - CREAR CUENTA */}
      <CreateAccountButton phoneNumber={phoneNumber} />
    </>
  );
};

export default Home;
