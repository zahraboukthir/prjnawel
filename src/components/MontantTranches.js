import React from "react";
import "./Inputs.css";
function MontantTranches({ amount }) {
  return (
    <td>
      {amount.map((val, key) => {
        return <tr>{val}</tr>;
      })}
      <tr>
        <td>Total</td>
        <td>{amount.reduce((a, b) => a + b, 0)}</td>
      </tr>
    </td>
  );
}

export default MontantTranches;
