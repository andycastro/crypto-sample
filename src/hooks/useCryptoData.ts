import { useQuery } from "react-query";
import {
  getCryptoPriceUseCase,
  getCryptoMarketDataUseCase,
  getCryptoListUseCase,
} from "../useCases/cryptoUseCase";

export const useCryptoPrice = (cryptoId: string, currency: string) => {
  return useQuery(["cryptoPrice", cryptoId, currency], () =>
    getCryptoPriceUseCase(cryptoId, currency)
  );
};

export const useCryptoMarketData = (
  cryptoId: string,
  currency: string,
  days: number
) => {
  return useQuery(
    ["cryptoMarketData", cryptoId, currency, days],
    () => getCryptoMarketDataUseCase(cryptoId, currency, days),
    {
      refetchInterval: 5000,
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
