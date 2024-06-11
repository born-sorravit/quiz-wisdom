import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { ISubMenu } from "@/types/Bredcrumb.type";

interface IBreadcrumbComponentProps {
  data: ISubMenu[];
}
function BreadcrumbComponent({ data }: IBreadcrumbComponentProps) {
  return (
    <div className="md:container px-5">
      <Breadcrumb>
        <BreadcrumbList className="">
          {data.map((page, index) => (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink
                  className={index === data.length - 1 ? "text-orange-400" : ""}
                >
                  <Link href={`${page.path}`} legacyBehavior passHref>
                    <p className="cursor-pointer">{page.name}</p>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index !== data.length - 1 && <BreadcrumbSeparator />}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbComponent;
