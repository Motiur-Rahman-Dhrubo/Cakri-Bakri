import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router';

const FavoriteJobs = () => {

     const { user } = useContext(AuthContext);
      // console.log(user)
    
      // use tanstak query for data fatching
    
      const {
        isPending,
        error,
        data: favoriteJobs = [],
      } = useQuery({
        queryKey: [`applied-jobs?email=${user?.email}`],
        queryFn: async () => {
          const { data } = await axios.get(
            `http://localhost:5000/favorite-jobs?email=${user?.email}`
          );
          return data;
        },
      });
    
      if (isPending) return "Loading...";
    
      if (error) return "An error has occurred: " + error.message;
      
    return (
        <div className="w-11/12 mx-auto">
        <div className="py-4">
            <h1 className="font-bold text-4xl text-center mx-auto">My Favorite Jobs : {favoriteJobs?.length}</h1>
        </div>
      <section>
        {/* search and filter section */}
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between bg-cb-card p-4 rounded-2xl shadow-lg">
          <div className="relative w-full ">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full bg-white p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cb-primary outline-0"
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="relative w-full md:w-1/3">
            <select className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cb-primary outline-0">
              <option value="">All Categories</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="fullstack">Full Stack Development</option>
              <option value="uiux">UI/UX Design</option>
              <option value="devops">DevOps</option>
              <option value="qa">Quality Assurance</option>
            </select>
          </div>
          <button className="btn bg-cb-primary text-white px-6 py-4 rounded-lg">
            Filter
          </button>
        </div>
      </section>

      {/* applied jobs data table section */}
      <section>
        <div>
          {favoriteJobs?.length == 0 ? (
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
                    <th>Company Name</th>
                    <th>Job Title</th>
                    <th>Job Type</th>
                    <th>Salay</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {favoriteJobs?.map((data) => (
                    <tr>
                      <td>
                        <h1 className="font-bold ">{data.companyName}</h1>
                      </td>
                      <td>{data?.jobTitle}</td>
                      <td>{data?.employmentType}</td>
                      <td>{data?.salary}</td>
                      <th>
                        <div className="flex">
                          <button
                            
                            className="btn btn-ghost btn-xs"
                          >
                            Remove from Favorite
                          </button>
                          <NavLink to={`/job-details/${data._id}`}>
                            <button className="btn btn-ghost btn-xs ml-2 ">
                              Details
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
    );
};

export default FavoriteJobs;