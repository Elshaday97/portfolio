import Image from "next/image";
import { GlassBackground, HeaderSphere } from "../elements";
import SubjectImg from "../../public/icons/subject.svg";
import Subject2Img from "../../public/icons/subject2.svg";
import ArrowIcon from "../../public/icons/arrow-right.svg";


import NavBar from "./Nav";
import { socials } from "./constants";

const Header = () => {
  return (
    <div className="relative flex flex-col items-center min-h-[100vh] w-full overflow-clip">
      <HeaderSphere />
      <GlassBackground height="min-h-[100vh]">
        <NavBar />
        <div className="flex flex-col h-[100%] w-full items-center justify-center mt-14 mb-16 sm:mt-20 md:mt-40 sm:mb-20">
          <div className="flex flex-col md:flex-row md:items-end items-center justify-center w-[80%] sm:w-[80%] md:w-[90%] lg:w-[80%]">
            <Image
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"
              alt="Subject"
              src={SubjectImg}
            />
            <div className="flex flex-col items-center md:items-start md:ml-14 lg:ml-14 mt-3 sm:mt-3 md:mt-0 w-auto  ">
              <h1 className=" text-white font-semibold text-md sm:text-lg uppercase">
                Hello, I&#39;m Elshaday
              </h1>
              <h1 className="font-heading text-6xl sm:text-7xl xl:text-8xl text-center md:text-left hollow">WEB DEVELOPER,</h1>
              <h1 className="font-heading text-4xl sm:text-6xl text-center md:text-left text-white">
                UI/UX Designer, Creative Writer
              </h1>

              <p className="text-center text-xl sm:text-2xl md:text-left text-black font-extralight mt-3 leading-6">
                A multi-versed software developer excited to embark on new projects!
              </p>

              {/* Social Media  */}
              <div className="flex justify-between items-center mt-10 w-auto">
                {socials.map((item, index) => (
                  <div
                    className="flex items-center justify-center h-12 w-12 rounded-[50%] bg-primary mr-3"
                    key={index}
                  >
                    {" "}
                    <Image alt="socials" src={item.img} />{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* About me */}
          <div className="flex items-center justify-center md:justify-between lg:justify-center lg:items-end  w-75% sm:w-[80%] md:w-[85%] mt-20 md:mt-24 lg:mt-32">
            <div className="flex flex-col items-start w-[85%] sm:w-full md:w-[60%] md:mr-5 mr-6">
              <h1 className="uppercase text-gray text-5xl sm:text-6xl font-heading">
                About Me
              </h1>
              <p className="text:xl sm:text-2xl text-black font-light">
                A little bit on my background
              </p>

              <p className="text-black font-light text-md text-left mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sed pharetra lectus. Integer malesuada odio nec eros
                consequat bibendum. Sed dictum eros a molestie posuere. In
                maximus augue sed ultricies elementum. Duis pellentesque a sem
                ac fringilla. Cras a orci a erat ullamcorper rutrum. Duis vitae
                suscipit massa. Donec vel bibendum nunc.
              </p>

              <button className="flex items-center justify-center bg-primary rounded-sm h-10 w-32 font-heading uppercase text-white text-xl mt-5">
               <Image className='h-6 w-6' alt='arrow' src={ArrowIcon} />
                Resume
              </button>
            </div>
            <div className="hidden md:flex items-end md:-mb-36 lg:-mb-16 md:w-[250px] ">
                <Image alt='Subj' src={Subject2Img} />
            </div>
          </div>
        </div>
      </GlassBackground>
    </div>
  );
};

export default Header;
