import { formatPercentage } from "@/utils/formatNumbers/percent";

export const chartTopGainingCoins = {
  chart: {
    type: "bar" as const,
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "50%",
    },
  },
  dataLabels: {
    enabled: true,
    formatter: (val: number): string => `${formatPercentage(val)}%`,
  },
  xaxis: {
    categories: [] as string[],
  },
  colors: ["#00E396"],
};
