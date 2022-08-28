import React from "react";
import Button from "./Button";
import Counte from "./Count";

const Counter = ({ id, count, incrementHandler, decrementHandler }) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <Counte count={count}/>
        <div className="flex space-x-3">
          <Button handler={() =>incrementHandler(id)}>Increment</Button>
          <Button handler={() =>decrementHandler(id)}>Decrement</Button>
          
        </div>
      </div>
    </div>
  );
};

export default Counter;
