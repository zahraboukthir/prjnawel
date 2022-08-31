import React from "react";
import "./Inputs.css";
import MontantTranches from "./MontantTranches";
function Table({ tableData, amount }) {
  console.log(amount);
  return (
    <div>
      <table id="table">
        
          
        <tbody>
          <tr><th>ID</th>
          <th>Client</th>
          <th>Montant par tranche</th>
          <th>Nombre des tranches</th></tr>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.Client}</td>

                
                  {amount.map((el,i)=>i==index? <MontantTranches amount={el} key={i} /> :null)}
                  
                  {/* <td>{data.Montant_Global}</td> */}
                
                <td>{data.Nombre_des_tranches}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
