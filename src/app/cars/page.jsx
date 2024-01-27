import CarCards from "@/components/CarCards";
import Navbar from "@/components/Navbar";
import React from "react";

const items = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Navbar />
      <CarCards url={"/assets/mobil3.jpg"} type="Hyundai Stargazer" id="1" />
      <CarCards url={"/assets/mobil10.jpg"} type="Mitsubishi Expander" id="2" />
      <CarCards url={"/assets/mobil14.jpeg"} type="Toyota Agya G" id="3" />
    </div>
  );
};

export default items;
