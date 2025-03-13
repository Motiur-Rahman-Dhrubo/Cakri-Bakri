import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-cb-secondary text-cb-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          
          {/* Company Info */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">Cakri-Bakri</h2>
            <p className="mt-2">
              Your trusted hiring and communication platform, connecting job seekers and recruiters efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-8">
            <div>
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="/jobs" className="hover:text-cb-secondary">Find Jobs</a></li>
                <li><a href="/post-job" className="hover:text-cb-secondary">Post a Job</a></li>
                <li><a href="/about" className="hover:text-cb-secondary">About Us</a></li>
                <li><a href="/contact" className="hover:text-cb-secondary">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Support</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="/faq" className="hover:text-blue-100">FAQ</a></li>
                <li><a href="/help" className="hover:text-blue-100">Help Center</a></li>
                <li><a href="/privacy" className="hover:text-blue-100">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-blue-100">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 md:mt-0">
            <h3 className="font-semibold text-lg text-center md:text-left">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="https://www.facebook.com/" className="text-blue-100 hover:text-blue-50"><FaFacebook size={24} /></a>
              <a href="https://www.twitter.com/" className="text-blue-100 hover:text-blue-50"><FaTwitter size={24} /></a>
              <a href="https://www.linkedin.com/" className="text-blue-100 hover:text-blue-50"><FaLinkedin size={24} /></a>
              <a href="https://www.github.com/" className="text-blue-100 hover:text-blue-50"><FaGithub size={24} /></a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-white text-sm">
          &copy; {new Date().getFullYear()} Cakri-Bakri. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
