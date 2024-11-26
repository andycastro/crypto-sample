import React from "react";
import { useQuery } from "react-query";
import {
  getCryptoPriceUseCase,
  getCryptoMarketDataUseCase,
} from "../../useCases/cryptoUseCase";

const fetchPrice = async () => {
  return await getCryptoPriceUseCase("bitcoin", "usd");
};

const fetchMarketData = async () => {
  return await getCryptoMarketDataUseCase("bitcoin", "usd", 30);
};

const TestComponent: React.FC = () => {
  const {
    data: priceData,
    isLoading: priceLoading,
    error: priceError,
  } = useQuery("cryptoPrice", fetchPrice);

  const {
    data: marketData,
    isLoading: marketLoading,
    error: marketError,
  } = useQuery("cryptoMarketData", fetchMarketData);

  if (priceLoading || marketLoading) {
    return <div>Carregando...</div>;
  }

  if (priceError || marketError) {
    return <div>Erro ao carregar dados</div>;
  }

  return (
    <div>
      <h1>Bitcoin Dashboard</h1>
      {priceData && <p>Preço atual: ${priceData.bitcoin.usd}</p>}
      {marketData && (
        <div>
          <h2>Volume e Preços dos últimos 30 dias</h2>
          <p>Preço histórico: {JSON.stringify(marketData.prices)}</p>
          <p>Volume histórico: {JSON.stringify(marketData.total_volumes)}</p>
        </div>
      )}
    </div>
  );
};

export default TestComponent;
