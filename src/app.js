import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextfilter } from "./actions/filters";
import visibleExpenses from "./selectors/expenses";
import "./styles/styles.scss";
import "normalize.css/normalize.css"; //This is done for CSS reset to support all the browsers equally

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water bill", amout: 4500, createdAt: 2000 })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 300, createdAt: 1000 })
);
store.dispatch(addExpense({ description: "Rent", amount: 105000 }));

const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
