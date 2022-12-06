import React from "react";

const Button = (props) => {
  const { name, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      style={{ padding: "5px 15px", fontWeight: "600" }}
    >
      {name}
    </button>
  );
};
export default Button;
