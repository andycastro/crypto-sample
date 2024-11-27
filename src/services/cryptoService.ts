import {
  getCryptoMarketChart,
  getCryptoList,
  getSupportedVsCurrencies,
  getTopGainingCoins,
  getMarketCapData,
} from "../configs/crypto/axiosConfig";

import { getCryptoPriceChange } from "../configs/crypto/axiosConfig";

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

export const fetchTopGainingCoins = async (currency: string) => {
  return await getTopGainingCoins(currency);
};

export const fetchMarketCapData = async (
  currency: string,
  cryptoIds: string
) => {
  return await getMarketCapData(currency, cryptoIds);
};

export const fetchCryptoPriceChange = async (cryptoId: string) => {
  return await getCryptoPriceChange(cryptoId);
};
