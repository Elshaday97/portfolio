import { Card } from "../elements";
import NextIcon from "../../public/icons/arrow.svg";
import Image from "next/image";

const Projetcs = () => {
  return (
    <div className="flex flex-col items-center md:items-end mt-24 w-[90%]">
      <h1 className="uppercase text-gray text-5xl sm:text-6xl font-heading">
        Projects
      </h1>
      <p className="text-center md:text-right text:xl sm:text-2xl text-black font-light">
        Team work always results in fruitful products.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between mt-12 md:mt-20 w-full">
        {[1, 1, 1].map((item, index) => (
          <div
            className="w-full sm:w-[85%] md:w-[31%] mb-8 sm:mb-12 md:mb-0"
            key={index}
          >
            <Card
              action="View Project"
              description="A project"
              img=""
              link=""
              title="Hempishere"
              variant="vertical"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center md:justify-start w-full md:mt-5">
        <button className="flex items-center justify-center bg-primary rounded-sm h-12 w-32 font-heading uppercase text-white text-xl mt-5">
          View All
          <Image className="h-6 w-6" alt="arrow" src={NextIcon} />
        </button>
      </div>
    </div>
  );
};

export default Projetcs;
