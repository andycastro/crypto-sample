export type FilterBarProps = {
  dayOptions: { label: string; value: number }[];
  selectedDay: {
    value: number;
    setValue: (value: number) => void;
  };
  currencyOptions: { label: string; value: string }[];
  selectedCurrency: {
    value: string;
    setValue: (value: string) => void;
  };
  cryptoList: { label: string; value: string }[];
  selectedCrypto: {
    value: string;
    setValue: (value: string) => void;
  };
};
