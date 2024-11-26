import {
  getCryptoPrice,
  getCryptoMarketChart,
  getCryptoList,
  getSupportedVsCurrencies,
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

export const fetchCryptoList = async () => {
  return await getCryptoList();
};

export const fetchSupportedVsCurrencies = async () => {
  return await getSupportedVsCurrencies();
};
