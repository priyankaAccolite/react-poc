import React from "react";
import "../Styles/header.css"

const Header = (props) => {
  return <div className="headerView" style={
    {borderRight: '1px solid black', borderBottom: '1px solid black'}
    }>
  <div className="header" >{props.title}</div>
  </div>
};
export default Header;
