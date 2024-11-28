import { useCryptoPriceChange } from "../../hooks/useCryptoData";
import ReactApexChart from "react-apexcharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BoxSkeleton } from "../Skeleton/BoxSkeleton";
import { ErrorState } from "../ErrorState/ErrorState";
import { chartPercentageChange } from "./config";

interface PercentageChangeProps {
  cryptoId: string;
}

export const PercentageChange: React.FC<PercentageChangeProps> = ({
  cryptoId,
}) => {
  const { data, isLoading, error, refetch } = useCryptoPriceChange(cryptoId);

  const series = data ? [data[cryptoId].usd_24h_change] : [0];

  if (isLoading) return <BoxSkeleton />;
  if (error) return <ErrorState text="Error loading data" onRetry={refetch} />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Variação percentual ao vivo (%) {cryptoId.toUpperCase()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ReactApexChart
          options={chartPercentageChange}
          series={series}
          type="radialBar"
        />
      </CardContent>
    </Card>
  );
};
