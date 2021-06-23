import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeHandler = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "title") {
      setUserInput((prevState) => {
        return { ...prevState, title: value };
      });
    } else if (name === "amount") {
      setUserInput((prevState) => {
        return { ...prevState, amount: value };
      });
    } else if (name === "date") {
      setUserInput((prevState) => {
        return { ...prevState, date: value };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };

    props.onSaveExpenseData(newExpense);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={userInput.title || ""}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={userInput.amount || ""}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date || ""}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.cancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
