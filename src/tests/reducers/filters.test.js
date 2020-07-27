import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Should setup default values for filters", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("Should set sort by to amount", () => {
  const state = filtersReducer(undefined, {
    type: "SORT_BY_AMOUNT",
    sortBy: "amount",
  });
  expect(state.sortBy).toBe("amount");
});

test("Should set sort by to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const action = {
    type: "SORT_BY_DATE",
    sortBy: "date",
  };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("Should set the text filter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "Sample",
  });
  expect(state.text).toBe("Sample");
});

test("Should set the start of date filter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: 1000,
  });
  expect(state.startDate).toBe(1000);
});

test("Should set the end of date filter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: 1000,
  });
  expect(state.endDate).toBe(1000);
});
