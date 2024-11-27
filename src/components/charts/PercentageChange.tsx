import { useCryptoPriceChange } from "../../hooks/useCryptoData";
import ReactApexChart from "react-apexcharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { formatPercentage } from "@/utils/formatNumbers/percent";

interface PercentageChangeProps {
  cryptoId: string;
}

export const PercentageChange: React.FC<PercentageChangeProps> = ({
  cryptoId,
}) => {
  const { data, isLoading, error } = useCryptoPriceChange(cryptoId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const series = [data[cryptoId].usd_24h_change];
  const options = {
    chart: {
      type: "radialBar" as const,
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#444",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
            formatter: function (val: number) {
              return `${formatPercentage(val)}%`;
            },
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Variação percentual ao vivo (%) {cryptoId.toUpperCase()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ReactApexChart options={options} series={series} type="radialBar" />
      </CardContent>
    </Card>
  );
};
