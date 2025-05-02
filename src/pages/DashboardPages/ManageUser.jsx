import { useState } from "react";
import { FaUserEdit, FaTrash, FaEye, FaSearch } from "react-icons/fa";

const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Job Seeker", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Job Publisher", status: "Pending" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Admin", status: "Active" },
  { id: 4, name: "Sarah Brown", email: "sarah@example.com", role: "Job Seeker", status: "Banned" },
];

const ManageUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("");

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterRole ? user.role === filterRole : true)
  );

  return (
    <section className="w-11/12 mx-auto py-3 md:py-6">
      <h2 className="text-3xl md:text-5xl font-semibold text-cb-secondary mb-4">Manage Users</h2>

      {/* Search & Filter */}
      <div className="w-fit flex max-sm:flex-col gap-4 mb-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-white p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        </div>

        <select
          className="bg-white border border-gray-300 p-3 rounded-lg outline-none"
          onChange={(e) => setFilterRole(e.target.value)}
          value={filterRole}
        >
          <option value="">All Roles</option>
          <option value="Job Seeker">Job Seeker</option>
          <option value="Job Publisher">Job Publisher</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-cb-card shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              {/* Removed Actions column header */}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className={`p-3 font-semibold ${user.status === "Active" ? "text-green-600" : user.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                  {user.status}
                </td>
                {/* Removed actions column */}
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <p className="text-center p-4 text-gray-500">No users found</p>
        )}
      </div>
    </section>
  );
};

export default ManageUsers;
