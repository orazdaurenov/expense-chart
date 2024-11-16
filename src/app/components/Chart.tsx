"use client";
import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";
import { data } from "./data";
const Chart = () => {
  const chartData = [
    { month: "January", mobile: 80 },
    { month: "February", mobile: 200 },
    { month: "March", mobile: 120 },
    { month: "April", mobile: 190 },
    { month: "May", mobile: 130 },
    { month: "June", mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "red",
    },
  } satisfies ChartConfig;

  const customChartConfig = {
    mobile: {
      label: "amount",
      color: "red",
    },
  } satisfies ChartConfig;
  function Component() {
    return (
      <>
        <ChartContainer
          config={customChartConfig}
          className="min-h-[300px] w-full"
        >
          <BarChart accessibilityLayer data={data}>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="amount" fill="var(--color-desktop)" radius={4} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
          </BarChart>
        </ChartContainer>
      </>
    );
  }

  return (
    <div className="">
      <Component />
    </div>
  );
};

export default Chart;
