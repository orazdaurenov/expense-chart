"use client";
import React from "react";
import Chart from "./Chart";
const Overview = () => {
  return (
    <div className="rounded-lg bg-white p-5">
      <Title />
      <Chart />
      <Summary />
    </div>
  );
};

export default Overview;

const Title = () => {
  return (
    <h1 className="text-lg font-bold text-dark-brown">
      Spending - Last 7 days
    </h1>
  );
};

const Summary = () => {
  return (
    <div>
      <div>
        <p>Total this month</p>
        <p>$500,00</p>
      </div>
      <div>
        <p>+2,4%</p>
        <p>from last month</p>
      </div>
    </div>
  );
};
