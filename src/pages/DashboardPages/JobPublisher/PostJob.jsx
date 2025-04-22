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

  // generate html email content
  const generateEmailContent = (formData) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Job Alert: ${formData.title}</title>
          <style>
            @media only screen and (max-width: 600px) {
              .container { width: 100% !important; }
              .button { padding: 10px 20px !important; font-size: 14px !important; }
            }
          </style>
        </head>
        <body style="font-family: Arial, Helvetica, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            <!-- Header -->
            <tr>
              <td style="padding: 20px; text-align: center; background-color: #007bff; border-radius: 8px 8px 0 0;">
                <a href="https://cakribakri.com" style="text-decoration: none;">
                  <img
                    src="https://i.ibb.co/s9TkMXm8/CB-logo.png"
                    alt="Cakribakri Logo"
                    style="max-width: 100px; height: auto;"
                  />
                </a>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding: 30px; text-align: left;">
                <h3 style="font-size: 24px; color: #333333; margin: 0 0 20px; font-weight: 600;">
                  New Job Alert: ${formData.title}
                </h3>
                <p style="font-size: 16px; color: #666666; margin: 0 0 20px;">
                  A new job opportunity has been posted that matches your interests.
                </p>
                <!-- Company Info -->
                <table role="presentation" style="width: 100%; margin-bottom: 20px;">
                  <tr>
                    <td style="vertical-align: middle; padding-right: 15px;">
                      <img
                        src="${formData.company.logo}"
                        alt="${formData.company.name} Logo"
                        style="max-width: 60px; height: auto; border-radius: 4px;"
                      />
                    </td>
                    <td style="vertical-align: middle;">
                      <p style="font-size: 18px; color: #333333; margin: 0; font-weight: 500;">
                        ${formData.title}
                      </p>
                      <p style="font-size: 16px; color: #666666; margin: 5px 0 0;">
                        ${formData.company.name} • ${formData.employmentType}
                      </p>
                    </td>
                  </tr>
                </table>
                <!-- CTA Button -->
                <div style="text-align: center; margin: 30px 0;">
                  <a
                    href="https://cakribakri.com/all-jobs"
                    style="display: inline-block; padding: 14px 30px; font-size: 16px; color: #ffffff; background-color: #28a745; text-decoration: none; border-radius: 6px; font-weight: 500;"
                    class="button"
                  >
                    View All Jobs
                  </a>
                </div>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding: 20px; text-align: center; background-color: #f1f1f1; border-radius: 0 0 8px 8px; font-size: 14px; color: #888888;">
                <p style="margin: 0;">
                  You received this email because you subscribed to job alerts on <a href="https://cakribakri.com" style="color: #007bff; text-decoration: none;">Cakribakri</a>.
                </p>
                <p style="margin: 10px 0 0;">
                  <a href="https://cakribakri.com/unsubscribe" style="color: #007bff; text-decoration: none;">Unsubscribe</a> • All rights reserved © 2024 Cakribakri
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
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
        // email notification send to jobseeker
        try {
          const res = await axios.post(
            `${import.meta.env.VITE_SERVER_API_URL}/send-email`,
            {
              subject: `New Job Opportunity: ${formData.title}`,
              message: generateEmailContent(formData),
            }
          );
          console.log("Email sent successfully", res.data);
        } catch (error) {
          console.log(error);
        }
        Swal.fire({
          title: "Successfully post the job",
          text: "Please scheack the 'All Jobs' page",
          icon: "success",
        });
        e.target.reset();
        setFormData({
          // Reset form data to initial state
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
              Post Job
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
