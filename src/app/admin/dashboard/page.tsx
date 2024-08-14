import DashboardCard from "@/components/adminComponent/DashboardCard";
import DashboardChart from "@/components/adminComponent/DashboardChart";
import PageTitle from "@/components/adminComponent/PageTitle";
import React from "react";

const Dashboardpage = () => {
  return (
    <div>
      <PageTitle title="Admin Dashboard " />
      <div className="my-10">
        <DashboardCard />
      </div>
      <DashboardChart/>
    </div>
  );
};

export default Dashboardpage;
