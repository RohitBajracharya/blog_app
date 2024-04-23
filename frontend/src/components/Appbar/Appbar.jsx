import Cookies from "js-cookie";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Button/Button";
import OnclickButton from "../Button/OnclickButton";

const Appbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = Cookies.get("accessToken");

  const handleLogout = async () => {
    Cookies.remove("accessToken");
    toast.success("Logout Successfully");
    navigate("/");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {/* for mobile */}
      <div className="md:hidden lg:hidden">
        <nav className="bg-green-300 fixed text-white z-[99]">
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
              {isLoggedIn && (
                <Link
                  to="/my-blogs"
                  className="text-xl hover:cursor-pointer hover:text-slate-200 py-2 w-screen text-center"
                >
                  My Blogs
                </Link>
              )}
              {!isLoggedIn && (
                <>
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
                </>
              )}
              {isLoggedIn && (
                <>
                  <div
                    onClick={handleLogout}
                    className="text-xl hover:cursor-pointer hover:text-slate-200 py-2 w-screen text-center"
                  >
                    Logout
                  </div>
                </>
              )}
            </div>
          )}
        </nav>
      </div>

      {/* for large and medium screen */}
      <div className="hidden md:block lg:block">
        <nav className="bg-green-300 fixed text-white z-[99]">
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
              {isLoggedIn && (
                <Link
                  to="/my-blogs"
                  className="hover:cursor-pointer hover:text-slate-200"
                >
                  My Blogs
                </Link>
              )}
            </div>
            {isLoggedIn && (
              <div className="flex gap-3 items-center text-lg">
                <OnclickButton buttonName={"Logout"} onClick={handleLogout} />
              </div>
            )}
            {!isLoggedIn && (
              <div className="flex gap-3 items-center text-lg">
                <Button buttonName={"Login"} url={"/login"} />
                <Button buttonName={"Signup"} url={"/signup"} />
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Appbar;
