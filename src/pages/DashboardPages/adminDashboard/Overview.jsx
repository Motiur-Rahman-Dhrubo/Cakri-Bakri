import { FaBriefcase, FaUsers, FaFileAlt, FaChartBar } from "react-icons/fa";

const DashboardOverview = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Jobs Posted */}
        <div className="bg-[hsl(195,69%,45%)] text-cb-white p-6 rounded-lg shadow-md flex items-center">
          <FaBriefcase className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-bold">245</h3>
            <p className="text-sm">Total Jobs Posted</p>
          </div>
        </div>

        {/* Total Applications */}
        <div className="bg-[#1f87aa] text-white p-6 rounded-lg shadow-md flex items-center">
          <FaFileAlt className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-bold">1,320</h3>
            <p className="text-sm">Total Job Applications</p>
          </div>
        </div>

        {/* Total Users */}
        <div className="bg-cb-primary text-white p-6 rounded-lg shadow-md flex items-center">
          <FaUsers className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-bold">3,580</h3>
            <p className="text-sm">Total Users</p>
          </div>
        </div>

        {/* Reports */}
        <div className="bg-cb-secondary text-white p-6 rounded-lg shadow-md flex items-center">
          <FaChartBar className="text-4xl mr-4" />
          <div>
            <h3 className="text-xl font-bold">12</h3>
            <p className="text-sm">Pending Reports</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;
