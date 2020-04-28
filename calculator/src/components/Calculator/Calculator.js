import React, { useState } from "react";
import Screen from "../Screen/Screen";
import Keypad from "./Keypad/Keypad";
import { evaluate } from "mathjs";

const Calculator = () => {
  const initialState = 0;
  const [result, setResult] = useState(initialState);
  const [equation, setEquation] = useState("");

  const pressedBtn = (e) => {
    e.preventDefault();
    const btnValue = e.target.innerText;
    let mutateEqua = [...equation];
    if (btnValue === "C") return clear();
    else if ((btnValue >= "0" && btnValue <= "9") || btnValue === ".") {
      setEquation(equation + btnValue);
    } else if (["+", "-", "*", "/", "%"].indexOf(btnValue) !== -1) {
      setEquation(equation + " " + btnValue + " ");
    } else if (btnValue === "=") {
      try {
        const fullEquation = evaluate(equation);
        if (!Number.isInteger(fullEquation)) {
          fullEquation.toFixed(2);
          setResult(fullEquation);
        } else {
          setResult(fullEquation);
          setEquation("");
        }
      } catch (err) {
        alert("This is not the way we do math!!!");
        setEquation("");
        setResult(0);
      }
    } else {
      mutateEqua.pop();
      setEquation(mutateEqua);
    }
  };

  const clear = () => {
    setResult(initialState);
    setEquation("");
  };

  return (
    <main className="calculator">
      <Screen equation={equation} result={result} />
      <Keypad pressedBtn={pressedBtn} />
    </main>
  );
};

export default Calculator;
