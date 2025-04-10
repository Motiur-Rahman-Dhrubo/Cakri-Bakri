import axios from "axios";
import React, { useState } from "react";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaCogs,
  FaListUl,
} from "react-icons/fa";
import Swal from "sweetalert2";

export default function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: {
      name: "",
      logo: "",
      rating: 0,
    },
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

  // Handle change for inputs
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
  const handlePostJob = async (e) => {
    e.preventDefault();
    console.log("Job Post Data:", formData);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_API_URL}/add-job`,
        formData
      );
      if (data.insertedId) {
        Swal.fire({
          title: "Successfully post the job",
          text: "Please scheack the 'All Jobs' page",
          icon: "success",
        });
        e.target.reset();
        setFormData({ // Reset form data to initial state
          title: "",
          company: {
            name: "",
            logo: "",
            rating: 0,
          },
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
      }
    } catch (err) {
      console.log("Job adding ERROR-->", err);
    }
  };

  return (
    <>
      <div className="m-2 md:m-10 bg-cb-card px-4 py-8 rounded-lg">
        <h1 className="text-3xl md:text-5xl text-cb-secondary font-bold mb-2 text-center">
          Post a New Job
        </h1>
        <div className="divider mb-0"></div>

        <form
          onSubmit={handlePostJob}
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
            <small className="text-gray-500">
              Separate skills with commas
            </small>
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
              Post Job
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

