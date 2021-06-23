import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showNewExpense, setShowNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const showExpenseForm = () => {
    setShowNewExpense(true);
  };

  const hideExpenseForm = () => {
    setShowNewExpense(false);
  };

  let newExpense = <button onClick={showExpenseForm}>Add New Expense</button>;

  if (showNewExpense === true) {
    newExpense = (
      <ExpenseForm
        cancel={hideExpenseForm}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{newExpense}</div>;
};

export default NewExpense;
