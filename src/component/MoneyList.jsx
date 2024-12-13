import React from "react";
import { useMoneyReducer } from "../store";
import MoneyItem from "./MoneyItem";

function MoneyList({ allAmounts }) {
  return (
    <div className="money-list">
      <h2>Toutes vos dépenses</h2>
      {allAmounts.map((amount, index) => {
        return (
          <MoneyItem
            key={index}
            label={amount.label}
            moneyUse={amount.moneyUse}
            categorie={amount.categorie}
          />
        );
      })}
    </div>
  );
}

export default MoneyList;
