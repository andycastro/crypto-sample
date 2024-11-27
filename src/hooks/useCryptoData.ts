import { useQuery } from "react-query";
import {
  getCryptoMarketDataUseCase,
  getCryptoListUseCase,
  getSupportedVsCurrenciesUseCase,
  getTopGainingCoinsUseCase,
  getMarketCapDataUseCase,
} from "../useCases/cryptoUseCase";

export const useCryptoMarketData = (
  cryptoId: string,
  currency: string,
  days: number
) => {
  return useQuery(
    ["cryptoMarketData", cryptoId, currency, days],
    () => getCryptoMarketDataUseCase(cryptoId, currency, days),
    {
      //refetchInterval: 5000, //voltar para 5 segundos
    }
  );
};

export const useCryptoList = () => {
  return useQuery("cryptoList", async () => {
    const cachedCryptoList = localStorage.getItem("cryptoList");
    if (cachedCryptoList) {
      return JSON.parse(cachedCryptoList);
    } else {
      const cryptoList = await getCryptoListUseCase();
      localStorage.setItem("cryptoList", JSON.stringify(cryptoList));
      return cryptoList;
    }
  });
};

export const useSupportedVsCurrencies = () => {
  return useQuery("supportedVsCurrencies", getSupportedVsCurrenciesUseCase);
};

export const useTopGainingCoins = (currency: string) => {
  return useQuery(["topGainingCoins", currency], () =>
    getTopGainingCoinsUseCase(currency)
  );
};

export const useMarketCapData = (currency: string) => {
  return useQuery(["marketCapData", currency], () =>
    getMarketCapDataUseCase(currency)
  );
};
