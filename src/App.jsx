import { useState } from "react";
import styles from "./App.module.css";
// import styles from "./components/buttonsContainer";
import ButtonsContainer from "./components/buttonsContainer";
import Display from "./components/Display";
import "./App.css";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (ButtonText) => {
    if (ButtonText == "C") {
      setCalVal("");
    } else if (ButtonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + ButtonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      <div>
        <h1>Digital Calculator</h1>
      </div>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </div>
  );
}

export default App;
