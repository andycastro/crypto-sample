import {
  fetchCryptoPrice,
  fetchCryptoMarketData,
} from "../services/cryptoService";

export const getCryptoPriceUseCase = async (
  cryptoId: string,
  currency: string
) => {
  try {
    const price = await fetchCryptoPrice(cryptoId, currency);
    return price;
  } catch (error) {
    console.error("Erro ao obter preço da criptomoeda:", error);
    throw error;
  }
};

export const getCryptoMarketDataUseCase = async (
  cryptoId: string,
  currency: string,
  days: number
) => {
  try {
    const marketData = await fetchCryptoMarketData(cryptoId, currency, days);
    return marketData;
  } catch (error) {
    console.error("Erro ao obter dados do mercado:", error);
    throw error;
  }
};
