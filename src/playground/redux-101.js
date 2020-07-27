import { createStore } from "redux";

// Action Generators
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy,
  };
};

const setCount = ({ count = 0 } = {}) => {
  return {
    type: "SET",
    count,
  };
};

const resetCount = () => {
  return {
    type: "RESET",
  };
};

// Reducers
// Reducers are pure functions
// Reducers should never mutate state/actions. If there is a change in the state, we simply return that change from the reducers without directly setting the state.

const countReducer = (state = { count: 0 }, action) => {
  const decrement =
    typeof action.decrementBy === "number" ? action.decrementBy : 1;
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - decrement,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

// Creating the redux store
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 100 }));
// Function to stop subscribing to state changes
// unsubscribe();

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 100 }));
