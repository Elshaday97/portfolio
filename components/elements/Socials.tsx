import Image from "next/image";
import { socials } from "../header/constants";
import { ISocialsProps } from "./types";

const Socials = ({ iconSize }: ISocialsProps) => {
  return (
    <div className="flex justify-between items-center  w-auto">
      {socials.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noreferrer">
          <div
            className={`cursor-pointer flex items-center justify-center ${
              iconSize === "small" ? "h-8 w-8 mr-2 sm:mr-3" : "h-12 w-12 mr-3"
            } rounded-[50%] bg-primary hover:-translate-y-1`}
          >
            <Image
              className={`${iconSize === "small" ? "w-6 h-6" : "w-7 h-7"}`}
              alt="socials"
              src={item.img}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
