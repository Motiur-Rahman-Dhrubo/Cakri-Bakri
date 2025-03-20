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
import PostJob from "./pages/DashboardPages/JobPublisher/PostJob";
import PublisherOverview from "./pages/DashboardPages/JobPublisher/PublisherOverview";
import ManageApplications from "./pages/DashboardPages/JobPublisher/ManageApplications";
import ManageJobs from "./pages/DashboardPages/JobPublisher/ManageJobs";
import UpdateJob from "./pages/DashboardPages/JobPublisher/UpdateJob";
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
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/overview" element={<DashboardOverview />} />
          <Route path="/dashboard/manage-users" element={<ManageUsers />} />


          {/* job publisher routes */}
          <Route path="/dashboard/publisher-overview" element={<PublisherOverview />} />
          <Route path="/dashboard/manage-jobs" element={<ManageJobs />} />
          <Route path="/dashboard/update-job/:id" element={<UpdateJob />} />
          <Route path="/dashboard/manage-applications" element={<ManageApplications />} />
          <Route path="/dashboard/post-job" element={<PostJob />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </AuthProvider>
);
