import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTopGainingCoins } from "../../hooks/useCryptoData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPercentage } from "@/utils/formatNumbers/percent";

interface Coin {
  id: string;
  name: string;
  price_change_percentage_24h: number;
}

interface TopGainingCoinsProps {
  currency: string;
}

export const TopGainingCoins = ({ currency }: TopGainingCoinsProps) => {
  const { data, isLoading, error } = useTopGainingCoins(currency);

  const [chartOptions, setChartOptions] = React.useState({
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
  });

  const [chartSeries, setChartSeries] = React.useState([
    {
      name: "Variação Percentual",
      data: [] as number[],
    },
  ]);

  React.useEffect(() => {
    if (data) {
      const categories = data.map((coin: Coin) => coin.name);
      const seriesData = data.map(
        (coin: Coin) => coin.price_change_percentage_24h
      );

      setChartOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          categories,
        },
      }));

      setChartSeries([
        {
          name: "Variação Percentual",
          data: seriesData,
        },
      ]);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading top gaining coins</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 5 Moedas - Maior Alta em 24h</CardTitle>
      </CardHeader>
      <CardContent>
        {data && (
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={350}
          />
        )}
      </CardContent>
    </Card>
  );
};
