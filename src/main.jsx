import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import MainLayout from "./layout/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import AllJobs from "./pages/AllJobs/AllJobs";
import AboutUs from "./pages/AboutUs/AboutUs";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="login" element={<Login></Login>} />
          <Route path="register" element={<Register></Register>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
