import React from "react";

const Stats = ({count}) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow text-3xl font-bold	">
        Total count: {count}
      </div>
    </div>
  );
};

export default Stats;
