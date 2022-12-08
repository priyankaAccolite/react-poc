import React from "react";

const Button = (props) => {
  const { name, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      style={{
        padding: "5px 15px",
        backgroundColor: "#ED2939",
        fontWeight: "600",
        cursor: "pointer",
        borderRadius: "3px",
        border: "1px solid black",
        margin: "8px 5px",
        color: "whitesmoke"
      }}
    >
      {name}
    </button>
  );
};
export default Button;
