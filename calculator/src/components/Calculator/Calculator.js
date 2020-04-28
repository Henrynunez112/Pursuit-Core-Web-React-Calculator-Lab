import React, { useState } from "react";
import Screen from "../Screen/Screen";
import Keypad from "./Keypad/Keypad";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [equation, setEquation] = useState("");

  const pressedBtn = (e) => {
    e.preventDefault();
    const btnValue = e.target.innerText;
    if (btnValue === "C") return clear();
    else if ((btnValue >= "0" && btnValue <= "9") || btnValue === ".") {
      setEquation(equation + btnValue);
    } else if (["+", "-", "*", "/", "%"].indexOf(btnValue) !== -1) {
      setEquation(equation + " " + btnValue + " ");
    } else if (btnValue === "=") {
      const fullEquation = evaluate(equation);
      if(!Number.isInteger(fullEquation)){
        fullEquation.toFixed(2)
      }else{
        setResult(fullEquation);
      }
    }
  };

  const clear = () => {
    setResult(0);
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
