import { motion } from "framer-motion";

const Progress = () => {
  return (
    <section className="bg-[#f5f5f3] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              <div
                className="
                absolute
                w-56
                h-56
                bg-purple-300
                blur-3xl
                opacity-40
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                "
              />

              <img
                src="/images/progress.jpg"
                alt="progress"
                className="w-[320px] md:w-[500px] rounded-full shadow-xl object-cover"
              />

            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[Stick_No_Bills, sans-serif] text-4xl md:text-6xl font-style: italic leading-tight">
              See how we
              <br />
              can help you
              <span className="bg-yellow-300 px-4 rounded-full ml-2">
                progress
              </span>
            </h2>

            <p className="mt-8 text-gray-600 max-w-md">
              Our team creates strategies,
              design systems and digital
              experiences that help brands
              grow faster and communicate
              effectively.
            </p>

            <button className="mt-8 border-b border-black pb-1 hover:opacity-70 transition">
              Read More
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Progress;  