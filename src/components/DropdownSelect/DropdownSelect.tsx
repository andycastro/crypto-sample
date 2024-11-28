import { useState } from "react";
import { FixedSizeList as List } from "react-window";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface DropdownSelectProps {
  label: string;
  options: { label: string; value: string | number }[];
  value: string | number | (string | number)[];
  onChange: (value: string | number | (string | number)[]) => void;
  isMultiSelect?: boolean;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  label,
  options,
  value,
  onChange,
  isMultiSelect = false,
}) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options.filter(
    (option) =>
      option.label &&
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (selectedValue: string | number) => {
    if (isMultiSelect) {
      const newValue = Array.isArray(value)
        ? value.includes(selectedValue)
          ? value.filter((v) => v !== selectedValue)
          : value.length < 5
          ? [...value, selectedValue]
          : value
        : [selectedValue];
      onChange(newValue);
    } else {
      onChange(selectedValue === value ? "" : selectedValue);
      setOpen(false);
    }
  };

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const option = filteredOptions[index];
    const isSelected = isMultiSelect
      ? Array.isArray(value) && value.includes(option.value)
      : value === option.value;

    return (
      <div style={style} key={option.value}>
        <CommandItem
          value={option.value.toString()}
          onSelect={() => handleSelect(option.value)}
        >
          {option.label}
          <Check
            className={`ml-auto ${isSelected ? "opacity-100" : "opacity-0"}`}
          />
        </CommandItem>
      </div>
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full min-w-[300px] max-w-[250px] sm:max-w-[300px] md:max-w-[350px] justify-between"
        >
          <div className="overflow-hidden w-full">
            <div className="flex justify-between">
              <div className="flex-1 truncate">
                {isMultiSelect
                  ? Array.isArray(value) && value.length > 0
                    ? value
                        .map(
                          (val) =>
                            options.find((option) => option.value === val)
                              ?.label
                        )
                        .join(", ")
                    : label
                  : value
                  ? options.find((option) => option.value === value)?.label
                  : label}
              </div>
              <ChevronsUpDown className="opacity-50 ml-2" />
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder={`Search ${label.toLowerCase()}...`}
            value={searchTerm}
            onValueChange={setSearchTerm}
          />
          <CommandList>
            <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
            <CommandGroup>
              <List
                height={200}
                itemCount={filteredOptions.length}
                itemSize={35}
                width="100%"
              >
                {Row}
              </List>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DropdownSelect;
