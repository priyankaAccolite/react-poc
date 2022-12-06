import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { productDetails } from "../Constants/Constants";
import DropDown from "../Components/DropDown";
import DateInput from "../Components/DateInput";
import Button from "../Components/Button";
import '../Styles/productDetails.css'
import TextboxWithRadio from "../Components/TextboxWithRadio";
// import { currencyCode } from '../Constants/Constants';
import TextInput from '../Components/TextInput'

const ProductDetails = () => {
  const [value, setValue] = useState('');
  const [rerender, Setrerender] = useState(false);
  const [currency, setCurrency] = useState("")
  const [display,setDisplay]=useState(true);

  const handleChange = (e) => {
    setValue(e.label);
    Setrerender(!rerender);
    //console.log("selected-value",value);
    if (e.label === "Cambodia") {
      setCurrency("USD")
    } else if (e.label === "HongKong") {
      setCurrency("HKD")
    } else if (e.label === "Indonesia") {
      setCurrency("IDR")
    } else if (e.label === "Laos") {
      setCurrency("LAK")
    } else if (e.label === "Malaysia") {
      setCurrency("RM")

    } else if (e.label === "Myanmar") {
      setCurrency("MMK")
    } else if (e.label === "Philippines") {
      setCurrency("PHP")
    } else if (e.label === "Singapore") {
      setCurrency("SGD")
    } else if (e.label === "Thailand") {
      setCurrency("THB")
    } else if (e.label === "Vietnam") {
      setCurrency("VND")
    } else {
      setCurrency("")
    }
  };
  const handleAccordion=()=>{
    setDisplay(!display);
};

  return (
    <>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <Header title={"Product Details"} />
      <div >
            <input type="button" onClick={handleAccordion} style={{padding:12,width:60,backgroundColor:"white",borderLeft: '1px solid black', borderBottom: '1px solid black', borderTop: 'none', borderRight: 'none'}} value="-"/>
      </div>
    </div>
      {productDetails.map((item) => {
        return (
          <>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                padding: 12,
                display:display?"flex":"none",
                marginRight:20,
                marginLeft:20,
              }}
            >
              <div style={{ width: 400, textAlign: 'left', fontSize: 16 }}>{item.id + '.' + ' ' + item.label}</div>
              {item.type.map((i) => {
                if (i.placeHolder === "dropdown") {
                  return (
                    <>
                      <div style={{ marginLeft: item.id === 11 ? 90 : 40 , marginTop:i.label?-18:0}}>
                        <div >{i.label}</div>
                        <DropDown
                          handleChange={handleChange}
                          options={i.options}
                          enable={i.enable}
                        />
                      </div>
                    </>
                  )
                } else if (i.placeHolder === "date") { 
                  return <div style={{ marginLeft: 40 }}>
                    <DateInput />
                  </div>
                } else if (i.placeHolder === "input") {
                  return <div style={{ marginLeft: 40, color: "black" ,marginTop:i.label?-18:0}}>
                    <div>{i.label}</div>
                    <TextInput
                      size={item.label === "Description" ? 72 : 21}
                      enable={i.enable}
                      placeHolderText={i?.label === "Currency Code" ? currency : i.placeHolderText}
                    />
                  </div>
                } else {
                  return <div style={{ marginLeft: 115 }}>
                    {/* <TextboxWithRadio currencyCode={currencyCode} /> */}
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
