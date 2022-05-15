import React from "react";
import "./Bill.css";

const Bill = () => {
  return (
    <div className="wapper">
      <div className="bill-header">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1"> All</label>
        <br />
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1">Debite</label>
        <br />
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1">Completes</label>
        <br />
      </div>
    <div className="bill">
        <hr />
        <span className="salary">
            <span className="salary-name">Salary <br/>03/01/1999</span>
            <span className="salary-name">2500</span>
        </span>
        <br/>
        <span className="Water">
            <span className="salary-name">Water Bill <br/>03/01/1999</span>
            <span className="Water-Bill">6700</span>
        </span>
        <br/>
        <span className="Loan">
            <span className="salary-name">Loan Rate <br/>03/01/1999</span>
            <span className="Loan-Rate">4100</span>
        </span>
        <br/>
        <span className="salary">
            <span className="salary-name">Tax Return <br/>03/01/1999</span>
            <span className="salary-name">9000</span>
        </span>
    </div>
    <div className="text">
       <p>Task Process : User Can Create Record. View & Filter Create Data</p>
        <ol>
            <li>Create Ui Using React</li>
            <li>Create Api in Node</li>
            <li>Data Management with MongoDB Database</li>
        </ol>
    </div>
    </div>
  );
};

export default Bill;
