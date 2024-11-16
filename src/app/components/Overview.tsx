"use client";
import React from "react";
import Chart from "./Chart";
import { number } from "zod";
import { data } from "./data";

const Overview = () => {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    const amount = data[i]!.amount;
    total += amount;
  }

  return (
    <div className="rounded-lg bg-white p-5">
      <Title />
      <Chart />
      <Summary total={total} netchange={2.1} />
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

type SummaryProps = {
  total: number;
  netchange: number;
};

export const Summary = ({ total, netchange }: SummaryProps) => {
  return (
    <div>
      <div>
        <p>Total this month</p>
        <p>{total}</p>
      </div>
      <div>
        <p>{netchange}</p>
        <p>from last month</p>
      </div>
    </div>
  );
};
