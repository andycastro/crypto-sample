import React from "react";
import { useCryptoMarketData } from "../../hooks/useCryptoData";
import Chart from "react-apexcharts";

interface MonitoringPriceProps {
  cryptoId: string;
  currency: string;
  days: number;
}

export const MonitoringPrice: React.FC<MonitoringPriceProps> = ({
  cryptoId,
  currency,
  days,
}) => {
  const { data, error, isLoading } = useCryptoMarketData(
    cryptoId,
    currency,
    days
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const options = {
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
    title: {
      text: "Preço do Bitcoin",
      align: "center" as const,
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

  interface PriceData {
    prices: [number, number][];
  }

  const series: { name: string; data: [number, number][] }[] = [
    {
      name: "Preço",
      data: (data as PriceData).prices.map((price) => [price[0], price[1]]),
    },
  ];

  return <Chart options={options} series={series} type="line" />;
};
