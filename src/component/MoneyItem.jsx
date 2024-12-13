import React from "react";

function MoneyItem({ moneyUse, label, categorie }) {
  return (
    <ul>
      <li>
        <h4>Nom de la dépense</h4>
        {label}
      </li>
      <li>
        <h4>Prix de la dépense</h4>
        {moneyUse} €
      </li>
      <li>
        <h4>Catégorie de la dépense</h4>
        {categorie}
      </li>
    </ul>
  );
}

export default MoneyItem;
