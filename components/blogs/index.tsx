import { Card } from "../elements";
import NextIcon from "../../public/icons/arrow-colored.svg";
import Image from "next/image";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center mt-24 w-[90%]">
      <h1 className="uppercase text-gray text-5xl sm:text-6xl font-heading">
        Blogs
      </h1>
      <p className="text-center text:xl sm:text-2xl text-black font-light">
        Ideas jotted down on the go...
      </p>

      <div className="flex flex-col items-center justify-center mt-12 md:mt-20 w-full">
        {[1, 1].map((item, index) => (
          <div
            className="w-full sm:w-[85%] md:w-[80%] mb-8 sm:mb-12"
            key={index}
          >
            <Card
              action="View Project"
              description="A project"
              img=""
              link=""
              title="Hempishere"
              variant="horizontal"
            />
          </div>
        ))}
      </div>

      <a href="https://medium.com/@elshaday/" target="_blank" rel="noreferrer">
        <div className="flex items-center justify-center  mt-5">
          <p className="uppercase font-heading text-2xl md:text-3xl text-primary">
            View more blogs
          </p>
          <Image className="w-10 h-10" alt="arrow" src={NextIcon} />
        </div>
      </a>
    </div>
  );
};

export default Blogs;
