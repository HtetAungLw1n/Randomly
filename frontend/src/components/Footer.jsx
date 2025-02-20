import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-luxRed text-offWhite">
      <div className=" container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* About & Contact */}
        <div>
          <h2 className="text-3xl font-semibold text-white">About Us</h2>
          <p className="mt-2 text-sm">
            Your trusted source for breaking news, in-depth analysis, and
            exclusive reports.
          </p>
          <p className="mt-2 text-sm">Email: htetaunglwin.canon@gmail.com</p>
          <p className="text-sm">Phone: 09264982456</p>
          <div className="mt-3 flex space-x-3">
            {/* Social Media Icons */}

            <a
              href="https://github.com/HtetAungLw1n"
              className="hover:text-luxGold"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/htet-aung-lwin-193707311/"
              className="hover:text-luxGold"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link to={"/"} className="hover:text-white">
                Go to Top
              </Link>
            </li>

            <li>
              <Link to={"/"} className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-sm">
          © {new Date().getFullYear()} This is personal project website. All
          rights of news reserved to original creator.
        </div>
      </div>

      {/* Copyright */}
    </section>
  );
};

export default Footer;
