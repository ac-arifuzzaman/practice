import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

export default function App() {
  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  const incrementHandler = (id) => {
    const updatedCounter = state.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count + 1,
        };
      }
      return {
        ...counter,
      };
    });
    setState(updatedCounter)
  };

  const decrementHandler = (id) => {
    const decrementCounter = state.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count - 1,
        };
      }
      return { ...counter };
    });
    setState(decrementCounter)
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      {state.map((count) => (
        <Counter
          key={count.id}
          id={count.id}
          count= {count.count}
          incrementHandler={incrementHandler}
          decrementHandler={decrementHandler}
        />
      ))}

      <Stats count={totalCount()} />
    </div>
  );
}
