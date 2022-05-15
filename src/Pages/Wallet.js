import React from "react";
import "./Wallet.css";

const Wallet = () => {
  return (
    <div className="Warpper">
      <h1>Wallet</h1>
      <h4 className="Balance">YOUR BALANCE</h4>
      <h2 className="Balance">2669,25</h2>
      <div className="income">
        <p className="income_title">Income</p>
        <p className="income_balance">3456789</p>
      </div>
      <div className="expense">
        <p className="expense_title">Expense</p>
        <p className="expense_balance">3456789</p>
      </div>
      <p className="Add_New">Add New Transaction</p>

      <p>TEXT</p>
      <input placeholder="Rs" type="text" className="input_rs"/>
      <p>Amount</p>
      <p className="Pay_method">(wallet expense income salary)</p>
      <h1>52$.2$</h1>

      <button type="button" className="btn">Add Transaction</button>
    </div>

  );
};

export default Wallet;
