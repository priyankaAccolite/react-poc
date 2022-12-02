import React from "react";
import Header from "../Components/Header";
import productDetails from "../Constants/Constants";
import DropDown from "../Components/DropDown";
import DateInput from "../Components/DateInput";
import Button from "../Components/Button";

const ProductDetails = () => {
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
                    <DropDown />
                  );
                } else if (i.placeHolder === "date") {
                  return <DateInput />
                } else if(i.placeHolder === "button"){
                  return <Button name="Add To List"/>
                } else if(i.placeHolder === "input"){
                  return <input></input>
                }
              })}
            </div>
          </>
        );
      })}
    </>
  );
};
export default ProductDetails;
