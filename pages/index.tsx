import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/pro-light-svg-icons";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 relative">
      <Image src="/images/hero.webp" fill alt="" />
      <section className="absolute flex flex-col items-center">
        <h1 className="text-7xl drop-shadow-lg text-gray-800 ">
          We Are Not Robots
        </h1>
        <p className="mt-4 text-gray-700 tracking-widest font-medium">
          A PODCAST ON LIFE, TECH AND EVERYTHING IN BETWEEN
        </p>
      </section>
      <div className="absolute bottom-8 w-12 h-24 rounded-full border-[1px] border-gray-600 flex flex-col gap-4 items-center justify-center">
        <FontAwesomeIcon
          icon={faMicrophone}
          className="text-gray-600 text-xl"
        />

        <FontAwesomeIcon icon={faArrowDown} className="text-gray-600 text-xl" />
      </div>
    </div>
  );
};

export default Home;
