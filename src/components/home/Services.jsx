import React from "react";
import { motion } from "framer-motion";

import {
  FaTooth,
  FaLungs,
  FaBrain,
  FaUserNurse,
} from "react-icons/fa";

const services = [
  {
    title: "Dental Care",
    icon: <FaTooth />,
  },
  {
    title: "Pulmonary",
    icon: <FaLungs />,
    active: true,
  },
  {
    title: "Neurological",
    icon: <FaBrain />,
  },
  {
    title: "Pediatrics",
    icon: <FaUserNurse />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f4fbff]">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >

        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          Our Services
        </h2>

        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          We provide professional healthcare services for all patients.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-[30px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer
              ${
                service.active
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >

              <div className="text-4xl flex justify-center mb-5">
                {service.icon}
              </div>

              <h3 className="font-semibold">
                {service.title}
              </h3>

            </div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}