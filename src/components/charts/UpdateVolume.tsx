import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCryptoMarketData } from "../../hooks/useCryptoData";
import { BoxSkeleton } from "../Skeleton/BoxSkeleton";
import { ErrorState } from "../ErrorState/ErrorState";
import { Badge } from "../ui/badge";

interface UpdateVolumeProps {
  cryptoId: string;
  currency: string;
  days: number;
}

export const UpdateVolume: React.FC<UpdateVolumeProps> = ({
  cryptoId,
  currency,
  days,
}) => {
  const { data, error, isLoading, refetch } = useCryptoMarketData(
    cryptoId,
    currency,
    days
  );
  const isStoredData =
    localStorage.getItem("storedDataCryptoMarketData") === "true";

  const [chartData, setChartData] = useState({
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
  });

  useEffect(() => {
    if (data) {
      setChartData((prevData) => ({
        ...prevData,
        series: [
          {
            name: "Volume",
            data: data.total_volumes.map((volume: [number, number]) => [
              volume[0],
              volume[1],
            ]),
          },
        ],
      }));
    }
  }, [data]);

  if (isLoading) return <BoxSkeleton />;
  if (error) return <ErrorState text="Error loading data" onRetry={refetch} />;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <CardTitle>Volume de negociação {cryptoId.toUpperCase()}</CardTitle>
          {isStoredData && (
            <Badge variant="outline" className="bg-red-500 text-white">
              Dados provenientes do cache
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div id="chart">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </CardContent>
    </Card>
  );
};
