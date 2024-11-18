"use client";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import { Bar, BarChart, XAxis, Cell } from "recharts";
import { data } from "./data";

const Chart = () => {
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
            <Bar dataKey="amount" radius={4}>
              {" "}
              {data.map((entry, index) => {
                console.log(entry);
                if (entry.day === getCurrentDay()) {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      className="fill-custom-cyan hover:fill-hover-custom-cyan"
                    />
                  );
                }
                return (
                  <Cell
                    key={`cell-${index}`}
                    className="fill-[--color-mobile] hover:fill-hover-soft-red"
                  />
                );
              })}
            </Bar>
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
  return dayNames[day]!;
}
