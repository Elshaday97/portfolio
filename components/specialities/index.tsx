import JSIcon from "../../public/icons/js.svg";
import TSIcon from "../../public/icons/ts.svg";
import ReactIcon from "../../public/icons/react.svg";
import NextJSIcon from "../../public/icons/next.svg";
import ReduxIcon from "../../public/icons/redux.svg";
import NodeIcon from "../../public/icons/node.svg";
import MongoIcon from "../../public/icons/mongo.svg";
import DockerIcon from "../../public/icons/docker.svg";
import NextIcon from "../../public/icons/arrow.svg";
import Image from "next/image";

 
const Specialities = () => {
    return ( <div className="flex justify-center bg-primary h-52 sm:h-64 md:h-60 lg:h-44 w-full mt-24 mb-24">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between w-[90%]">
           <div className="flex flex-col items-center lg:items-start">
            <h1 className="uppercase text-white text-5xl sm:text-6xl font-heading">Specialities</h1>
            <p className="text-white opacity-60 text-xl sm:text-2xl font-light text-center lg:text-start">Technologies I use on a daily basis.</p>
            </div>
            <div className="flex items-center justify-between w-full lg:w-[60%] overflow-x-auto mt-3 md:mt-4 lg:mt-0">
            {[JSIcon, TSIcon, ReactIcon, NextJSIcon, ReduxIcon, NodeIcon, MongoIcon, DockerIcon, NextIcon].map((item, index) => <Image className='mr-4 sm:mr-5 md:mr-4 m-h-[200px]' alt='tech' key={index} src={item} />)}

                </div>
        </div>
    </div> );
}
 
export default Specialities;