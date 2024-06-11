import ContentDetailView from "@/views/content/ContentDetailView";
import { Metadata } from "next";
import { useParams } from "next/navigation";
import React from "react";
interface ContentDetailProps {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: "Content Page",
};

const ContentDetailPage = ({ params: { id } }: ContentDetailProps) => {
  return <ContentDetailView id={id} />;
};

export default ContentDetailPage;
