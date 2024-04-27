import React from "react";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  variant: "primary" | "secondary";
}

const ActionBtns: React.FC<ButtonProps> = ({ text, type, variant }) => {
  const baseClasses =
    "flex-1 rounded-xl font-medium text-xl px-3 py-2 font-rubik";
  const primaryClasses = "bg-pasy-brown-text text-white";
  const secondaryClasses =
    "text-pasy-brown-text border-2 border-pasy-brown-text";

  const classes = `${baseClasses} ${
    variant === "primary" ? primaryClasses : secondaryClasses
  }`;

  return (
    <button type={type} className={classes}>
      {text}
    </button>
  );
};

export default ActionBtns;
