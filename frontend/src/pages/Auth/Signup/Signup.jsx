import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SubmitButton from "../../../components/Button/SubmitButton";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8001/api/users/signup",
        {
          fullName,
          email,
          password,
        }
      );
      const { message } = response.data;
      
      toast(message);
      setTimeout(() => {
        navigate("/login");
      }, 2010);
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
    }
  };

  return (
    <div className="pt-20 px-9 bg-slate-200 pb-8 min-h-screen flex justify-center items-center">
      <div className="bg-slate-100 py-5 max-w-md mx-auto rounded-md px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create your Blog Account</h1>
        </div>
        <div className="mt-6">
          <form onSubmit={handleSubmit} method="post">
            {/* fullName field */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm lg:text-xl font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="fullName"
                id="fullName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter fullname"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* submit button */}
            <div className="text-center mt-6">
              <SubmitButton buttonName={Signup} />
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
