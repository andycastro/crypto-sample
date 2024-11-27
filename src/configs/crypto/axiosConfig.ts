import axiosInstance from "../axiosInstanceConfig";

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

export const getSupportedVsCurrencies = async () => {
  const response = await axiosInstance.get("simple/supported_vs_currencies");
  return response.data;
};

export const getTopGainingCoins = async (currency: string) => {
  const response = await axiosInstance.get("coins/markets", {
    params: {
      vs_currency: currency,
      order: "percent_change_24h_desc",
      per_page: 5,
    },
  });
  return response.data;
};

export const getMarketCapData = async (currency: string) => {
  const response = await axiosInstance.get("coins/markets", {
    params: {
      vs_currency: currency,
      ids: "bitcoin,ethereum,cardano",
      order: "market_cap_desc",
    },
  });
  return response.data;
};
