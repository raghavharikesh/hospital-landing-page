import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md py-6 shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600">
          MediCare
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

          <li className="hover:text-blue-600 cursor-pointer">
            Home
          </li>

          <li className="hover:text-blue-600 cursor-pointer">
            About
          </li>

          <li className="hover:text-blue-600 cursor-pointer">
            Services
          </li>

          <li className="hover:text-blue-600 cursor-pointer">
            Contact
          </li>

        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-3 rounded-full">
          Appointment
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-blue-600"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pt-4 pb-8 shadow-lg">

          <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

            <li>
              <a href="#home" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-blue-600 transition">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-blue-600 transition">
                Services
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>

          </ul>

          <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-full">
            Appointment
          </button>

        </div>
      )}

    </nav>
  );
}