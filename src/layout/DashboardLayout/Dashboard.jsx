import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaUsers,
  FaFileAlt,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import Navbar from "../../component/SharedComponent/Navbar";

const Dashboard = () => {
  const role = {
    isAdmin: true,
  };
  const [openCloseMenu, setOpenCloseMenu] = useState(true);

  const handleOpenCloseMenu = () => {
    setOpenCloseMenu(!openCloseMenu);
  };

  return (
    <>
      <section>
        <div className="bg-cb-primary">
          <Navbar />
        </div>
        <div className="min-h-screen flex bg-cb-white">
          {/* Sidebar */}
          <aside
            className={`fixed transform ease-in-out duration-700 w-16 md:ms-5 my-5 bg-cb-card shadow-lg rounded-lg`}
          >
            {/* Sidebar Content */}
            <div className=" h-full flex flex-col">
              <nav>
                {role.isAdmin && (
                  <>
                    {/* Dashboard Overview */}
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center p-3 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center p-3 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="dashboard-tooltip"
                      data-tooltip-content="Dashboard Overview"
                    >
                      <FaTachometerAlt className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">Overview</small>
                    </NavLink>

                    {/* Manage Jobs */}
                    <NavLink
                      to="/dashboard/manage-jobs"
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center justify-center p-3 bg-cb-primary text-white rounded-lg"
                          : "flex items-center justify-center p-3 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="manage-jobs-tooltip"
                      data-tooltip-content="Manage Job Posts"
                    >
                      <FaBriefcase className="w-6 h-6" />
                    </NavLink>

                    {/* Manage Users */}
                    <NavLink
                      to="/dashboard/manage-users"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center p-3 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center p-3 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="manage-users-tooltip"
                      data-tooltip-content="Manage Users"
                    >
                      <FaUsers className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">Manage Users</small>
                    </NavLink>

                    {/* Job Applications */}
                    <NavLink
                      to="/dashboard/job-applications"
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center justify-center p-3 bg-cb-primary text-white rounded-lg"
                          : "flex items-center justify-center p-3 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="job-applications-tooltip"
                      data-tooltip-content="Job Applications"
                    >
                      <FaFileAlt className="w-6 h-6" />
                    </NavLink>

                    {/* Reports & Analytics */}
                    <NavLink
                      to="/dashboard/reports"
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center justify-center p-3 bg-cb-primary text-white rounded-lg"
                          : "flex items-center justify-center p-3 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="reports-tooltip"
                      data-tooltip-content="Reports & Analytics"
                    >
                      <FaChartBar className="w-6 h-6" />
                    </NavLink>

                    {/* Settings */}
                    <NavLink
                      to="/dashboard/settings"
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center justify-center p-3 bg-cb-primary text-white rounded-lg"
                          : "flex items-center justify-center p-3 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="settings-tooltip"
                      data-tooltip-content="Settings"
                    >
                      <FaCog className="w-6 h-6" />
                    </NavLink>

                    {/* Tooltips */}
                    <Tooltip id="dashboard-tooltip" place="right" effect="solid" 
                    style={{ backgroundColor: "#176b87", color: "#ffffff", padding: "8px 10px", borderRadius: "5px", fontSize: "14px" }} />
                    <Tooltip id="manage-jobs-tooltip" place="right" effect="solid" 
                    style={{ backgroundColor: "#176b87", color: "#ffffff", padding: "8px 10px", borderRadius: "5px", fontSize: "14px" }} />
                    <Tooltip id="manage-users-tooltip" place="right" effect="solid" 
                    style={{ backgroundColor: "#176b87", color: "#ffffff", padding: "8px 10px", borderRadius: "5px", fontSize: "14px" }} />
                    <Tooltip id="job-applications-tooltip" place="right" effect="solid" 
                    style={{ backgroundColor: "#176b87", color: "#ffffff", padding: "8px 10px", borderRadius: "5px", fontSize: "14px" }} />
                    <Tooltip id="reports-tooltip" place="right" effect="solid" 
                    style={{ backgroundColor: "#176b87", color: "#ffffff", padding: "8px 10px", borderRadius: "5px", fontSize: "14px" }} />
                    <Tooltip id="settings-tooltip" place="right" effect="solid" 
                    style={{ backgroundColor: "#176b87", color: "#ffffff", padding: "8px 10px", borderRadius: "5px", fontSize: "14px" }} />
                  </>
                )}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 ms-[60px] md:ms-[84px] bg-sand">
            <section>
              <Outlet />
            </section>
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
