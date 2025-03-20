"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/assets/world_icon.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="bg-background h-[7.5%] w-full flex flex-row items-center justify-center border-b-[0.1px] border-b-gray-300">
      <div className="w-[80%] flex flex-row items-center">
        <div className="w-[20%] flex flex-row justify-center items-center">
          <Image src={Logo} width={45} height={45} alt="Website logo" />
          <h2 className="text-lg text-text font-semibold font-sans">
            Rate my Website
          </h2>
        </div>
        <div className="flex flex-row justify-end w-full">
          <ul className="flex flex-row gap-x-6 font-light text-text items-center mr-18">
            <Link className="cursor-pointer" href="/how-to">
              How to
            </Link>
            <button
              onClick={() => router.push("/login")}
              className="py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/sign-up")}
              className="py-2 px-4 bg-primary text-background text-md font-semibold drop-shadow-md rounded-md transition-colors duration-200 cursor-pointer hover:bg-secondary hover:text-text"
            >
              Sign Up
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
