import React from "react";
import Image from "next/image";
import { contentsBanner } from "@/constants/content.contants";

function ContentBanner() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="col-start-2 lg:h-full md:h-[454px] h-[284px] pt-16 md:pt-0">
          <Image
            src={"/images/bg-banner.png"}
            width="0"
            height="0"
            sizes="200vw"
            className="md:w-auto w-full md:h-[523px] h-[255px]"
            alt={""}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute top-0 w-full md:container px-5">
          <div className="w-[300px] space-y-3">
            <div className="text-2xl font-semibold text-orange-400">
              {contentsBanner.title}
            </div>
            <div
              className={`text-base font-normal before:content-['"'] after:content-['"']`}
            >
              {contentsBanner.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBanner;
