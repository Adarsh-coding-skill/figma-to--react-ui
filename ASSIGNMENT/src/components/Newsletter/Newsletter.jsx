import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="bg-[#f5f5f3] py-24 px-6">
      <div className="
      max-w-6xl
      mx-auto
      bg-[#111]
      text-white
      rounded-[40px]
      p-10 md:p-20
      text-center
      ">

        <h2 className="text-4xl md:text-6xl font-light">
          Subscribe to our
          Newsletter
        </h2>

        <p className="mt-6 text-gray-300">
          Stay updated with our latest news,
          projects and insights.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
          mt-8
          bg-white
          text-black
          px-8
          py-4
          rounded-full
          font-medium
          "
        >
          Subscribe Now
        </motion.button>

      </div>
    </section>
  );
};

export default Newsletter;