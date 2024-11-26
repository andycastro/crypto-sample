import {
  fetchCryptoPrice,
  fetchCryptoMarketData,
  fetchCryptoList,
  fetchSupportedVsCurrencies,
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
