import React from "react";

const Button = (props) => {
  const { name, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      style={{
        padding: "5px 15px",
        backgroundColor: "#edb525",
        fontWeight: "600",
        cursor: "pointer",
        borderRadius: "3px",
        border: "1px solid black",
        margin: "8px 5px",
      }}
    >
      {name}
    </button>
  );
};
export default Button;
