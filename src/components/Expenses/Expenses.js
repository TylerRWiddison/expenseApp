import React, { useState } from "react";


import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYearFilter, setSelectedYearFilter] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYearFilter(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYearFilter;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYearFilter}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
