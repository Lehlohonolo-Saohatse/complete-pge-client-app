import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Importing icons for email, phone, and WhatsApp

const ContactUs = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-6">
            We're here to help! Reach out to us through the methods below.
          </p>
          <div className="space-y-6">
            {/* Email Section */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-gray-800 font-medium">Email</p>
                <a
                  href="mailto:putsoaglobalenterprise@gmail.com"
                  className="text-gray-600 hover:text-blue-500 transition duration-300"
                >
                  putsoaglobalenterprise@gmail.com
                </a>
              </div>
            </div>
            {/* Phone Section */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-500  rounded-full flex items-center justify-center">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <p className="text-gray-800 font-medium">Phone</p>
                <a
                  href="tel:+27"
                  className="text-gray-600 hover:text-green-500 transition duration-300"
                >
                  082-360-6426
                </a>
              </div>
            </div>
            {/* WhatsApp Section */}
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-green-600 text-green rounded-full flex items-center justify-center">
                <FaWhatsapp size={26} />
              </div>
              <p className="text-gray-800 font-medium ml-2 ">
                <a
                  href="https://wa.me/27823606426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition duration-300"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
