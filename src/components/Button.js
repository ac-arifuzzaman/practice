import React from "react";

const Buttn = ({ children, handler }) => {
  return (
    <button
      onClick={handler}
      className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
    >
      {children}
    </button>
  );
};

export default Buttn;
