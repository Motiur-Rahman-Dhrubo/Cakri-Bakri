
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../../providers/AuthProvider";

export default function ManageApplications() {

  const {user} = useContext(AuthContext)
  // console.log(user)
 
  // Tanstak quiery for fetaching data form sever

 
  const {
    isPending,
    error,
    data: manageApplications = [],
  } = useQuery({
    queryKey: [`applicant?email=${user?.email}`],
    queryFn: async () => {
      const { data } = await axios.get(
      `http://localhost:5000/applicant?email=${user?.email}`
      );
      // console.log(data)
      return data;
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  // console.log(manageApplications);
  
 
  return (
    <div>
      <div className="mx-auto py-6">
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
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {manageApplications?.map((data ,index) => (
                      <tr key={index}>
                        <td>
                          <h1 className="font-bold ">data not found</h1>
                          {/* {allUsers.find(user=>user?.email === data?.email? user?.name :'data not found')} */}
                        </td>
                        <td>{data?.email?data?.email:'data not found'}</td>
                        <td>{data?.jobTitle?data?.jobTitle:'data not found'}</td>
                        <td>{data?.companyName?data?.companyName:'data not found'}</td>
                        <td>{data?.date?data?.date:'data not found'}</td>
                        <th>
                          <div className="flex">
                            <button className="btn btn-ghost btn-xs">
                              Approve
                            </button>
                            <NavLink to={`/job-details/${data._id}`}>
                              <button className="btn btn-ghost btn-xs ml-2 ">
                              Delete
                              </button>
                            </NavLink>
                            <NavLink to={`/dashboard/live-chats/${data._id}`}>
                            <button className="btn btn-ghost btn-xs ml-2 ">
                              Contact
                              </button>
                            </NavLink>
                          </div>
                        </th>
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

