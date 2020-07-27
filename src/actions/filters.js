// SET_TEXT_FILTER Action generator
export const setTextfilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// SORT_BY_AMOUNT Action Generator
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount",
});

// SORT_BY_DATE Action Generator
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
  sortBy: "date",
});

// SET_START_DATE Action Generator
export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

// SET_END_DATE Action Generator
export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
