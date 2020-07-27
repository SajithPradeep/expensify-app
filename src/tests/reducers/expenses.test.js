import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set the default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by ID", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense if ID does not match", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: 4,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test("Should add expenses", () => {
  const expense = {
    description: "sample",
    amount: 100,
    note: "",
    createdAt: 1000,
    id: 4,
  };
  const state = expensesReducer(expenses, {
    type: "ADD_EXPENSE",
    expenses: expense,
  });
  expect(state).toEqual([...expenses, expense]);
});

test("Should edit expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: 1,
    updates: {
      note: "I added a note",
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual({ ...expenses[1], note: action.updates.note });
});

test("Should not edit expense with wrong id", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: 6,
    updates: {
      note: "I added a note",
    },
  };
  const state = expensesReducer(expenses, action);
  console.log(state);
  expect(state).toEqual(expenses);
});
