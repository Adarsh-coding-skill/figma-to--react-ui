import { motion } from "framer-motion";
import ServiceCard from "./ServicesCard";
import { services } from "../../data/services";
import { BiUnderline } from "react-icons/bi";

const Services = () => {
  return (
    <section className="bg-[#f5f5f3] font-[Molle] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-light mb-16"
        >
          What we <span className="inline-block bg-green-200 py-0.5 rounded-full">can</span> 
          <br />
          <underline className="underline-offset-0.5 underline decoration-yellow-500">offer</underline> you!
        </motion.h2>

        <div className="space-y-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              category={service.category}
              title={service.title}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;