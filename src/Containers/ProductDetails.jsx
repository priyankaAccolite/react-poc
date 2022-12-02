import React, { useEffect, useState } from "react";
import TextboxWithRadio from "../Components/TextboxWithRadio";
import DropDown from "../Components/DropDown";
import '../Styles/productDetails.css'
import { currencyCode } from '../Constants/Constants';

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
    <div >
      <div className="container space-around">
        <label>* Curreny Code</label>
        <DropDown handleChange={handleChange} options={options} />
        <div>
          <input type="button" value="Add to List" onClick={handleClick} />
        </div>
        <TextboxWithRadio currencyCode={currencyCode} />
      </div>
    </div>
  );
};
export default ProductDetails;
