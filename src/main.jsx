import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import {
  useQueryClient,
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
            <Route path={`job-details/:id`} element={<JobDetails />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="login" element={<Login></Login>} />
            <Route path="register" element={<Register></Register>} />
            <Route path="/profileUpdate" element={<ProfileUpdate/>} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/overview" element={<DashboardOverview />} />
            <Route path="/dashboard/manage-users" element={<ManageUsers />} />
            <Route path="/dashboard/myprofile" element={<Myprofile/>} />
            <Route path="/dashboard/myprofile/profileUpdate" element={<ProfileUpdate/>} />
            <Route path="/dashboard/applied-Jobs" element={<AppliedJobs />} />
            <Route path="/dashboard/favorite-Jobs" element={<FavoriteJobs />} />
          </Route>
          
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </AuthProvider>
);
