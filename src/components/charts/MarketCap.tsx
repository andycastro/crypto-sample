import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useMarketCapData } from "../../hooks/useCryptoData";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DropdownSelect from "../DropdownSelect/DropdownSelect";
import { Button } from "../ui/button";
import { BoxSkeleton } from "../Skeleton/BoxSkeleton";
import { ErrorState } from "../ErrorState/ErrorState";

interface MarketCapProps {
  currency: string;
}

export const MarketCap = ({ currency }: MarketCapProps) => {
  const [selectedFruits, setSelectedFruits] = useState<string>("");
  const [finalSelectedFruits, setFinalSelectedFruits] = useState<string>("");

  const handleSelectChange = (value: string | number | (string | number)[]) => {
    const selectedArray = Array.isArray(value) ? value : [value];
    const selectedString = selectedArray.join(",");
    setSelectedFruits(selectedString);
  };

  const handleButtonClick = () => {
    setFinalSelectedFruits(selectedFruits);
  };

  const { data, isLoading, error, refetch } = useMarketCapData(
    currency,
    finalSelectedFruits
  );

  const [chartConfig, setChartConfig] = useState({
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
        <CardTitle>Comparação de Market Cap</CardTitle>
        <div className="flex justify-between items-center">
          <div className="flex-1 overflow-hidden">
            <DropdownSelect
              label="Moedas"
              options={options}
              isMultiSelect={true}
              value={selectedFruits.split(",")}
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
