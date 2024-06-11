import React, { useMemo } from "react";
import BreadcrumbComponent from "@/components/common/BreadcrumbComponent";
import ContentDetailHeader from "@/components/content/ContentDetailHeader";
import ContentDetailSection from "@/components/content/ContentDetailSection";
import { contentNews } from "@/constants/content.contants";
import { IContentNews } from "@/types/ContentNews.type";
interface ContentDetailViewProps {
  id: string;
}

function ContentDetailView({ id }: ContentDetailViewProps) {
  const { content, otherContent } = useMemo(() => {
    const currentContent = contentNews.find((item) => item.id === id);
    const otherContent = contentNews.filter((item) => item.id !== id);
    return {
      content: currentContent as IContentNews,
      otherContent: otherContent,
    };
  }, []);
  return (
    <div className="space-y-5">
      <BreadcrumbComponent
        data={[
          { name: "News & Promotions", path: "/content" },
          { name: content.title, path: content.id },
        ]}
      />
      <ContentDetailHeader
        title={content.title}
        createdBy={content.createdBy}
        dateAt={content.dateAt}
        viewCount={content.viewCount}
      />
      <ContentDetailSection
        contentDetail={content.detail}
        otherContent={otherContent}
        image={content.image}
      />
    </div>
  );
}

export default ContentDetailView;
