import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonName, url = "" }) => {
  return (
    <Link
      to={url}
      className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 hover:cursor-pointer"
    >
      {buttonName}
    </Link>
  );
};

export default Button;
