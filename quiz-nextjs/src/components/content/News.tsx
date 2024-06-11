import React from "react";
import ContentCard from "./ContentCard";
import { contentNews } from "@/constants/content.contants";

function News() {
  return (
    <div className="md:container space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">News</div>
        <div className="text-sm font-normal">
          Total : {contentNews.length} News
        </div>
      </div>

      <ContentCard
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        data={contentNews}
      />
    </div>
  );
}

export default News;
