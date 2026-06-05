import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="bg-[#f5f5f3] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-light mb-16"
        >
          What our customer
          <br />
          says About Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="
          bg-white
          rounded-[40px]
          p-8 md:p-12
          shadow-lg
          relative
          "
        >
          <div className="flex gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>

          <p className="text-lg md:text-2xl leading-relaxed text-gray-700">
            Elementum helped us rethink our digital
            experience and create stronger engagement
            with our audience. The process was smooth,
            strategic and delivered measurable results.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <img
              src="/images/client.jpg"
              alt="client"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h4 className="font-semibold">
                David Wilson
              </h4>

              <p className="text-gray-500 text-sm">
                Product Manager
              </p>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="
          absolute
          -top-10
          -right-10
          w-32
          h-32
          bg-purple-300
          rounded-full
          blur-2xl
          opacity-40
          " />
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;