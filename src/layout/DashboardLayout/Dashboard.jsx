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
import { ImProfile } from "react-icons/im";
import { MdFavoriteBorder } from "react-icons/md";

const Dashboard = () => {
  const role = {
    isAdmin: false,
    isJobPublisher: false,
    isJobSeeker: true,
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
            className={`fixed z-50 transform ease-in-out duration-700 w-12 md:w-16 md:ms-5 my-5 bg-cb-card shadow-lg rounded-lg`}
          >
            {/* Sidebar Content */}
            <div className="h-full flex flex-col">
              <nav>
                {role.isJobPublisher && (
                  <>
                    {/* Dashboard Overview */}
                    <NavLink
                      to="/dashboard/overview"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
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
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="manage-jobs-tooltip"
                      data-tooltip-content="Manage Job Posts"
                    >
                      <FaBriefcase className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px] text-center">Manage Jobs</small>
                    </NavLink>

                    {/* Manage Users */}
                    <NavLink
                      to="/dashboard/manage-users"
                      className={({ isActive }) =>
                        isActive
                          ? "flex  max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="manage-users-tooltip"
                      data-tooltip-content="Manage Users"
                    >
                      <FaUsers className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">Users</small>
                    </NavLink>

                    {/* Job Applications */}
                    <NavLink
                      to="/dashboard/job-applications"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="job-applications-tooltip"
                      data-tooltip-content="Job Applications"
                    >
                      <FaFileAlt className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">Applications</small>
                    </NavLink>

                    {/* Reports & Analytics */}
                    <NavLink
                      to="/dashboard/reports"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="reports-tooltip"
                      data-tooltip-content="Reports & Analytics"
                    >
                      <FaChartBar className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">Reports</small>
                    </NavLink>

                    {/* Settings */}
                    <NavLink
                      to="/dashboard/settings"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="settings-tooltip"
                      data-tooltip-content="Settings"
                    >
                      <FaCog className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">Settings</small>
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


                {/* links for admin */}
                {role.isAdmin && (
                  <>
                    {/* Dashboard Overview */}
                    <NavLink
                      to="/dashboard/overview"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
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
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="manage-jobs-tooltip"
                      data-tooltip-content="Manage Job Posts"
                    >
                      <FaBriefcase className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px] text-center">Manage Jobs</small>
                    </NavLink>

                    {/* Manage Users */}
                    <NavLink
                      to="/dashboard/manage-users"
                      className={({ isActive }) =>
                        isActive
                          ? "flex  max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="manage-users-tooltip"
                      data-tooltip-content="Manage Users"
                    >
                      <FaUsers className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">Users</small>
                    </NavLink>

                    {/* Job Applications */}
                    <NavLink
                      to="/dashboard/job-applications"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="job-applications-tooltip"
                      data-tooltip-content="Job Applications"
                    >
                      <FaFileAlt className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">Applications</small>
                    </NavLink>

                    {/* Reports & Analytics */}
                    <NavLink
                      to="/dashboard/reports"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="reports-tooltip"
                      data-tooltip-content="Reports & Analytics"
                    >
                      <FaChartBar className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">Reports</small>
                    </NavLink>

                    {/* Settings */}
                    <NavLink
                      to="/dashboard/settings"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="settings-tooltip"
                      data-tooltip-content="Settings"
                    >
                      <FaCog className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">Settings</small>
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

                {/* links for job seeker */}
                {role.isJobSeeker && (
                  <>
                    {/* User Profile */}
                    <NavLink
                      to="/dashboard/myprofile1"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="user-profile-tooltip"
                      data-tooltip-content="My Profile"
                    >
                      <ImProfile className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">My Profile</small>
                    </NavLink>

                    {/* Applied Jobs */}
                    <NavLink
                      to="/dashboard/applied-jobs"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="applied-jobs-tooltip"
                      data-tooltip-content="Applied Jobs"
                    >
                      <FaBriefcase className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px]">Applied Jobs</small>
                    </NavLink>

                    {/* Favorite Jobs */}
                    <NavLink
                      to="/dashboard/favorite-jobs"
                      className={({ isActive }) =>
                        isActive
                          ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
                          : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
                      }
                      data-tooltip-id="favorite-jobs-tooltip"
                      data-tooltip-content="Favorite Jobs"
                    >
                      <MdFavoriteBorder className="w-6 h-6" />
                      <small className="hidden max-sm:block text-[8px] text-center">Favorite Jobs</small>
                    </NavLink>

                    {/* Tooltips */}
                    <Tooltip id="user-profile-tooltip" place="right" effect="solid"
                      style={{ backgroundColor: "#176b87", color: "#ffffff", padding: "8px 10px", borderRadius: "5px", fontSize: "14px" }} />
                    <Tooltip id="applied-jobs-tooltip" place="right" effect="solid"
                      style={{ backgroundColor: "#176b87", color: "#ffffff", padding: "8px 10px", borderRadius: "5px", fontSize: "14px" }} />
                    <Tooltip id="favorite-jobs-tooltip" place="right" effect="solid"
                      style={{ backgroundColor: "#176b87", color: "#ffffff", padding: "8px 10px", borderRadius: "5px", fontSize: "14px" }} />
                  </>
                )}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 ms-[50px] md:ms-[84px] bg-cb-white">
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
