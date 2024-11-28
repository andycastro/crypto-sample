import React from "react";
import { useCryptoMarketData } from "../../hooks/useCryptoData";
import Chart from "react-apexcharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BoxSkeleton } from "../Skeleton/BoxSkeleton";
import { ErrorState } from "../ErrorState/ErrorState";
import { Badge } from "../ui/badge";
import { chartPriceHistory } from "./config";

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
  const { data, error, isLoading, refetch } = useCryptoMarketData(
    cryptoId,
    "usd",
    days
  );

  const isStoredData =
    localStorage.getItem("storedDataCryptoMarketData") === "true";

  if (isLoading) return <BoxSkeleton />;
  if (error) return <ErrorState text="Error loading data" onRetry={refetch} />;

  const series: { name: string; data: [number, number][] }[] = [
    {
      name: "Preço",
      data: (data as PriceData).prices.map((price) => [price[0], price[1]]),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <CardTitle>Evolução do preço {cryptoId.toUpperCase()}</CardTitle>
          {isStoredData && (
            <Badge variant="outline" className="bg-red-500 text-white">
              Dados provenientes do cache
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Chart options={chartPriceHistory} series={series} type="line" />
      </CardContent>
    </Card>
  );
};
