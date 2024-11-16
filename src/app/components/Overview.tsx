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
  function getNetChangeAsStrg(netchange: number) {
    if (netchange < 0) {
      return `${netchange * -1}%`;
    }
    return `+${netchange}%`;
  }
  return (
    <div className="mt-3 flex content-center justify-between border-t-2 pt-4 text-dark-brown">
      <div>
        <p className="text-sm font-extralight">Total this month</p>
        <p className="text-3xl font-extrabold">$ {total}</p>
      </div>
      <div className="content-end text-right text-sm">
        <p className="font-medium">{getNetChangeAsStrg(netchange)}</p>
        <p className="font-extralight">from last month</p>
      </div>
    </div>
  );
};
