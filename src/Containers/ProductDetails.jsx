import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import productDetails from "../Constants/Constants";
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

  const options = [
    { value: "Usa", label: "USD" },
    { value: "Hongkong", label: "HKD" },
    { value: "Indonesia", label: "IDR" },
    { value: "Laotion", label: "LAK" },
    { value: "Malaysia", label: "RM" },
    { value: "Myanmar", label: "MMK" },
    { value: "Philiphines", label: "PHP" },
    { value: "Singapore", label: "SGD" },
    { value: "Thailand", label: "THB" },
    { value: "Vietname", label: "VND" },
  ];

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
        console.log("ProductDetails", productDetails);
        return (
          <>
            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                display: "flex",
                padding: 20,
                marginRight: 20,
                marginLeft: 20,
              }}
            >
              <div>* {item.label}</div>
              {item.type.map((i) => {
                if (i.placeHolder === "dropdown") {
                  return (
                    <DropDown handleChange={handleChange} options={options} />
                  );
                } else if (i.placeHolder === "date") {
                  return <DateInput />
                } else if (i.placeHolder === "button") {
                  return <input type="button" value="Add to List" onClick={handleClick} />
                } else if (i.placeHolder === "input") {
                  return <TextInput size={50}/>
                } else {
                  return <TextboxWithRadio currencyCode={currencyCode} />
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
