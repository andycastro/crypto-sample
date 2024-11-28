import {
  fetchCryptoMarketData,
  fetchCryptoList,
  fetchSupportedVsCurrencies,
  fetchTopGainingCoins,
  fetchMarketCapData,
  fetchCryptoPriceChange,
} from "../services/cryptoService";

interface Crypto {
  id: string;
  name: string;
}

interface CryptoOption {
  label: string;
  value: string;
}

export const getCryptoMarketDataUseCase = async (
  cryptoId: string,
  currency: string,
  days: number
) => {
  try {
    const marketData = await fetchCryptoMarketData(cryptoId, currency, days);

    localStorage.setItem(
      `cryptoMarketData_${cryptoId}_${currency}_${days}`,
      JSON.stringify(marketData)
    );

    localStorage.setItem("storedDataCryptoMarketData", "false");

    return marketData;
  } catch (error) {
    console.error("Erro ao obter dados do mercado:", error);

    const storedData = localStorage.getItem(
      `cryptoMarketData_${cryptoId}_${currency}_${days}`
    );
    if (storedData) {
      localStorage.setItem("storedDataCryptoMarketData", "true");
      return JSON.parse(storedData);
    }

    throw error;
  }
};

export const getCryptoListUseCase = async () => {
  try {
    const list = await fetchCryptoList();

    const cryptoOptions: CryptoOption[] = list.map((crypto: Crypto) => ({
      label: crypto.name,
      value: crypto.id,
    }));

    localStorage.setItem("cryptoList", JSON.stringify(cryptoOptions));

    localStorage.setItem("storedDataCryptoList", "false");

    return cryptoOptions;
  } catch (error) {
    console.error("Erro ao obter lista de criptomoedas:", error);

    const storedCryptoList = localStorage.getItem("cryptoList");
    if (storedCryptoList) {
      localStorage.setItem("storedDataCryptoList", "true");
      return JSON.parse(storedCryptoList);
    }

    throw error;
  }
};

export const getSupportedVsCurrenciesUseCase = async () => {
  try {
    const currencies = await fetchSupportedVsCurrencies();

    localStorage.setItem("supportedVsCurrencies", JSON.stringify(currencies));

    localStorage.setItem("storedDataSupportedVsCurrencies", "false");

    return currencies;
  } catch (error) {
    console.error("Erro ao obter moedas suportadas:", error);

    const storedCurrencies = localStorage.getItem("supportedVsCurrencies");
    if (storedCurrencies) {
      localStorage.setItem("storedDataSupportedVsCurrencies", "true");
      return JSON.parse(storedCurrencies);
    }

    throw error;
  }
};

export const getTopGainingCoinsUseCase = async (currency: string) => {
  try {
    const topGainingCoins = await fetchTopGainingCoins(currency);

    localStorage.setItem(
      `topGainingCoins_${currency}`,
      JSON.stringify(topGainingCoins)
    );

    localStorage.setItem("storedDataTopGainingCoins", "false");

    return topGainingCoins;
  } catch (error) {
    console.error("Erro ao obter as moedas com maior ganho:", error);

    const storedCoins = localStorage.getItem(`topGainingCoins_${currency}`);
    if (storedCoins) {
      localStorage.setItem("storedDataTopGainingCoins", "true");
      return JSON.parse(storedCoins);
    }

    throw error;
  }
};

export const getMarketCapDataUseCase = async (
  currency: string,
  cryptoIds: string
) => {
  try {
    const marketCapData = await fetchMarketCapData(currency, cryptoIds);

    localStorage.setItem(
      `marketCapData_${currency}_${cryptoIds}`,
      JSON.stringify(marketCapData)
    );

    localStorage.setItem("storedDataMarketCap", "false");

    return marketCapData;
  } catch (error) {
    console.error("Erro ao obter dados de capitalização de mercado:", error);

    const storedData = localStorage.getItem(
      `marketCapData_${currency}_${cryptoIds}`
    );
    if (storedData) {
      localStorage.setItem("storedDataMarketCap", "true");
      return JSON.parse(storedData);
    }

    throw error;
  }
};

export const getCryptoPriceChangeUseCase = async (cryptoId: string) => {
  try {
    const priceChangeData = await fetchCryptoPriceChange(cryptoId);

    localStorage.setItem(
      `cryptoPriceChange_${cryptoId}`,
      JSON.stringify(priceChangeData)
    );

    localStorage.setItem("storedDataCryptoPriceChange", "false");

    return priceChangeData;
  } catch (error) {
    console.error("Erro ao obter variação de preço:", error);

    const storedData = localStorage.getItem(`cryptoPriceChange_${cryptoId}`);
    if (storedData) {
      localStorage.setItem("storedDataCryptoPriceChange", "true");
      return JSON.parse(storedData);
    }

    throw error;
  }
};
