import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen relative bg-white space-y-5">
      <div className="flex justify-center bg-primary-surface h-14 items-center shadow-sm">
        Navbar
      </div>
      <main className="">{children}</main>
      <div className="flex justify-center bg-primary-surface h-14 items-center shadow-sm">
        <div className="">Footer</div>
      </div>
    </div>
  );
}

export default MainLayout;
