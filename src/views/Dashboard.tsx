import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import MainLayout from "@/components/layouts/MainLayout";
import { MonitoringPrice } from "@/components/charts/MonitoringPrice";
import { useState } from "react";
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

export const Dashboard = () => {
  const [days, setDays] = useState(30);
  const [open, setOpen] = useState(false);
  const options = [
    { label: "Últimos 7 dias", value: 7 },
    { label: "Últimos 30 dias", value: 30 },
    { label: "Últimos 90 dias", value: 90 },
  ];

  return (
    <MainLayout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Crypto Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="py-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-500">
          Welcome to the Crypto Fetching Dashboard.
        </p>
        <div className="py-6">
          <div className="w-full flex justify-end space-x-5">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {days
                    ? options.find((option) => option.value === days)?.label
                    : "Selecione o período..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search period..." />
                  <CommandList>
                    <CommandEmpty>No period found.</CommandEmpty>
                    <CommandGroup>
                      {options.map((option) => (
                        <CommandItem
                          key={option.value}
                          value={option.value.toString()}
                          onSelect={(currentValue) => {
                            setDays(
                              currentValue === days.toString()
                                ? 0
                                : Number(currentValue)
                            );
                            setOpen(false);
                          }}
                        >
                          {option.label}
                          <Check
                            className={`ml-auto ${
                              days === option.value
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            <MonitoringPrice cryptoId="marinade" currency="EUR" days={days} />

            <MonitoringPrice cryptoId="marinade" currency="EUR" days={days} />
            <MonitoringPrice cryptoId="marinade" currency="EUR" days={days} />
            <MonitoringPrice cryptoId="marinade" currency="EUR" days={days} />
            <MonitoringPrice cryptoId="marinade" currency="EUR" days={days} />
            <MonitoringPrice cryptoId="marinade" currency="EUR" days={days} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
