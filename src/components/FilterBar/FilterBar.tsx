import DropdownSelect from "@/components/DropdownSelect/DropdownSelect";
import { FilterBarProps } from "./FilterBar.types";

export const FilterBar = ({
  dayOptions,
  selectedDay,
  currencyOptions,
  selectedCurrency,
  cryptoList,
  selectedCrypto,
}: FilterBarProps) => {
  const handleDayChange = (value: string | number) => {
    selectedDay.setValue(Number(value));
  };

  const handleCurrencyChange = (value: string | number) => {
    selectedCurrency.setValue(String(value));
  };

  const handleCryptoChange = (value: string | number) => {
    selectedCrypto.setValue(String(value));
  };
  return (
    <>
      <DropdownSelect
        label="Selecione o período..."
        options={dayOptions}
        value={selectedDay.value}
        onChange={handleDayChange}
      />
      <DropdownSelect
        label="Selecione a moeda..."
        options={currencyOptions}
        value={selectedCurrency.value}
        onChange={handleCurrencyChange}
      />
      <DropdownSelect
        label="Selecione a criptomoeda..."
        options={cryptoList}
        value={selectedCrypto.value}
        onChange={handleCryptoChange}
      />
    </>
  );
};
