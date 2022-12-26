import React from "react";
import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      <button style={{ padding: "20px" }} onClick={decrement}>
        -
      </button>
      <span style={{ padding: "20px" }}>{state.count}</span>
      <button style={{ padding: "20px" }} onClick={increment}>
        +
      </button>
      <button style={{ padding: "20px" }} onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default UseReducer;
