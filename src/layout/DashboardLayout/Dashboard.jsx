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
import { ImProfile } from "react-icons/im";
import Navbar from "../../component/SharedComponent/Navbar";
import useAdmin from "../../hooks/useAdmin";
import usePublisher from "../../hooks/usePublisher";
import useSeeker from "../../hooks/useSeeker";
import Loading from "../../pages/Loading/Loading";

// Loading component


const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isPublisher, isPublisherLoading] = usePublisher();
  const [isSeeker, isSeekerLoading] = useSeeker();

  // Show loading screen while any hook is loading
  if (isAdminLoading || isPublisherLoading || isSeekerLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="fixed z-50 transform ease-in-out duration-700 w-12 md:w-16 md:ms-13 my-5 bg-cb-card shadow-lg rounded-lg">
          <div className="h-full flex flex-col">
            <nav>
              {/* Seeker Links */}
              {isSeeker && (
                <>
                  <NavItem to="/dashboard/myprofile" icon={<ImProfile />} tooltip="My Profile" />
                  <NavItem to="/dashboard/applied-jobs" icon={<FaFileAlt />} tooltip="Applied Jobs" />
                  <NavItem to="/dashboard/favorite-jobs" icon={<FaBriefcase />} tooltip="Favorite Jobs" />
                </>
              )}

              {/* Publisher Links */}
              {isPublisher && (
                <>
                  <NavItem to="/dashboard/myprofile" icon={<ImProfile />} tooltip="My Profile" />
                  <NavItem to="/dashboard/manage-jobs" icon={<FaBriefcase />} tooltip="Manage Jobs" />
                  <NavItem to="/dashboard/manage-applications" icon={<FaUsers />} tooltip="Applicants" />
                  <NavItem to="/dashboard/post-job" icon={<FaFileAlt />} tooltip="Post a New Job" />
                </>
              )}

              {/* Admin Links */}
              {isAdmin && (
                <>
                  <NavItem to="/dashboard/myprofile" icon={<ImProfile />} tooltip="My Profile" />
                  <NavItem to="/dashboard/overview" icon={<FaTachometerAlt />} tooltip="Overview" />
                  <NavItem to="/dashboard/manage-jobs" icon={<FaBriefcase />} tooltip="Manage Jobs" />
                  <NavItem to="/dashboard/manage-users" icon={<FaUsers />} tooltip="Users" />
                  <NavItem to="/dashboard/manage-applications" icon={<FaFileAlt />} tooltip="Applicants" />
                </>
              )}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-16 p-4 w-full">
          <Outlet />
        </main>
      </div>

      {/* Tooltip styling */}
      <Tooltip
        id="tooltip"
        place="right"
        effect="solid"
        style={{
          backgroundColor: "#176b87",
          color: "#ffffff",
          padding: "8px 10px",
          borderRadius: "5px",
          fontSize: "14px",
        }}
      />
    </>
  );
};

// Component for sidebar items
const NavItem = ({ to, icon, tooltip }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 bg-cb-primary text-white rounded-lg"
        : "flex max-sm:flex-col items-center justify-center px-3 py-1 md:p-4 hover:bg-cb-secondary hover:text-white transition rounded-lg"
    }
    data-tooltip-id="tooltip"
    data-tooltip-content={tooltip}
  >
    <div className="w-6 h-6">{icon}</div>
    <small className="hidden max-sm:block text-[8px] text-center">{tooltip}</small>
  </NavLink>
);

export default Dashboard;
