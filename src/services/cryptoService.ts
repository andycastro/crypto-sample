import {
  getCryptoPrice,
  getCryptoMarketChart,
} from "../configs/crypto/axiosConfig";

export const fetchCryptoPrice = async (cryptoId: string, currency: string) => {
  return await getCryptoPrice(cryptoId, currency);
};

export const fetchCryptoMarketData = async (
  cryptoId: string,
  currency: string,
  days: number
) => {
  return await getCryptoMarketChart(cryptoId, currency, days);
};
