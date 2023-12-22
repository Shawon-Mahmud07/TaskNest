import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SidebarWithLogo } from "../components/SidebarWithLogo";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <Helmet>
        <title>TaskNest | DashBoard</title>
      </Helmet>
      <SidebarWithLogo></SidebarWithLogo>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
