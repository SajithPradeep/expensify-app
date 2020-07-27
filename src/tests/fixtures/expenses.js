import moment from "moment";

export default [
  {
    id: 0,
    note: "",
    amount: 195,
    description: "Gum",
    createdAt: moment(0),
  },
  {
    id: 1,
    note: "",
    amount: 109500,
    description: "Rent",
    createdAt: moment(0).subtract(4, "Days").valueOf(),
  },
  {
    id: 2,
    note: "",
    amount: 4500,
    description: "Credit Card",
    createdAt: moment(0).add(4, "Days").valueOf(),
  },
];
