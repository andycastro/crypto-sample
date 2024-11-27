import { useQuery } from "react-query";
import {
  getCryptoMarketDataUseCase,
  getCryptoListUseCase,
  getSupportedVsCurrenciesUseCase,
  getTopGainingCoinsUseCase,
  getMarketCapDataUseCase,
  getCryptoPriceChangeUseCase,
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
      refetchOnWindowFocus: false,
    }
  );
};

export const useCryptoList = () => {
  return useQuery(
    "cryptoList",
    async () => {
      const cachedCryptoList = localStorage.getItem("cryptoList");
      if (cachedCryptoList) {
        return JSON.parse(cachedCryptoList);
      } else {
        const cryptoList = await getCryptoListUseCase();
        localStorage.setItem("cryptoList", JSON.stringify(cryptoList));
        return cryptoList;
      }
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const useSupportedVsCurrencies = () => {
  return useQuery("supportedVsCurrencies", getSupportedVsCurrenciesUseCase, {
    refetchOnWindowFocus: false,
  });
};

export const useTopGainingCoins = (currency: string) => {
  return useQuery(
    ["topGainingCoins", currency],
    () => getTopGainingCoinsUseCase(currency),
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const useMarketCapData = (currency: string) => {
  return useQuery(
    ["marketCapData", currency],
    () => getMarketCapDataUseCase(currency),
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const useCryptoPriceChange = (cryptoId: string) => {
  return useQuery(
    ["cryptoPriceChange", cryptoId],
    () => getCryptoPriceChangeUseCase(cryptoId),
    {
      refetchOnWindowFocus: false,
    }
  );
};
