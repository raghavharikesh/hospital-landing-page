import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getReviews } from "../../services/api";

export default function Reviews() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const data = await getReviews();
      setReviews(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-24 bg-white">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            What Our Customers Say
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.slice(0, 6).map((review, index) => (
            <div
              key={index}
              className="bg-[#f8fbff] p-8 rounded-[30px] shadow-xl hover:shadow-2xl transition-all duration-300"
            >

              <p className="text-gray-600 leading-relaxed mb-8">
                {review.Reviews}
              </p>

              <div>

                <h3 className="font-bold text-slate-800">
                  {review.Name}
                </h3>

                <p className="text-sm text-gray-500">
                  {review.Company}
                </p>

              </div>

            </div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}