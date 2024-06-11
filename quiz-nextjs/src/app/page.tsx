import { Metadata } from "next";
import React from "react";
import HomeView from "../views/home/HomeView";

export const metadata: Metadata = {
  title: "Home page",
};

const HomePage = async () => {
  return <HomeView />;
};

export default HomePage;
