import React from "react";
import "../Styles/header.css";

const Header = (props) => {
  return (
    <div className="headerView" style={{ border: "1px solid black" }}>
      <div style={{ marginTop: 5 }}>
        <h1 className="header">{props.title}</h1>
      </div>
    </div>
  );
};
export default Header;
