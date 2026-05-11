import React from "react";
import { motion } from "framer-motion";
import heroDoctor from "../../images/hero-doctor.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#f8fbff] py-20 overflow-hidden">

      {/* Background Blur Circle */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-600 font-semibold mb-5">
            Welcome to Medical Clinic
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
            Best Specialists
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
            We provide the best healthcare services with professional
            doctors and modern medical technology for all patients.
          </p>

          <div className="flex flex-wrap gap-5">

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105">
              Make Appointment
            </button>

            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 transition px-8 py-4 rounded-full font-semibold">
              Learn More
            </button>

          </div>

        </motion.div>

        {/* RIGHT IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* Main Card */}
          <div className="w-full h-[550px] rounded-[40px] bg-gradient-to-b from-blue-100 to-blue-50 shadow-2xl relative overflow-hidden">

            {/* Placeholder Doctor Area */}
            <div className="absolute inset-0 p-10 flex items-center justify-center">

              <img
                src={heroDoctor}
                alt="Doctor"
                className="w-full h-full object-cover rounded-[40px]"
              />

            </div>

          </div>

          {/* Floating Card */}
          <div className="absolute bottom-16 left-[-40px] bg-white p-5 rounded-3xl shadow-2xl">

            <h3 className="font-bold text-slate-800">
              24/7 Service
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Emergency support
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}