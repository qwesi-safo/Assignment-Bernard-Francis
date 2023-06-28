import React from "react";

 function Expense({ transactions }) {
  const amount = transactions.map((transaction) => Number(transaction.amount));
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);
  const expenses = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+Ghs{income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">Ghs{expenses}</p>
      </div>
    </div>
  );
 }

  export default Expense;
