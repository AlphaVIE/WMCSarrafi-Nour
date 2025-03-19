import React from "react";
import Image from "next/image";
import Logo from "@/assets/world_icon.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#EC5228] h-24 flex flex-row items-center justify-between">
      <div className="w-[15%] flex flex-row justify-center items-center">
        <Image src={Logo} width={75} height={50} alt="Website logo" />
        <h2 className="text-lg font-stretch-110% font-semibold font-sans">
          Rate my Website
        </h2>
      </div>
      <div className="flex flex-row justify-end w-[75%]">
        <ul className="flex flex-row gap-x-4 font-light text-[#efefef] items-center">
          <Link className="cursor-pointer" href="">
            How to
          </Link>
          <Link className="cursor-pointer" href="">
            About
          </Link>
          <button className="px-6 py-2 bg-[#EFEFEF] text-black rounded-md transition-colors duration-200 cursor-pointer hover:bg-[#EF9651] hover:text-white">
            Login
          </button>
          <button className="px-6 py-2 bg-[#3F7D58] drop-shadow-md rounded-md transition-colors duration-200 cursor-pointer hover:bg-white hover:text-black">
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
