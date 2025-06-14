import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

export default function ManageApplications() {
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);

  const {
    isPending,
    error,
    data: manageApplications = [],
  } = useQuery({
    queryKey: [`manage-applications?email=${user?.email}`],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_API_URL
        }/manage-applications?email=${user?.email}`
      );
      return data;
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(manageApplications);

  return (
    <div className="w-11/12 mx-auto">
      <div className="py-6">
        <h1 className="text-center text-3xl font-bold">
          Total Applications : {manageApplications?.length}
        </h1>
      </div>
      <div>
        <section>
          <div>
            {manageApplications?.length == 0 ? (
              <div className="flex justify-center items-center min-h-screen">
                <h1 className="text-4xl font-bold text-center my-4">
                  No job apply yet
                </h1>
              </div>
            ) : (
              <div className="overflow-x-auto bg-[cb]">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="text-lg font-bold">
                      <th>Applier Name</th>
                      <th>Applier Email</th>
                      <th>Job Title</th>
                      <th>Company Name</th>
                      <th>Apply Date</th>
                      {!isAdmin && <th>Action</th>} {/* Conditionally render Action column */}
                    </tr>
                  </thead>
                  <tbody>
                    {manageApplications?.map((data) => (
                      <tr key={data._id}>
                        <td>
                          <h1 className="font-bold">data not found</h1>
                          {/* {allUsers.find(user=>user?.email === data?.email? user?.name :'data not found')} */}
                        </td>
                        <td>{data?.email ? data?.email : 'data not found'}</td>
                        <td>{data?.jobTitle ? data?.jobTitle : 'data not found'}</td>
                        <td>{data?.companyName ? data?.companyName : 'data not found'}</td>
                        <td>{data?.date ? data?.date : 'data not found'}</td>
                        {!isAdmin && (
                          <td>
                            <div className="flex">
                              <NavLink to={`/dashboard/live-chats/${data._id}`}>
                                <button className="btn btn-ghost btn-xs ml-2 ">
                                  Contact
                                </button>
                              </NavLink>
                            </div>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
