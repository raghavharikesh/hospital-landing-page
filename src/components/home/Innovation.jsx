import React from "react";
import { motion } from "framer-motion";
import {
  FaUserMd,
  FaAmbulance,
  FaClinicMedical,
} from "react-icons/fa";

export default function Innovation() {
  return (
    <section id="innovation" className="py-24 bg-white overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center"
      >

        {/* LEFT */}
        <div>

          <p className="text-blue-600 font-semibold mb-4">
            Clinic With Innovation
          </p>

          <h2 className="text-5xl font-bold text-slate-800 leading-tight mb-6">
            We Care About Your Health
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Our medical clinic provides advanced healthcare services with
            modern technology and experienced doctors.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full shadow-xl">
            Learn More
          </button>

        </div>

        {/* RIGHT */}
        <div className="relative h-[500px]">

  {/* Qualified Doctors */}
        <div className="absolute top-0 left-10 bg-white shadow-2xl rounded-[30px] p-6 w-[220px] hover:-translate-y-2 transition-all duration-300">

          <div className="w-16 h-16 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-3xl text-blue-600">
            <FaUserMd />
          </div>

          <h3 className="font-bold text-slate-800 mb-2">
            Qualified Doctors
          </h3>

          <p className="text-gray-500 text-sm">
            Professional medical experts
          </p>

        </div>

        {/* Emergency */}
        <div className="absolute top-40 right-0 bg-white shadow-2xl rounded-[30px] p-6 w-[240px] hover:-translate-y-2 transition-all duration-300">

          <div className="w-16 h-16 bg-orange-100 rounded-full mb-4 flex items-center justify-center text-3xl text-orange-500">
            <FaAmbulance />
          </div>

          <h3 className="font-bold text-slate-800 mb-2">
            Emergency Care
          </h3>

          <p className="text-gray-500 text-sm">
            Fast emergency response anytime
          </p>

        </div>

        {/* Service */}
        <div className="absolute bottom-0 left-24 bg-white shadow-2xl rounded-[30px] p-6 w-[240px] hover:-translate-y-2 transition-all duration-300">

          <div className="w-16 h-16 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-3xl text-blue-600">
            <FaClinicMedical />
          </div>

          <h3 className="font-bold text-slate-800 mb-2">
            24 Hours Service
          </h3>

          <p className="text-gray-500 text-sm">
            Medical support every day
          </p>

        </div>

      </div>

      </motion.div>

    </section>
  );
}