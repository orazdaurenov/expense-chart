"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";
import { data } from "./data";
import { useRef } from "react";

const Chart = () => {
  const barRef = useRef(null);
  function handleClick() {
    console.table(barRef);
  }
  const chartData = [
    { month: "January", mobile: 80, fill: "black" },
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
      color: "hsl(10 79% 65%)",
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
            <Bar
              ref={barRef}
              dataKey="amount"
              className="hover:fill-hover-soft-red fill-[--color-mobile]"
              radius={4}
              onClick={handleClick}
            />
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

function getCurrentDay(): string {
  const dayNames = ["sun", "mon", "tue", "wed", "thu", "wed", "fri", "sat"];
  const date = new Date();
  const day = date.getDay();
  return dayNames[day] as string;
}
