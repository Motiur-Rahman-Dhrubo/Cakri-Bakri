import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaCogs,
  FaListUl,
} from "react-icons/fa";
import Swal from "sweetalert2";

export default function UpdateJob() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch job data
  const { data: job = {}, isLoading } = useQuery({
    queryKey: ["jobDetails", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/job-details/${id}`
      );
      return data;
    },
  });

  // Initialize formData with empty defaults
  const [formData, setFormData] = useState({
    title: "",
    company: { name: "", logo: "", rating: 0 },
    category: "",
    location: "",
    employmentType: "",
    salary: "",
    postedDate: "",
    expiryDate: "",
    skillsRequired: [],
    responsibilities: [],
    qualifications: [],
    experienceLevel: "",
    perks: [],
    jobLink: "",
  });

  // Populate formData with fetched job data when available
  useEffect(() => {
    if (job && Object.keys(job).length > 0) {
      setFormData({
        title: job.title || "",
        company: {
          name: job.company?.name || "",
          logo: job.company?.logo || "",
          rating: job.company?.rating || 0,
        },
        location: job.location || "",
        employmentType: job.employmentType || "",
        salary: job.salary || "",
        postedDate: job.postedDate ? job.postedDate.split("T")[0] : "", // Format for input[type="date"]
        expiryDate: job.expiryDate ? job.expiryDate.split("T")[0] : "", // Format for input[type="date"]
        skillsRequired: Array.isArray(job.skillsRequired)
          ? job.skillsRequired
          : [],
        responsibilities: Array.isArray(job.responsibilities)
          ? job.responsibilities
          : [],
        qualifications: Array.isArray(job.qualifications)
          ? job.qualifications
          : [],
        experienceLevel: job.experienceLevel || "",
        perks: Array.isArray(job.perks) ? job.perks : [],
        jobLink: job.jobLink || "",
      });
    }
  }, [job]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "companyName") {
      setFormData({
        ...formData,
        company: { ...formData.company, name: value },
      });
    } else if (name === "companyLogo") {
      setFormData({
        ...formData,
        company: { ...formData.company, logo: value },
      });
    } else if (name === "skills") {
      setFormData({
        ...formData,
        skillsRequired: value.split(",").map((skill) => skill.trim()),
      });
    } else if (name === "perks") {
      setFormData({
        ...formData,
        perks: value.split(",").map((perk) => perk.trim()),
      });
    } else if (name === "responsibilities") {
      setFormData({
        ...formData,
        responsibilities: value.split("\n").map((resp) => resp.trim()),
      });
    } else if (name === "qualifications") {
      setFormData({
        ...formData,
        qualifications: value.split("\n").map((qual) => qual.trim()),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleUpdateJob = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:5000/update-job/${id}`,
        formData
      );
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Job Updated Successfully",
          text: "The job details have been updated.",
          icon: "success",
        });
        navigate("/all-jobs");
      } else {
        Swal.fire({
          title: "No Changes Detected",
          text: "No updates were made to the job.",
          icon: "info",
        });
      }
    } catch (err) {
      console.error("Job update error:", err);
      Swal.fire({
        title: "Error",
        text: "Failed to update the job. Please try again.",
        icon: "error",
      });
    }
  };

  if (isLoading) {
    return <div className="min-h-screen">Loading job details...</div>;
  }

  return (
    <div className="m-2 md:m-10 bg-cb-card px-4 py-8 rounded-lg">
      <h1 className="text-3xl md:text-5xl text-cb-secondary font-bold mb-2 text-center">
        Update Job
      </h1>
      <div className="divider mb-0"></div>

      <form
        onSubmit={handleUpdateJob}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-4"
      >
        {/* Job Title */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., UI/UX Designer"
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
            required
          />
        </div>

        {/* Company Name */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1 md:flex items-center">
            <FaBuilding className="mr-2" /> Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.company.name}
            onChange={handleChange}
            required
            placeholder="e.g., Creative Minds"
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          />
        </div>

        {/* Company Logo URL */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1">
            Company Logo URL
          </label>
          <input
            type="url"
            name="companyLogo"
            value={formData.company.logo}
            onChange={handleChange}
            required
            placeholder="https://example.com/logo.jpg"
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          />
        </div>

        {/* category */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1">
            Job Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          >
            <option value="">Select Category</option>
            <option value="Software Development">Software Development</option>
            <option value="Design & Creative">Design & Creative</option>
            <option value="Marketing & Sales">Marketing & Sales</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Engineering">Engineering</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Advertising & Media">Advertising & Media</option>
            <option value="Transportation">Transportation</option>
            <option value="Security Services">Security Services</option>
          </select>
        </div>

        {/* Location */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1 md:flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="e.g., Berlin, Germany"
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          />
        </div>

        {/* Employment Type */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1">
            Employment Type
          </label>
          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          >
            <option value="">Select Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Salary */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1 md:flex items-center">
            <FaMoneyBillWave className="mr-2" /> Salary Range
          </label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="e.g., €50,000 - €70,000 per year"
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          />
        </div>

        {/* Skills Required */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1 md:flex items-center">
            <FaCogs className="mr-2" /> Skills Required
          </label>
          <input
            type="text"
            name="skills"
            value={formData.skillsRequired.join(", ")}
            onChange={handleChange}
            placeholder="e.g., Figma, Adobe XD, User Research"
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          />
          <small className="text-gray-500">Separate skills with commas</small>
        </div>

        {/* Perks */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1">
            Perks
          </label>
          <input
            type="text"
            name="perks"
            value={formData.perks.join(", ")}
            onChange={handleChange}
            placeholder="e.g., Flexible Hours, Work From Home"
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          />
          <small className="text-gray-500">Separate perks with commas</small>
        </div>

        {/* Experience Level */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1">
            Experience Level
          </label>
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          >
            <option value="">Select Level</option>
            <option value="Entry (0-2 years)">Entry (0-2 years)</option>
            <option value="Mid (2-5 years)">Mid (2-5 years)</option>
            <option value="Senior (5+ years)">Senior (5+ years)</option>
          </select>
        </div>

        {/* Responsibilities */}
        <div className="col-span-1 md:col-span-3">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1 md:flex items-center">
            <FaListUl className="mr-2" /> Responsibilities
          </label>
          <textarea
            name="responsibilities"
            value={formData.responsibilities.join("\n")}
            onChange={handleChange}
            placeholder="Enter responsibilities, one per line..."
            rows="4"
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          />
        </div>

        {/* Qualifications */}
        <div className="col-span-1 md:col-span-3">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1 md:flex items-center">
            <FaListUl className="mr-2" /> Qualifications
          </label>
          <textarea
            name="qualifications"
            value={formData.qualifications.join("\n")}
            onChange={handleChange}
            placeholder="Enter qualifications, one per line..."
            rows="4"
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          />
        </div>

        {/* Posted Date */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1 md:flex items-center">
            <FaCalendarAlt className="mr-2" /> Posted Date
          </label>
          <input
            type="date"
            name="postedDate"
            value={formData.postedDate}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          />
        </div>

        {/* Expiry Date */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1 md:flex items-center">
            <FaCalendarAlt className="mr-2" /> Expiry Date
          </label>
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          />
        </div>

        {/* Job Link */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-cb-secondary/80 mb-1">
            Job Link
          </label>
          <input
            type="text"
            name="jobLink"
            value={formData.jobLink}
            onChange={handleChange}
            placeholder="Enter Job Link"
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cb-primary"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <button
            type="submit"
            className="w-fit bg-cb-primary text-white px-6 py-3 rounded-lg hover:bg-cb-secondary transition duration-300"
          >
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
}
