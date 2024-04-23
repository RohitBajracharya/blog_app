import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonName, url = "" }) => {
  return (
    <Link to={url}>
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-800 hover:cursor-pointer"
      >
        {buttonName}
      </button>
    </Link>
  );
};

export default Button;
