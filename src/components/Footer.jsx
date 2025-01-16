import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 py-6">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/about-us"><a className="link link-hover">About us</a></Link>
          <Link to="/about-our-services"><a className="link link-hover">Our Services</a></Link>
          <Link to="/contact-us"><a className="link link-hover">Contact Us</a></Link>
          <a className="link link-hover" href="https://maps.app.goo.gl/QuxtbXMwjyccWyRD6">Location</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12.57 1.15c.32-.02.65 0 .98.02v4.94h2.95c.11.87.4 1.66.83 2.35.43.68 1.03 1.27 1.79 1.76.76.48 1.63.81 2.6.98v3.09a8.28 8.28 0 0 1-4.19-1.15 8.07 8.07 0 0 1-2.17-2.03v6.97a6.84 6.84 0 0 1-9.1-2.72 6.86 6.86 0 0 1-.9-3.42 6.89 6.89 0 0 1 .3-2.04h3.1a3.69 3.69 0 0 0 .06.87c.14.57.4 1.09.79 1.54.38.45.86.79 1.43 1.02.57.23 1.17.35 1.81.35a3.68 3.68 0 0 0 1.8-.44c.56-.28 1.06-.7 1.48-1.24V1.14z"></path>
              </svg>
            </a>

            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Putsoa Global Enterprise Pty Ltd
          </p>
          <a
            href="https://github.com/Lehlohonolo-Saohatse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Ruth3r4rd1um104
          </a>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
