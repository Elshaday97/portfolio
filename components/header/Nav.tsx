import Image from "next/image";
import MenuIcon from "../../public/icons/menu.svg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center w-[full] mt-6">
      <div className="flex items-center justify-between w-[95%]">
        <p className="font-heading uppercase text-black text-xl">Elshaday.</p>
        <Image alt="menu" className="sm:hidden" src={MenuIcon} />
        <div className="hidden sm:flex items-center justify-between sm:w-3/5 md:3/6 lg:w-2/5">
          {["Specialities", "Projects", "Blogs"].map((item, index) => (
            <p
              className="font-heading uppercase text-white text-xl"
              key={index}
            >
              {item}
            </p>
          ))}
          <button className="bg-primary rounded-sm h-9 w-28 font-heading uppercase text-white text-xl hover:bg-white hover:text-primary">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
