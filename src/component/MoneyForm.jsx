import { useMoneyReducer } from "../store";
import TotalAmount from "./TotalAmount";
import MoneyList from "./MoneyList";
import { useState } from "react";

function MoneyForm() {
  const [state, dispatch] = useMoneyReducer();
  const [message, setMessage] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (isNaN(parseInt(value)) && name === "moneyUse") {
      e.target.value = "";
      setMessage("Il faut entrer un nombre");
    } else {
      setMessage("");
    }
    dispatch({ type: "set_value", payload: { name, value } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add_amount" });
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2>Ajouter une dépense</h2>
        <form
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 0px 15px 0px #0e0e0e",
            padding: "50px",
            borderRadius: "10px",
          }}
        >
          <label htmlFor="">Titre de la dépense</label>
          <input type="text" name="label" id="" onChange={handleChange} />
          <label htmlFor="">Montant dépensé</label>
          <input type="text" name="moneyUse" id="" onChange={handleChange} />
          <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>
          <label htmlFor="">Categorie des dépenses</label>
          <select name="categorie" id="" onChange={handleChange}>
            <option defaultValue={""}>----</option>
            <option value="Alimentation">Alimentation</option>
            <option value="Logement">Logement</option>
            <option value="Transport">Transport</option>
            <option value="Divertissement">Divertissement</option>
            <option value="Santé">Santé</option>
            <option value="Éducation">Éducation</option>
            <option value="Autres">Autres</option>
          </select>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "15px",
            }}
          >
            <button
              style={{ padding: "15px 20px 15px 20px" }}
              onClick={handleSubmit}
            >
              Ajouter la dépense
            </button>
          </div>
        </form>
      </div>
      <MoneyList allAmounts={state.amounts} />
      <TotalAmount allAmounts={state.amounts} />
    </div>
  );
}

export default MoneyForm;
