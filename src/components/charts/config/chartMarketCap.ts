export const chartConfigMarketCap = {
  series: [
    {
      data: [] as number[],
    },
  ],
  options: {
    chart: {
      type: "bar" as const,
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end" as const,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [] as string[],
    },
  },
};
