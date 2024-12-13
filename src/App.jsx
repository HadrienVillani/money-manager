import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MoneyList from "./component/MoneyList";
import MoneyForm from "./component/MoneyForm";
import AllMoney from "./component/TotalAmount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Money Manager</h1>
      <div
        style={{
          width: "100%",
        }}
      >
        <MoneyForm />
      </div>
    </>
  );
}

export default App;
