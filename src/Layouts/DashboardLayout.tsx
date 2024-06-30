import { Outlet, useLocation } from "react-router-dom";
import DashBoardNav from "../component/Dashboard/DashboardNav";
import DashBoardHeader from "../component/Dashboard/DashboardHeader";

export default function DashboardLayout() {
  const location = useLocation();

  if (location.pathname === "/dashboard/invoice/create") {
    return (
      <div className="bg-[#F6F6F6] h-screen flex items-center justify-center">
        <Outlet />
      </div>
    )
  }
  return (
    <section>
      <DashBoardHeader />
      <div className="grid grid-cols-[0.2fr_1fr]">
        <DashBoardNav />
        <div className="bg-[#E6E6E6] h-screen">
          <Outlet />
        </div>
      </div>
    </section>
  )
}
