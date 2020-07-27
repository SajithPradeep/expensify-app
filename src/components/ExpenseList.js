import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import ExpenseListFilters from "./ExpenseListFilters";
import selectedExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <ExpenseListFilters />
    {props.expenses.map((expense) => {
      return <ExpenseListItem {...expense} key={expense.id} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters),
  };
};

//Setting up the HOC
export default connect(mapStateToProps)(ExpenseList);
