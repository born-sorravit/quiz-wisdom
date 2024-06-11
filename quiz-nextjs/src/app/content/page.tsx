import ContentView from "@/views/content/ContentView";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Content Page",
};

const ContentPage = async () => {
  return <ContentView />;
};
export default ContentPage;
