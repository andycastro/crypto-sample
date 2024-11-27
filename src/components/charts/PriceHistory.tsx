import React from "react";
import { useCryptoMarketData } from "../../hooks/useCryptoData";
import Chart from "react-apexcharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PriceHistoryProps {
  cryptoId: string;
  days: number;
}
interface PriceData {
  prices: [number, number][];
}

export const PriceHistory: React.FC<PriceHistoryProps> = ({
  cryptoId,
  days,
}) => {
  const { data, error, isLoading } = useCryptoMarketData(cryptoId, "usd", days);

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
    xaxis: {
      type: "datetime" as const,
    },
    yaxis: {
      title: {
        text: "Preço (USD)",
      },
    },
  };

  const series: { name: string; data: [number, number][] }[] = [
    {
      name: "Preço",
      data: (data as PriceData).prices.map((price) => [price[0], price[1]]),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolução do preço {cryptoId.toUpperCase()}</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart options={options} series={series} type="line" />
      </CardContent>
    </Card>
  );
};
