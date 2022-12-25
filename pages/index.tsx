import Image from "next/image";
import { GlassBackground, HeaderSphere } from "../components/elements";
import Header from "../components/header";
import Specialities from "../components/specialities";


interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
   <div className="flex flex-col items-center w-full">
    <Header />
    <Specialities />
   </div>
  );
};

export default Home;
