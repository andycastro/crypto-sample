import React from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MultiSelectProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options = [],
  selectedOptions = [],
  onChange,
}) => {
  const validOptions = Array.isArray(options) ? options : [];
  const validSelectedOptions = Array.isArray(selectedOptions)
    ? selectedOptions
    : [];

  const toggleOption = (option: string) => {
    const newSelectedOptions = validSelectedOptions.includes(option)
      ? validSelectedOptions.filter((o) => o !== option)
      : [...validSelectedOptions, option];
    onChange(newSelectedOptions);
  };

  return (
    <Popover>
      <PopoverTrigger className="w-full p-2 border rounded-md flex items-center justify-between">
        <span>
          {validSelectedOptions.length > 0
            ? validSelectedOptions.join(", ")
            : "Select options"}
        </span>
        <ChevronDown className="ml-2 h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent className="w-full p-2">
        <Command>
          <CommandInput placeholder="Search options..." />
          <CommandGroup>
            {validOptions.map((option) => (
              <CommandItem
                key={option}
                onSelect={() => toggleOption(option)}
                className="flex items-center justify-between"
              >
                <span>{option}</span>
                {validSelectedOptions.includes(option) && (
                  <Check className="ml-2 h-4 w-4" />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelect;
