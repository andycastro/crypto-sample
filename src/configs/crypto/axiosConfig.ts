import axiosInstance from "../axiosInstanceConfig";

export const getCryptoPrice = async (cryptoId: string, currency: string) => {
  const response = await axiosInstance.get("simple/price", {
    params: {
      ids: cryptoId,
      vs_currencies: currency,
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
