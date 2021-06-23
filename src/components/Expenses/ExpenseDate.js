import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("kr-KR", { month: "long" });
  const day = props.date.toLocaleString("kr-KR", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__yeaer">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
