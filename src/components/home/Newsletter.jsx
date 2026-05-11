import React from "react";

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-24 bg-[#f4fbff]">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-blue-600 rounded-[40px] p-14 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-bold mb-6">
            Subscribe Newsletter
          </h2>

          <p className="mb-10 text-blue-100">
            Get healthcare updates and clinic news.
          </p>

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-slate-800 outline-none"
            />

            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full">
              Subscribe
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}