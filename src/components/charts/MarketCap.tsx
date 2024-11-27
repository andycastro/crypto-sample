import React from "react";
import ReactApexChart from "react-apexcharts";
import { useMarketCapData } from "../../hooks/useCryptoData";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface MarketCapProps {
  currency: string;
}

export const MarketCap = ({ currency }: MarketCapProps) => {
  const { data, isLoading, error } = useMarketCapData(currency);

  const [chartConfig, setChartConfig] = React.useState({
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
  });

  React.useEffect(() => {
    if (data) {
      const categories = data.map(
        (coin: { name: string; market_cap: number }) => coin.name
      );
      const seriesData = data.map(
        (coin: { name: string; market_cap: number }) => coin.market_cap
      );

      setChartConfig({
        series: [
          {
            data: seriesData,
          },
        ],
        options: {
          ...chartConfig.options,
          xaxis: {
            categories,
          },
        },
      });
    }
  }, [data, chartConfig.options]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading market cap data</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Volume</CardTitle>
      </CardHeader>
      <CardContent>
        <div id="chart">
          <ReactApexChart
            options={chartConfig.options}
            series={chartConfig.series}
            type="bar"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </CardContent>
    </Card>
  );
};
