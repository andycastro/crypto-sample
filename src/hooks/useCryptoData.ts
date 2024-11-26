import { useQuery } from "react-query";
import {
  getCryptoPriceUseCase,
  getCryptoMarketDataUseCase,
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
