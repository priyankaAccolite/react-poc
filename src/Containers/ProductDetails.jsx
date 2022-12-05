import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import {productDetails} from "../Constants/Constants";
import DropDown from "../Components/DropDown";
import DateInput from "../Components/DateInput";
import Button from "../Components/Button";
import '../Styles/productDetails.css'
import TextboxWithRadio from "../Components/TextboxWithRadio";
import { currencyCode } from '../Constants/Constants';
import TextInput from '../Components/TextInput'

const ProductDetails = () => {
  const [value, setValue] = useState('');
  const [rerender, Setrerender] = useState(false);

  const handleChange = (e) => {
    setValue(e.label);
    Setrerender(!rerender);
    //console.log("selected-value",value);
  };
  const handleClick = () => {
    currencyCode.push(value);
    Setrerender(!rerender);
    //console.log("global-array",currencyCode);
  };

  return (
    <>
      <Header title={"Product Details"} />
      {productDetails.map((item) => {
        return (
          <>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                padding: 12,
              }}
            >
              <div style={{ width: 400, textAlign: 'left', fontSize: 16 }}>{'*' + ' ' + item.label}</div>
              {item.type.map((i) => {
                if (i.placeHolder === "dropdown") {
                  return (
                    <>
                      <div style={{ marginLeft: item.id === 11 ? 90 : 40 }}>
                        <DropDown handleChange={handleChange} options={i.options} />
                      </div>
                    </>
                  )
                } else if (i.placeHolder === "date") {
                  return <div style={{ marginLeft: 40 }}>
                    <DateInput />
                  </div>
                } else if (i.placeHolder === "button") {
                  return <div style={{ marginLeft: 40 }}>
                    <input type="button" value="Add to List" onClick={handleClick} style={{border:'1px solid black', height:35, borderRadius:3 ,width:96, fontWeight:'bold', fontSize:12}}/>
                  </div>
                } else if (i.placeHolder === "input") {
                  return <div style={{ marginLeft: 40 }}>
                    <TextInput size={item.label === "Name" ? 105 : item.id === 10 || item.id === 11 ? 14 : 28} />
                  </div>
                } else {
                  return <div style={{ marginLeft: 115}}>
                    <TextboxWithRadio currencyCode={currencyCode} />
                  </div>
                }
              })}
            </div>
          </>
        );
      })}
    </>
  );
}
export default ProductDetails;
