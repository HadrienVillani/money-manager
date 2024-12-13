import { useReducer } from "react";

let id = 0;
const initialState = {
  amount: {
    id: id++,
    label: "",
    moneyUse: "",
    categorie: "",
  },
  amounts: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "set_value":
      return {
        ...state,
        amount: {
          ...state.amount,
          [action.payload.name]: action.payload.value,
        },
      };
    case "add_amount":
      return state.amount.moneyUse !== "" &&
        state.amount.label !== "" &&
        state.amount.categorie !== "" &&
        parseInt(state.amount.moneyUse) !== NaN
        ? {
            ...state,
            amount: {
              id: id++,
              label: "",
              moneyUse: "",
              categorie: "",
            },
            amounts: state.amounts.concat([state.amount]),
          }
        : state;
    default:
      return state;
  }
};
export const useMoneyReducer = () => useReducer(reducer, initialState);
