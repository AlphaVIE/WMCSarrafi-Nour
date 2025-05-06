"use client";

import React from "react";
import Navbar from "@/components/Navbar";

const SignUp = () => {
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [pwVerified, setPwVerified] = React.useState<string>("");

  const handleSignup = async () => {
    const response = await fetch("/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        pwCheck: pwVerified,
      }),
    });
    const data = response.json();
    console.log(data);
  };

  return (
    <div className={`w-full h-screen border-2 overflow-y-hidden`}>
      <Navbar />
      <div className="h-[92.5%] flex flex-row justify-center items-center">
        <div className="w-[30%] h-[70%] shadow-2xl border-[0.5px] border-gray-300 rounded-xl">
          <div>
            <div className="w-full">
              <h3 className="mt-6 text-xl font-mono text-left ml-6">
                Got a website? <br /> Let strangers tear it apart in the most
                constructive way possible!
              </h3>
            </div>
            <div className="w-full flex flex-row justify-center">
              <div className="mt-4 font-light text-sm flex flex-col w-[80%]">
                <label htmlFor="username" className="mb-3">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="w-[100%] px-4 py-2 bg-gray-200 rounded-md"
                  onChange={(event) => setUsername(event.target.value)}
                />
                <label htmlFor="email" className="mb-3 mt-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-[100%] px-4 py-2 bg-gray-200 rounded-md"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="password" className="mb-3 mt-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-[100%] px-4 py-2 bg-gray-200 rounded-md"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <label htmlFor="confPassword" className="mb-3 mt-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confPassword"
                  id="confPassword"
                  className="w-[100%] px-4 py-2 bg-gray-200 rounded-md"
                  onChange={(event) => setPwVerified(event.target.value)}
                />
                <button
                  type="submit"
                  className="mt-4 bg-primary px-2 py-2 w-full text-white text-lg rounded-lg"
                  onClick={handleSignup}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
