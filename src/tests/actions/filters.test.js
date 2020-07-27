import {
  setStartDate,
  setEndDate,
  setTextfilter,
  sortByDate,
  sortByAmount,
} from "../../actions/filters";
import moment from "moment";

test("Should test the set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("Should test the end start date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("Should set sort By date filter", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
    sortBy: "date",
  });
});

test("Should set sort By Amount filter", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount",
  });
});

test("Should set the text to filter entered by the user", () => {
  const action = setTextfilter("sample");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "sample",
  });
});

test("Should set the text to filter to default", () => {
  const action = setTextfilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
