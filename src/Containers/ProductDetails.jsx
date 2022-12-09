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
import { BaseJson } from "../Constants/Constants";

const ProductDetails = ({rerender,Setrerender}) => {
  const [value, setValue] = useState('');
//  const [rerender, Setrerender] = useState(false);
  const [currency, setCurrency] = useState("");
  const [category,setCategory]=useState("");
  const [display, setDisplay] = useState(true);
  const [enablePromotionRedemption, setEnablePromotionRedemption] = useState("n");
  const [name,setName]=useState('');
  const [desc,setDesc]=useState('');
  // productDetailsResult.name=name;
  // productDetailsResult.desc=desc;
  console.log("json values", BaseJson.shortName);
  BaseJson.shortName=name;
  BaseJson.fullName=name;
  BaseJson.productDisplayBehaviour.productDisplayName=name;
  BaseJson.desc=desc;
  BaseJson.category=category;
  BaseJson.productDisplayBehaviour.productGroupName=value;
  BaseJson.LBU.distributingCurrency=currency;
  console.log("nameValue",name);
  console.log("descValue",desc);
  console.log("category",category);

  const handleChange = (e) => {
    setValue(e.label);
    console.log("dropdown",e.label);
    Setrerender();
    console.log("selected-value",e);
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
    if(e.label === "Yes" && e.type === "ipa"){
      setEnablePromotionRedemption("y")
    }else {
      setEnablePromotionRedemption("n")
    }
  };
  const handleAccordion = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Header title={"Product Details"} />
        <div >
          <input type="button" onClick={handleAccordion} style={{ padding: 12, width: 60, backgroundColor: "white", borderLeft: '1px solid black', borderBottom: '1px solid black', borderTop: 'none', borderRight: 'none' }} value="-" />
        </div>
      </div>
      {productDetails.map((item) => {
        return (
          <>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                padding: 18,
                display: display ? "flex" : "none",
                marginRight: 20,
                marginLeft: 20,
              }}
            >
              <div style={{ width: 400, textAlign: 'left', fontSize: 16 }}>{item.id + '.' + ' ' + item.label + " "+(item.mandatory === "y" ? '*' : '')}</div>
              {item.type.map((i) => {
                if (i.placeHolder === "dropdown") {
                  return (
                    <>
                      <div style={{ marginLeft: item.id === 11 ? 90 : 40, marginTop: i.label ? -20: 0 }}>
                        <div style={{textAlign:"left"}}>{i.label ? i.label + (i.mandatory === "cm" ? "(*)" : "") : ""}</div>
                        <DropDown
                          handleChange={e=>item.label==="Category"?setCategory(e.label):handleChange(e)}
                          options={i.options}
                          enable={i.label ==="Promotion Redemption"?enablePromotionRedemption:i.enable}
                          width={i.width}
                        />
                      </div>
                    </>
                  )
                } else if (i.placeHolder === "date") {
                  return <div style={{ marginLeft: 40 }}>
                    <DateInput />
                  </div>
                } else if (i.placeHolder === "input") {
                  return <div style={{ marginLeft: 40, color: "black", marginTop: i.label ? -20 : 0 }}>
                    <div style={{textAlign:"left"}}>{i.label ? i.label + (i.mandatory === "cm" ? "(*)" : "") : ""}</div>
                    <TextInput
                      size={item.label === "Description" ? 72 : 21}
                      enable={i.enable}
                      value={item.label==="Name"?name:item.label==="Description"?desc:null}
                      handleChange={e=>item.label==="Name"?setName(e.target.value):item.label==="Description"?setDesc(e.target.value):null}
                      placeHolderText={i?.label === "Currency Code" ? currency : i.placeHolderText}
                    />
                  </div>
                } else {
                  return <div style={{  }}>
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
