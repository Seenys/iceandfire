import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full p-6 ">
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
