import { formatDate } from "@/utils/formatDate";
import { Clock9, Eye } from "lucide-react";
import React from "react";
interface ContentDetailHeaderProps {
  title: string;
  createdBy: string;
  dateAt: string;
  viewCount: number;
}

function ContentDetailHeader({
  title,
  createdBy,
  dateAt,
  viewCount,
}: ContentDetailHeaderProps) {
  return (
    <div className="md:container px-5">
      <div className="space-y-3">
        <div className="lg:text-4xl text-xl font-semibold">{title}</div>
        <div className="text-sm font-medium flex items-center text-gray-500">
          Opinion by : <div className="text-blue-400 ml-1">{createdBy}</div>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1 text-gray-500">
            <Clock9 size={16} strokeWidth={2} />
            <div className="text-sm font-medium">{formatDate(dateAt)}</div>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <Eye size={16} strokeWidth={2} />
            <div className="text-sm font-medium">{viewCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentDetailHeader;
