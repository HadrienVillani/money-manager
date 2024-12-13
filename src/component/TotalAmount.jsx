import React, { useEffect } from "react";
import { useMoneyReducer } from "../store";

function AllMoney({ allAmounts }) {
  const [state, dispatch] = useMoneyReducer();
  let newArray = [];
  for (let index = 0; index < allAmounts.length; index++) {
    newArray.push(parseInt(allAmounts[index].moneyUse));
  }
  // with initial value to avoid when the array is empty

  let sum = 0;
  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }

  return (
    <div>
      <h2>Total des dépenses</h2>
      <div
        style={{
          padding: "30px",
          boxShadow: "0px 0px 15px 0px #0e0e0e",
          borderRadius: "10px",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "30px" }}>{sum} €</p>
      </div>
    </div>
  );
}

export default AllMoney;
