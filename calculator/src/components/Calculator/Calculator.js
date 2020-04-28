import React, { useState } from "react";
import Screen from "../Screen/Screen";
import Keypad from "./Keypad/Keypad";

const Calculator = () => {
  const initialCount = 0;
  const [result, setResult] = useState(initialCount);
  const [equation, setEquation] = useState("");

  return (
    <main className="calculator">
      <Screen equation={equation} result={result} />
      <Keypad />
    </main>
  );
};

export default Calculator;
