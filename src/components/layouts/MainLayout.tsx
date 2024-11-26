import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow p-4 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
