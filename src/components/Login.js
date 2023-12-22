import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleSignIn = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div>
      <Header />
      <div>
        <div className="w-full h-full bg-black absolute opacity-40"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login background image"
        />
      </div>
      <div className="w-[30%]  absolute top-0 h-screen left-1/2 transform -translate-x-1/2 flex justify-start items-center z-10 pt-10">
        <form className="bg-black bg-opacity-80 rounded-md text-white flex flex-col justify-center items-start w-full px-16 pt-16 pb-44 ">
          <h1 className="font-medium text-3xl pb-6">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 my-3 w-full rounded-md bg-gray-700"
            />
          )}
          <input
            type="text"
            placeholder="Email address"
            className="p-3 my-3 w-full rounded-md bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full rounded-md bg-gray-700"
          />
          <button className="p-4 mt-10 mb-4 bg-red-600 font-medium w-full rounded-md">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <p className="my-4">
            <span className="text-gray-400">
              {isSignUp ? "Already have an account" : "New to Netflix"}?{" "}
            </span>
            <span onClick={toggleSignIn} className="cursor-pointer">
              {isSignUp ? "Sign In" : "Sign up now"}
            </span>
          </p>
          <p className="text-sm text-gray-400">
            Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
