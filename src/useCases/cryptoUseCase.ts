import {
  fetchCryptoMarketData,
  fetchCryptoList,
  fetchSupportedVsCurrencies,
  fetchTopGainingCoins,
  fetchMarketCapData,
  fetchCryptoPriceChange,
} from "../services/cryptoService";

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

export const getCryptoListUseCase = async () => {
  try {
    const list = await fetchCryptoList();
    interface Crypto {
      id: string;
      name: string;
    }

    interface CryptoOption {
      label: string;
      value: string;
    }

    const cryptoOptions: CryptoOption[] = list.map((crypto: Crypto) => ({
      label: crypto.name,
      value: crypto.id,
    }));
    return cryptoOptions;
  } catch (error) {
    console.error("Erro ao obter lista de criptomoedas:", error);
    throw error;
  }
};

export const getSupportedVsCurrenciesUseCase = async () => {
  try {
    const currencies = await fetchSupportedVsCurrencies();
    return currencies;
  } catch (error) {
    console.error("Erro ao obter moedas suportadas:", error);
    throw error;
  }
};

export const getTopGainingCoinsUseCase = async (currency: string) => {
  try {
    const topGainingCoins = await fetchTopGainingCoins(currency);
    return topGainingCoins;
  } catch (error) {
    console.error("Erro ao obter as moedas com maior ganho:", error);
    throw error;
  }
};

export const getMarketCapDataUseCase = async (currency: string) => {
  try {
    const marketCapData = await fetchMarketCapData(currency);
    return marketCapData;
  } catch (error) {
    console.error("Erro ao obter dados de capitalização de mercado:", error);
    throw error;
  }
};

export const getCryptoPriceChangeUseCase = async (cryptoId: string) => {
  try {
    const priceChangeData = await fetchCryptoPriceChange(cryptoId);
    return priceChangeData;
  } catch (error) {
    console.error("Erro ao obter variação de preço:", error);
    throw error;
  }
};
