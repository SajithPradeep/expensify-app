import { combineReducers, createStore } from "redux";
import expensesreducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

// Creating the Redux store
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesreducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
