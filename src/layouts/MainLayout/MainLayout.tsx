import React, { FunctionComponent, ReactNode, useState } from "react";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";
import About from "../../components/About";
import Discover from "../../components/Discover";
import Services from "../../components/Services";
import GetStarted from "../../components/GetStarted";
import Footer from "../../components/Footer";

import "./MainLayout.scss";

const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  const className: string = "main-layout";
  return (
    <div className={className}>
      <Header />
      <Sidebar />
      <Hero />
      <About />
      <Discover />
      <Services />
      <GetStarted />
      <Footer />
      <div className={`${className}_body`}></div>
    </div>
  );
};

interface MainLayoutProps {
  children?: ReactNode;
}

export default MainLayout;
