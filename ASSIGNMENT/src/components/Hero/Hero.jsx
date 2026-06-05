import { motion } from "framer-motion";

const people = [
  "./images/p1.jpg",
  "./images/p2.jpg",
  "./images/p3.jpg",
  "./images/p4.jpg",
  "./images/p5.jpg",
  "./images/p6.jpg",
];

const Hero = () => {
  return (
    <section className="bg-[#f5f5f3d3] px-6 pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Story_Script'] leading-none text-[2rem] md:text-[5rem] lg:text-[6rem]"
        >
          The <underline className="underline-offset-0.5 underline decoration-yellow-500">thinkers</underline> and
          <br />
          doers were ch<span className="inline-block bg-pink-200 py-0.5 rounded-full">anging</span>
          <br />
          the <span className="inline-block bg-green-100 px-2 py-0.5 rounded-full">status</span>
          {" "}Quo with
        </motion.h1>

        <p className="mt-8 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          We are a team of strategists, designers,
          communicators and researchers.
          Together we believe progress only happens
          when you refuse to play things safe.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {people.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt=""
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;