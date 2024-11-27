import MainLayout from "@/components/layouts/MainLayout";
import { MonitoringPrice } from "@/components/charts/MonitoringPrice";
import { useState } from "react";
import { useCryptoList, useSupportedVsCurrencies } from "@/hooks/useCryptoData";
import { TitlePage } from "@/components/TitlePage/TitlePage";
import { FilterBar } from "@/components/FilterBar/FilterBar";
import { UpdateVolume } from "@/components/charts/UpdateVolume";
import { TopGainingCoins } from "@/components/charts/TopGainingCoins";
import { MarketCap } from "@/components/charts/MarketCap";
import { PriceHistory } from "@/components/charts/PriceHistory";

export const Dashboard = () => {
  const [days, setDays] = useState(30);
  const [currency, setCurrency] = useState("EUR");
  const [cryptoId, setCryptoId] = useState("marinade");
  const {
    data: cryptoList,
    isLoading: isCryptoListLoading,
    error: cryptoListError,
  } = useCryptoList();
  const {
    data: supportedCurrencies,
    isLoading: isCurrenciesLoading,
    error: currenciesError,
  } = useSupportedVsCurrencies();

  if (isCryptoListLoading || isCurrenciesLoading) return <div>Loading...</div>;
  if (cryptoListError) return <div>Error loading crypto list</div>;
  if (currenciesError) return <div>Error loading supported currencies</div>;

  const currencyOptions =
    supportedCurrencies?.map((currency: string) => ({
      label: currency.toUpperCase(),
      value: currency.toUpperCase(),
    })) || [];

  const dayOptions = [
    { label: "Últimos 7 dias", value: 7 },
    { label: "Últimos 30 dias", value: 30 },
    { label: "Últimos 90 dias", value: 90 },
  ];

  return (
    <MainLayout>
      <div className="py-6">
        <TitlePage
          title="Dashboard"
          subtitle="Welcome to the Crypto Fetching Dashboard."
        />

        <div className="py-6">
          <div className="w-full flex justify-end space-x-5">
            <FilterBar
              dayOptions={dayOptions}
              selectedDay={{ value: days, setValue: setDays }}
              currencyOptions={currencyOptions}
              selectedCurrency={{ value: currency, setValue: setCurrency }}
              cryptoList={cryptoList}
              selectedCrypto={{ value: cryptoId, setValue: setCryptoId }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            <MonitoringPrice
              cryptoId={cryptoId}
              currency={currency}
              days={days}
            />
            <UpdateVolume cryptoId={cryptoId} currency={currency} days={days} />
            <PriceHistory cryptoId={cryptoId} days={days} />
            <MarketCap currency={currency} />
            <TopGainingCoins currency={currency} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
