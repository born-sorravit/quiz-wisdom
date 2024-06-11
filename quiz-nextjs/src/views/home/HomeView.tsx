"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
function HomeView() {
  return (
    <div className="relative 2xl:container min-h-screen">
      <Link href={"/content"}>
        <Button>Content Page</Button>
      </Link>
    </div>
  );
}

export default HomeView;
