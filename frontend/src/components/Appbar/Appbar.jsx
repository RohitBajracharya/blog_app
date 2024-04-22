import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Appbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="md:hidden">
        <nav className="bg-gray-400 fixed text-white z-[99]">
          <div className="w-screen h-16 flex items-center px-9 justify-between">
            <div>
              <h1 className="text-3xl hover:cursor-pointer">
                Ramro<span className="text-yellow-400">Blog</span>
              </h1>
            </div>
            <div>
              <button
                className="text-3xl focus:outline-none"
                onClick={toggleMenu}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
          {showMenu && (
            <div className="p-4 bg-gray-400 flex flex-col items-center">
              <Link
                to="/"
                className="text-xl hover:cursor-pointer hover:text-slate-200 py-2 w-screen text-center"
              >
                Home
              </Link>
              <Link
                to="/add-blog"
                className="text-xl hover:cursor-pointer hover:text-slate-200 py-2 w-screen text-center"
              >
                Add Blog
              </Link>
              <Link
                to="/login"
                className="text-xl hover:cursor-pointer hover:text-slate-200 py-2 w-screen text-center"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-xl hover:cursor-pointer hover:text-slate-200 py-2 w-screen text-center"
              >
                SignUp
              </Link>
            </div>
          )}
        </nav>
      </div>

      <div className="hidden md:block">
        <nav className="bg-gray-400 fixed text-white z-[99]">
          <div className="w-screen h-16 flex items-center px-9 justify-between">
            <div>
              <h1 className="text-3xl hover:cursor-pointer">
                Ramro<span className="text-yellow-400">Blog</span>
              </h1>
            </div>
            <div className="flex gap-8 items-center text-xl">
              <Link
                to="/"
                className="hover:cursor-pointer hover:text-slate-200"
              >
                Home
              </Link>
              <Link
                to="/add-blog"
                className="hover:cursor-pointer hover:text-slate-200"
              >
                Add Blog
              </Link>
            </div>
            <div className="flex gap-3 items-center text-lg">
              <Button buttonName={"Login"} url={"/login"} />
              <Button buttonName={"Signup"} url={"/signup"} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Appbar;
