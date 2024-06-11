import BreadcrumbComponent from "@/components/common/BreadcrumbComponent";
import ContentBanner from "@/components/content/ContentBanner";
import News from "@/components/content/News";
import React from "react";

function ContentView() {
  return (
    <div className="relative 2xl:container">
      <ContentBanner />
      <div className="space-y-7 md:pt-0 pt-16 px-5">
        <BreadcrumbComponent
          data={[
            { name: "Home", path: "/" },
            { name: "News & Promotions", path: "/" },
          ]}
        />
        <News />
      </div>
    </div>
  );
}

export default ContentView;
