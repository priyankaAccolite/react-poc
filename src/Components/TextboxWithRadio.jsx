import React, { useState, useEffect } from "react";
import "../Styles/textboxWithRadio.css";
import { currencyCode } from '../Constants/Constants';

const TextboxWithRadio = (props) => {
  const [value, setValue] = useState('');
  //console.log("global-array",currencyCode);
  const [array, setArray] = useState(currencyCode);
  const [rerender, Setrerender] = useState(false);

  const handleClick = () => {
    if (value != "") {
      const index = currencyCode.indexOf(value)
      setArray(currencyCode.splice(index, 1));
      setValue('');
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="viewContainer">
        {currencyCode.map(val => {
          return (
            <div>
              <input type="radio" value={val} name="value" onChange={e => setValue(e.target.value)} />{val}
            </div>
          );
        })}
      </div>
      <div>
        <input type="button" value="Delete" onClick={handleClick} style={{border:'1px solid black', height:35, borderRadius:3 ,width:60, fontWeight:'bold', fontSize:12}}/>
      </div>
    </div>
  );
};

export default TextboxWithRadio;
