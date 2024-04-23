import React from "react";

const OnclickButton = ({ buttonName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-800 hover:cursor-pointer"
    >
      {buttonName}
    </button>
  );
};

export default OnclickButton;
