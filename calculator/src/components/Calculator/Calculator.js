import React, { useState } from "react";
import Screen from "../Screen/Screen";
import Keypad from "./Keypad/Keypad";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [equation, setEquation] = useState('');

  const onButtonPress = (e) => {
    debugger
    let pressedButton = e.target.value;
    if(pressedButton === 'C'){
      return setResult(0) && setEquation('');
    }else if((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.'){
      setEquation(equation + pressedButton)
    }else if(['+', '-', '*', '/', '%']){

    }
  };

  return (
    <main className="calculator">
      <Screen equation={equation} result={result} />
      <Keypad onClick={() => onButtonPress()} />
    </main>
  );
};

export default Calculator;
