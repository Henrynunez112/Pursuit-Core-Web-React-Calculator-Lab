import React from "react";
import KeypadRow from "./KeypadRow/KeypadRow";
import Button from "../../Button/Button";

const Keypad = (props) => {
  return (
    <div className="keypad">
      <KeypadRow>
        <Button type='primary' pressedBtn={props.pressedBtn}>C</Button>
        <Button pressedBtn={props.pressedBtn}>Del</Button>
        <Button pressedBtn={props.pressedBtn}>%</Button>
        <Button pressedBtn={props.pressedBtn}>/</Button>
      </KeypadRow>

      <KeypadRow>
        <Button pressedBtn={props.pressedBtn}>9</Button>
        <Button pressedBtn={props.pressedBtn}>8</Button>
        <Button pressedBtn={props.pressedBtn}>7</Button>
        <Button pressedBtn={props.pressedBtn}>*</Button>
      </KeypadRow>

      <KeypadRow>
        <Button pressedBtn={props.pressedBtn}>6</Button>
        <Button pressedBtn={props.pressedBtn}>5</Button>
        <Button pressedBtn={props.pressedBtn}>4</Button>
        <Button pressedBtn={props.pressedBtn}>-</Button>
      </KeypadRow>

      <KeypadRow>
        <Button pressedBtn={props.pressedBtn}>3</Button>
        <Button pressedBtn={props.pressedBtn}>2</Button>
        <Button pressedBtn={props.pressedBtn}>1</Button>
        <Button pressedBtn={props.pressedBtn}>+</Button>
      </KeypadRow>

      <KeypadRow>
        <Button pressedBtn={props.pressedBtn}>0</Button>
        <Button pressedBtn={props.pressedBtn}>.</Button>
        <Button type='large' pressedBtn={props.pressedBtn}>=</Button>
      </KeypadRow>
    </div>
  );
};

export default Keypad;
