import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ category, title }) => {
  return (
    <div
      className="
      group
      border-b
      border-gray-300
      py-8
      flex
      justify-between
      items-center
      transition-all
      duration-300
      hover:px-4
      hover:bg-white
      hover:rounded-2xl
      "
    >
      <div>
      
        

        <h3 className="text-2xl md:text-4xl font-light">
         <text class="text-gray-500 pr-2 rounded-full bg-gray-200 mr-4   text-sm md:text-base">
          {category}
         </text>
         {title}
        </h3>
      </div>

      <FaArrowRight
        className="
        text-xl
        group-hover:translate-x-2
        transition
        duration-300
        "
      />
    </div>
  );
};

export default ServiceCard;