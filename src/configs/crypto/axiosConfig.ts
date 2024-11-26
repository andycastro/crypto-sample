import axiosInstance from "../axiosInstanceConfig";

export const getCryptoPrice = async (cryptoId: string, currency: string) => {
  const response = await axiosInstance.get(`coins/${cryptoId}/market_chart`, {
    params: {
      vs_currency: currency,
      days: 1,
    },
  });
  return response.data;
};

export const getCryptoMarketChart = async (
  cryptoId: string,
  currency: string,
  days: number
) => {
  const response = await axiosInstance.get(`coins/${cryptoId}/market_chart`, {
    params: {
      vs_currency: currency,
      days,
    },
  });
  return response.data;
};

export const getCryptoList = async () => {
  const response = await axiosInstance.get("coins/list");
  return response.data;
};
