export const chartMonitoringPrice = {
  chart: {
    type: "line" as const,
    zoom: {
      enabled: true,
      type: "x" as const,
      zoomedArea: {
        fill: {
          color: "#90CAF9",
          opacity: 0.4,
        },
      },
    },
  },
  xaxis: {
    type: "datetime" as const,
  },
  yaxis: {
    title: {
      text: "Preço (USD)",
    },
  },
};
