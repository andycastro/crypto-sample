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
import DropdownSelect from "@/components/DropdownSelect/DropdownSelect";

export const Dashboard = () => {
  const [days, setDays] = useState(30);
  const [currency, setCurrency] = useState("EUR");
  const [cryptoId, setCryptoId] = useState("marinade");

  const dayOptions = [
    { label: "Últimos 7 dias", value: 7 },
    { label: "Últimos 30 dias", value: 30 },
    { label: "Últimos 90 dias", value: 90 },
  ];

  const currencyOptions = [
    { label: "EUR", value: "EUR" },
    { label: "USD", value: "USD" },
    { label: "GBP", value: "GBP" },
  ];

  const cryptoOptions = [
    { label: "Marinade", value: "marinade" },
    { label: "Bitcoin", value: "bitcoin" },
    { label: "Ethereum", value: "ethereum" },
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
            <DropdownSelect
              label="Selecione o período..."
              options={dayOptions}
              value={days}
              onChange={(value) => setDays(Number(value))}
            />
            <DropdownSelect
              label="Selecione a moeda..."
              options={currencyOptions}
              value={currency}
              onChange={(value) => setCurrency(value.toString())}
            />
            <DropdownSelect
              label="Selecione a criptomoeda..."
              options={cryptoOptions}
              value={cryptoId}
              onChange={(value) => setCryptoId(value.toString())}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            <MonitoringPrice
              cryptoId={cryptoId}
              currency={currency}
              days={days}
            />
            <MonitoringPrice
              cryptoId={cryptoId}
              currency={currency}
              days={days}
            />
            <MonitoringPrice
              cryptoId={cryptoId}
              currency={currency}
              days={days}
            />
            <MonitoringPrice
              cryptoId={cryptoId}
              currency={currency}
              days={days}
            />
            <MonitoringPrice
              cryptoId={cryptoId}
              currency={currency}
              days={days}
            />
            <MonitoringPrice
              cryptoId={cryptoId}
              currency={currency}
              days={days}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
