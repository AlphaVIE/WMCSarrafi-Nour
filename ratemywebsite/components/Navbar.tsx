import React from "react";
import Image from "next/image";
import Logo from "@/assets/world_icon.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-background h-24 flex flex-row items-center justify-between border-b-[0.1px] border-b-gray-300">
      <div className="w-[15%] flex flex-row justify-center items-center">
        <Image src={Logo} width={45} height={45} alt="Website logo" />
        <h2 className="text-lg text-text font-stretch-110% font-semibold font-sans">
          Rate my Website
        </h2>
      </div>
      <div className="flex flex-row justify-end w-[75%]">
        <ul className="flex flex-row gap-x-6 font-light text-text items-center">
          <Link className="cursor-pointer" href="">
            How to
          </Link>
          <Link className="ml-6 cursor-pointer" href="">
            About
          </Link>
          <button className="py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer">
            Login
          </button>
          <button className="py-2 px-4 bg-primary text-background text-md font-semibold drop-shadow-md rounded-md transition-colors duration-200 cursor-pointer hover:bg-secondary hover:text-text">
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
