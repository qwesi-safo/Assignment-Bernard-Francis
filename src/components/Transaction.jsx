import React from "react";

export default function Transaction({ transaction, deleteTransaction }) {
  let sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      {transaction.text}
      <span>
        <span style={{ marginRight: 8 }}>{transaction.date}</span>
        {sign}Ghs{Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        REM
      </button>
    </li>
  );
  }
