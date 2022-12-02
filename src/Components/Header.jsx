import React from "react";
import "../Styles/header.css";

const Header = (props) => {
  return (
    <div className="headerView" style={{ border: "1px solid black" }}>
      <div style={{ marginTop: 5 }}>
        <div className="header">{props.title}</div>
      </div>
    </div>
  );
};
export default Header;
