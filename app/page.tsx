import React from "react";
import Header from "./components/Header";
import MinimumChargeCard from "./components/MinimumChargeCard/MinimumChargeCard";
import CreateAccountButton from "./components/CreateAccountButton/CreateAccountButton";
import { phoneNumber, prefix } from "@/utils/phoneNumber";
import MinimumWithdrawal from "./components/MinimumWithdrawal/MinimumWithdrawal";

const Home = () => {
  return (
    <>
      {/* <Script src="META SCRIPT" /> */}

      <Header />

      <CreateAccountButton phoneNumber={phoneNumber} prefix={prefix} />

      {/** Minimo de carga - Card  */}
      <div className="flex">
        {/** Minimo de carga - Card  */}
        <MinimumChargeCard minimumCharge={1000} />

        {/** Minimo de carga - Card  */}
        <MinimumWithdrawal minimumWithdrawal={2000} />
      </div>
    </>
  );
};

export default Home;
