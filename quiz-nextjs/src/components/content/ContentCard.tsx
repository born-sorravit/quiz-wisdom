import React from "react";
import Image from "next/image";
import { Clock9, Eye } from "lucide-react";
import { formatDate } from "@/utils/formatDate";
import { IContentNews } from "@/types/ContentNews.type";
import Link from "next/link";
interface ContentCardProps {
  className: string;
  heightCard?: string;
  heightImage?: string;
  data: IContentNews[];
}

function ContentCard({
  className,
  heightCard,
  heightImage,
  data,
}: ContentCardProps) {
  return (
    <div className={className}>
      {data.map((content) => (
        <Link
          href={{
            pathname: `/content/${content.id}`,
          }}
          key={content.id}
          className={`rounded-xl ${
            heightCard && heightCard
          } w-full border hover:shadow-lg cursor-pointer`}
        >
          <Image
            src={"/images/content-card.jpg"}
            width="0"
            height="0"
            sizes="80vw"
            className={`w-full ${
              heightImage ? heightImage : "h-[260px]"
            } bg-cover rounded-t-xl`}
            alt={""}
          />
          <div className="px-5 py-3 space-y-2">
            <div className="text-base font-normal text-green-400">
              {content.tag}
            </div>
            <div>
              <div className="truncate w-full text-lg font-medium">
                {content.title}
              </div>
              <div className="line-clamp-2 w-full text-sm font-normal">
                {content.detail}
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock9 size={16} strokeWidth={2} />
                <div className="text-sm font-medium">
                  {formatDate(content.dateAt)}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Eye size={16} strokeWidth={2} />
                <div className="text-sm font-medium">{content.viewCount}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ContentCard;
