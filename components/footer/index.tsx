import { Socials } from "../elements";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <div className="relative bg-primary opacity-90 flex flex-col justify-center items-center w-full h-[250px] mt-24 overflow-clip">
      <div className="flex items-center justify-between w-[90%]">
        <div className="flex flex-col items-start">
          <p className="font-heading text-white text-5xl">Let&#39;s make your next project come to life! </p>
          <p className="text-white text-xl font-light opacity-60 mb-5">Feel free to reach out to me!</p>
        <Socials iconSize="small" />
        </div>
      </div>
      <div className="absolute bottom-2 flex items-center justify-center w-[90%]">
        <p className="text-[8px] sm:text-xs text-gray font-medium">
          Website built with <span className="text-teritary">Next Js</span> and{" "}
          <span className="text-teritary">Tailwind CSS</span>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
