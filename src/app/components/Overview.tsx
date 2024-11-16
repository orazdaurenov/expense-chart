"use client";
import { ChartConfig, ChartContainer } from "../../components/ui/chart";
import { Bar, BarChart } from "recharts";
import React from "react";

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
    <h1 className="text-dark-brown text-lg font-bold">
      Spending - Last 7 days
    </h1>
  );
};

const Chart = () => {
  const chartData = [
    { month: "January", desktop: 50, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  function Component() {
    return (
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    );
  }

  return (
    <div className="">
      <Component />
    </div>
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
