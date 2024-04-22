import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";

const Signup = () => {
  return (
    <div className="pt-20 px-9 bg-slate-200 pb-8 min-h-screen flex justify-center items-center">
      <div className="bg-slate-100 py-5 max-w-md mx-auto rounded-md px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create your Blog Account</h1>
        </div>
        <div className="mt-6">
          <form>
            {/* email field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm lg:text-xl font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter email"
              />
            </div>
            {/* username field */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm lg:text-xl font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter username"
              />
            </div>
            {/* password field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm lg:text-xl font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter password"
              />
            </div>

            {/* submit button */}
            <div className="text-center mt-6">
              <Button buttonName={"Signup"} />
            </div>
          </form>
          <hr className="mt-5 bg-slate-900 h-[2px] opacity-30" />
          <div className="mt-4 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-red-500 hover:cursor-pointer">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
