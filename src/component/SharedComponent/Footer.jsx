import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import logo from "/CB-logo.png";
import { Link } from "react-router";
export default function Footer() {
  return (
    <footer className="w-11/12 mx-auto text-cb-card py-8">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-12 justify-between items-center md:items-start">
          {/* Company Info */}
          <div className="lg:col-span-3 mb-6 md:mb-0 text-center md:text-left">
            <Link to="/">
              <div className="w-28 max-sm:mx-auto">
                <img src={logo} className="w-full rounded-lg" alt="" />
              </div>
            </Link>
            <p className="mt-2">
              Your trusted hiring and communication platform, connecting job
              seekers and recruiters efficiently.
            </p>
          </div>
          <div className="divider bg-cb-white h-[1px] mt-0 mb-4 opacity-50 md:hidden"></div>
          {/* Quick Links */}
          <div className="lg:col-span-6 flex justify-evenly space-x-8">
            <div>
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link to="/jobs" className="hover:underline">
                    Find Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/post-job" className="hover:underline">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Support</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link to="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider bg-cb-white h-[1px] mt-4 mb-0 opacity-50 md:hidden"></div>
          {/* Social Media Links */}
          <div className="lg:col-span-3 mt-6 md:mt-0">
            <h3 className="font-semibold text-lg text-center md:text-left">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a
                href="https://www.facebook.com/"
                className="text-blue-100 transform transition-transform hover:scale-125" // Changed hover style
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.twitter.com/"
                className="text-blue-100 transform transition-transform hover:scale-125" // Changed hover style
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="text-blue-100 transform transition-transform hover:scale-125" // Changed hover style
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.github.com/"
                className="text-blue-100 transform transition-transform hover:scale-125" // Changed hover style
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-white opacity-60 text-sm">
          &copy; {new Date().getFullYear()} Chakri-Bakri. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
