import React from "react";
import "../Styles/header.css"

const Header = (props) => {
  return <div className="headerView" style={
    {border: '1px solid black'}
    }>
  <div style={{marginTop:5}}><text className="header" >{props.title}</text></div>
  </div>
};
export default Header;
