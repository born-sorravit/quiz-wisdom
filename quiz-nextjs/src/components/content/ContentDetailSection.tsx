import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import ContentCard from "./ContentCard";
import { IContentNews } from "@/types/ContentNews.type";

interface ContentDetailSectionProps {
  contentDetail: string;
  otherContent: IContentNews[];
  image: string;
}

function ContentDetailSection({
  contentDetail,
  otherContent,
  image,
}: ContentDetailSectionProps) {
  return (
    <div className="md:container px-5">
      <div className="flex flex-col md:flex-row">
        <div className="grow md:mr-5 space-y-4">
          <div className="flex justify-center">
            <Image
              src={"/images/content-card.jpg"}
              width="0"
              height="0"
              sizes="80vw"
              className="w-[500px] h-auto bg-cover shadow-md"
              alt={""}
            />
          </div>
          <ReactMarkdown children={contentDetail} />
        </div>
        <div className="lg:w-[600px] w-full space-y-4 mt-5 md:mt-0">
          <div className="text-xl font-semibold">Related Contents</div>
          <ContentCard
            className="grid grid-cols-1 gap-4"
            heightCard="min-h-[320px]"
            heightImage="h-[170px]"
            data={otherContent}
          />
        </div>
      </div>
    </div>
  );
}

export default ContentDetailSection;
