import React, { useState } from "react";
import "./Inputs.css";
import Table from "./Table";
function Inputs() {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    Client: "",
    
    Montant_Global: "",
    Nombre_des_tranches: "",
  });
 
  //state to add amounts
  const [amount, setAmount] = useState([]);
  
  //handleChange function to enter data
  const handleChange = (e) => {
    const newInput = (data) => ({ ...data, [e.target.name]: e.target.value });
    setformInputData(newInput);
  };
  //handleSubmit function to show data in table
  const handleSubmit = (e) => {
    e.preventDefault();
    let randomAmount = [];
    let total = 0;
    var x = 0;
    var min = 0.001;
    var max = formInputData.Montant_Global - 200;
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = {
        Client: "",
        Montant_Global: "",
        Nombre_des_tranches: "",
      };
      setformInputData(emptyInput);
      console.log(formInputData);
      for (let i = 0; i < formInputData.Nombre_des_tranches; i++) {
        x = Math.floor(Math.random() * (max - total) - min + 1) + min;
        randomAmount.push(x);
        total += randomAmount[i];
        min += 0.005;
      }
      console.log(randomAmount);
      randomAmount[formInputData.Nombre_des_tranches] =
        formInputData.Montant_Global - total;
        
    }
    console.log(randomAmount);
    setAmount([...amount,randomAmount]);
   
  };
  console.log(amount);
  //   const addReglement = () => {

  // };

  return (
    <div>
      <form>
        <div className="data_input">
          <label >Client:</label>
          <input
            name="Client"
            type="text"
            placeholder="Entrer le nom du client"
            onChange={handleChange}
            value={formInputData.Client}
          ></input>
        </div>
        <div className="data_input">
          <label >Montant Global:</label>
          <input
            name="Montant_Global"
            type="number"
            placeholder="Entrer le montant global"
            onChange={handleChange}
            value={formInputData.Montant_Global}
          ></input>
        </div>
        <div className="data_input">
          <label >Nombre des tranches:</label>
          <input
            name="Nombre_des_tranches"
            type="number"
            placeholder="Entrer le nombre des tranches"
            onChange={handleChange}
            value={formInputData.Nombre_des_tranches}
          ></input>
        </div>

        <div className="buttons">
          <button type="submit" id="add-btn">
            Add new Client
          </button>
          <button type="submit" id="add-btn" onClick={handleSubmit}>
            Add reglement
          </button>
        </div>
      </form>

      <Table tableData={tableData} amount={amount}  />
    </div>
  );
}

export default Inputs;
