export const chartUpdateVolume = {
  series: [
    {
      name: "Volume",
      data: [],
    },
  ],
  options: {
    chart: {
      type: "line" as const,
      height: 350,
    },
    stroke: {
      curve: "stepline" as const,
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Stepline Chart",
      align: "left" as const,
    },
    markers: {
      hover: {
        sizeOffset: 4,
      },
    },
    xaxis: {
      type: "datetime" as const,
    },
    yaxis: {
      title: {
        text: "Volume",
      },
    },
  },
};