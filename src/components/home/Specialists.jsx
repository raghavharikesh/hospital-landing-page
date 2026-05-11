import React from "react";

import doctor1 from "../../images/doctor1.jpg";
import doctor2 from "../../images/doctor2.jpg";
import doctor3 from "../../images/doctor3.jpg";
import doctor4 from "../../images/doctor4.jpg";

const doctors = [
  {
    name: "Dr. Sophia Williams",
    role: "Neurologist",
    image: doctor1,
  },
  {
    name: "Dr. Emma Johnson",
    role: "Cardiologist",
    image: doctor2,
  },
  {
    name: "Dr. Michael Carter",
    role: "Dentist",
    image: doctor3,
  },
  {
    name: "Dr. Daniel Smith",
    role: "Surgeon",
    image: doctor4,
  },
];

export default function Specialists() {
  return (
    <section id="specialists" className="py-24 bg-[#f4fbff]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            We Have The Best Specialist
          </h2>

          <p className="text-gray-500">
            Professional healthcare experts
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-800">
                  {doctor.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {doctor.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}