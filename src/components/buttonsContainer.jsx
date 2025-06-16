import styles from "./buttonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((btn) => (
        <button className={styles.button} onClick={() => onButtonClick(btn)}>
          {btn}
        </button>
      ))}

      {/* <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button> */}
    </div>
  );
};
export default ButtonsContainer;
