"use client";

import React from "react";
import Navbar from "@/components/Navbar";

const SignUp = () => {
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [pwVerified, setPwVerified] = React.useState<string>("");

  return (
    <div className={`w-full h-screen border-2 overflow-y-hidden`}>
      <Navbar />
      <div className="h-[92.5%] flex flex-row justify-center items-center">
        <div className="w-[30%] h-[60%] shadow-2xl border-[0.5px] border-gray-300 rounded-xl">
          <div className="w-full">
            <h3 className="mt-10 text-3xl font-mono leading-12 text-left ml-10">
              Got a website? <br /> Let strangers tear it apart in the most
              constructive way possible!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
