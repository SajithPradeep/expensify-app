import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

// ADD_EXPENSE Action Generator
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expenses: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE Action Generator
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT_EXPENSE Action Generator
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// SET_TEXT_FILTER Action generator
const setTextfilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// SORT_BY_AMOUNT Action Generator
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount",
});

// SORT_BY_DATE Action Generator
const sortByDate = () => ({
  type: "SORT_BY_DATE",
  sortBy: "date",
});

// SET_START_DATE Action Generator
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

// SET_END_DATE Action Generator
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

// Creating the Expenses Reducer
const expensesReducerDefaultState = [];

const expensesreducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expenses];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Creating the Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "Date", //date or amount
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: action.sortBy };
    case "SORT_BY_DATE":
      return { ...state, sortBy: action.sortBy };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// Get Visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endaDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount > b.amount ? -1 : 1;
      }
    });
};

// Creating the Redux store
const store = createStore(
  combineReducers({
    expenses: expensesreducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// The return value of store.dispatch will contain the object/item  being returned from the Action
const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expenses.id }));

// store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 500 }));

// store.dispatch(setTextfilter("rent"));
// store.dispatch(setTextfilter(""));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [
    {
      id: "asdasdasdasdasd",
      description: "Jan rent",
      note: "This is the last rent I am paying",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

// Example for Object Spread Operator
// const obj = {
//   name: "Sajith",
//   age: 25,
// };

// console.log({ ...obj, location: "Kochi", age: 27 });
