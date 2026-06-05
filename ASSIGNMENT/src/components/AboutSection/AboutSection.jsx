import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#f5f5f3] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[Sirin_Stencil, sans-serif] font-normal text-4xl md:text-6xl font-style: italic leading-tight">
              Tomorrow should
              <br />
              be better than
              <span className="bg-green-200 px-3 rounded-full ml-2">
                today
              </span>
            </h2>

            <p className="mt-8 text-gray-600 max-w-md">
              We are a team of strategists,
              designers, communicators and
              researchers. Together we believe
              progress only happens when you
              refuse to play things safe.
            </p>

            <button className="mt-8 border-b border-black pb-1 hover:opacity-70 transition">
              Read More
            </button>
          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/images/meeting.jpg"
              alt="meeting"
              className="w-[320px] md:w-[500px] rounded-full object-cover shadow-xl"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;