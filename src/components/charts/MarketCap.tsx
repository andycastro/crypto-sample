import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useMarketCapData } from "../../hooks/useCryptoData";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DropdownSelect from "../DropdownSelect/DropdownSelect";
import { Button } from "../ui/button";
import { BoxSkeleton } from "../Skeleton/BoxSkeleton";
import { ErrorState } from "../ErrorState/ErrorState";
import { Badge } from "../ui/badge";
import { chartConfigMarketCap } from "./config";

interface MarketCapProps {
  currency: string;
}

export const MarketCap = ({ currency }: MarketCapProps) => {
  const [selectedList, setSelectedList] = useState<string>("");
  const [finalSelectedList, setFinalSelectedList] = useState<string>("");
  const isStoredData = localStorage.getItem("storedDataMarketCap") === "true";

  const handleSelectChange = (value: string | number | (string | number)[]) => {
    const selectedArray = Array.isArray(value) ? value : [value];
    const selectedString = selectedArray.join(",");
    setSelectedList(selectedString);
  };

  const handleButtonClick = () => {
    setFinalSelectedList(selectedList);
  };

  const { data, isLoading, error, refetch } = useMarketCapData(
    currency,
    finalSelectedList
  );

  const [chartConfig, setChartConfig] = useState(chartConfigMarketCap);

  useEffect(() => {
    if (data) {
      const categories = data.map(
        (coin: { name: string; market_cap: number }) => coin.name
      );
      const seriesData = data.map(
        (coin: { name: string; market_cap: number }) => coin.market_cap
      );

      setChartConfig((prevConfig) => ({
        ...prevConfig,
        series: [
          {
            data: seriesData,
          },
        ],
        options: {
          ...prevConfig.options,
          xaxis: {
            categories,
          },
        },
      }));
    }
  }, [data]);

  const getCryptoListFromLocalStorage = () => {
    const storedList = localStorage.getItem("cryptoList");
    return storedList ? JSON.parse(storedList) : [];
  };

  const options = getCryptoListFromLocalStorage();

  if (isLoading) return <BoxSkeleton />;
  if (error)
    return (
      <ErrorState text="Error loading market cap data" onRetry={refetch} />
    );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <CardTitle>Comparação de Market Cap</CardTitle>
          {isStoredData && (
            <Badge variant="outline" className="bg-red-500 text-white">
              Dados provenientes do cache
            </Badge>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex-1 overflow-hidden">
            <DropdownSelect
              label="Moedas"
              options={options}
              isMultiSelect={true}
              value={selectedList.split(",")}
              onChange={handleSelectChange}
            />
          </div>
          <Button onClick={handleButtonClick}>Atualizar</Button>
        </div>
      </CardHeader>
      <CardContent>
        <ReactApexChart
          options={chartConfig.options}
          series={chartConfig.series}
          type="bar"
          height={350}
        />
      </CardContent>
    </Card>
  );
};
