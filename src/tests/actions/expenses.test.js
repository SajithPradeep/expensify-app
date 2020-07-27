import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Should generate the remove Expense action object", () => {
  const action = removeExpense({ id: "123@@abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123@@abc",
  });
});

test("Should generate the edit Expense action object", () => {
  const action = editExpense("123@@abc", { note: "adding a note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123@@abc",
    updates: { note: "adding a note" },
  });
});

test("Should generate the add Expense action with arguments", () => {
  const expenseObject = {
    description: "Rent for last month",
    note: "sample",
    amount: 105000,
    createdAt: 1000,
  };
  const action = addExpense(expenseObject);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expenses: { ...expenseObject, id: expect.any(String) },
  });
});

test("Should generate the add Expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expenses: {
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
      id: expect.any(String),
    },
  });
});
