import Head from "next/head";
import Image from "next/image";
import Blogs from "../components/blogs";
import { GlassBackground, HeaderSphere } from "../components/elements";
import Footer from "../components/footer";
import Header from "../components/header";
import Projetcs from "../components/projects";
import Specialities from "../components/specialities";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <>
      <Head>
        <title>Elshaday Yirga Tesfaye</title>
        <meta
          name="description"
          content="A Software Engineer driven by curiosity and dedication with 3 years of proven experience in implementing production ready applications. Eager to leverage my keen eye for detail and design inorder to produce high quality and scalable products."
        />
      </Head>
      <div className="flex flex-col items-center w-full">
        <Header />
        <Specialities />
        <Projetcs />
        <Blogs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
