import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import MainLayout from "./layout/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import AllJobs from "./pages/AllJobs/AllJobs";
import AboutUs from "./pages/AboutUs/AboutUs";
import JobDetails from "./pages/SingleJobDetails/JobDetails";
import Dashboard from "./layout/DashboardLayout/Dashboard";
import DashboardOverview from "./pages/DashboardPages/Overview";
import ManageUsers from "./pages/DashboardPages/ManageUser";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import FavoriteJobs from "./pages/FavoriteJobs/FavoriteJobs";
import Myprofile from "./pages/Myprofile/Myprofile";
import ProfileUpdate from "./pages/Myprofile/ProfileUpdate";
import PostJob from "./pages/DashboardPages/JobPublisher/PostJob";
import ManageApplications from "./pages/DashboardPages/JobPublisher/ManageApplications";
import ManageJobs from "./pages/DashboardPages/JobPublisher/ManageJobs";
import UpdateJob from "./pages/DashboardPages/JobPublisher/UpdateJob";
import EmployeeApplications from "./pages/DashboardPages/JobPublisher/EmployeeApplications";
import LiveChats from "./pages/DashboardPages/JobPublisher/LiveChats";
import CategorisedJobs from "./pages/CategorisedJobs/CategorisedJobs";

const root = document.getElementById("root");
const queryClient = new QueryClient();

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="job-details/:id" element={<JobDetails />} />
            <Route path="jobs-category/:category" element={<CategorisedJobs />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profileUpdate" element={<ProfileUpdate />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />}>
            {/* Default redirect when accessing /dashboard */}
            <Route index element={<Myprofile />} />

            {/* Admin Dashboard Pages */}
            <Route path="overview" element={<DashboardOverview />} />
            <Route path="manage-users" element={<ManageUsers />} />

            {/* Employer Dashboard Pages */}
            <Route path="myprofile" element={<Myprofile />} />
            <Route path="myprofile/profileUpdate" element={<ProfileUpdate />} />
            <Route path="applied-Jobs" element={<AppliedJobs />} />
            <Route path="favorite-Jobs" element={<FavoriteJobs />} />

            {/* Job Publisher Routes */}
            <Route path="manage-jobs" element={<ManageJobs />} />
            <Route path="update-job/:id" element={<UpdateJob />} />
            <Route path="manage-applications" element={<ManageApplications />} />
            <Route path="post-job" element={<PostJob />} />
            <Route path="employee-applications" element={<EmployeeApplications />} />
            <Route path="live-chats/:id" element={<LiveChats />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </AuthProvider>
);
