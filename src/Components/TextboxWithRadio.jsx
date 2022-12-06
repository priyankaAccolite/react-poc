import React, { useState, useEffect } from "react";
import "../Styles/textboxWithRadio.css";
import { currencyCode } from '../Constants/Constants';

const TextboxWithRadio = (props) => {
  const [value, setValue] = useState('');
  //console.log("global-array",currencyCode);
  const [array, setArray] = useState([]);
  const [rerender, Setrerender] = useState(false);

  const handleClick = () => {
    if (value != "") {
      const index = props.currencyCode.indexOf(value)
      setArray(props.currencyCode.splice(index, 1));
      Setrerender(!rerender);
    }
    setValue('');
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="viewContainer">
        {props.currencyCode.map(val => {
          return (
            <div>
              <input type="radio" id={val} value={val} name="value" checked={value==val?true:false} onChange={e => {setValue(e.target.value)}} />{val}
            </div>
          );
        })}
      </div>
      <div>
        <input type="button" value="Delete" onClick={handleClick} style={{border:'1px solid black', height:35, backgroundColor:"#edb525",borderRadius:3 ,width:50, fontWeight:'bold', fontSize:12}}/>
      </div>
    </div>
  );
};

export default TextboxWithRadio;
