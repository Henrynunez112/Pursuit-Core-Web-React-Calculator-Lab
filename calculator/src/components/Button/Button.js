import React from "react";

const Button = (props) => {
  const classes = ["btn"];
  if (typeof props !== "undefined" && typeof props.type !== "undefined");
    classes.push("btn--" + props.type);
  return <div className={classes.join(' ')}>{props.children}</div>;
};

export default Button;

