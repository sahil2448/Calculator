import { useDebugValue } from "react";
import styles from "./buttonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    ["C", "1", "2"],
    ["+", "3", "4"],
    ["-", "5", "6"],
    ["*", "7", "8"],

    ["/", "=", "9"],
    ["0", "."],
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((btns, idx) => (
        <div key={idx} className={styles.btnContWrapper}>
          {btns.map((btn, idx) => {
            return (
              <button
                key={idx}
                style={{ cursor: "pointer" }}
                className={styles.button}
                onClick={() => onButtonClick(btn)}
              >
                <h4>{btn}</h4>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};
export default ButtonsContainer;
