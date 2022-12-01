import React from "react";
import Header from "../Components/Header";
import productDetails from "../Constants/Constants";

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
              <h1>* {item.label}</h1>
              {item.type.map((i) => {
                return (
                  <>
                    <h1>{i.placeHolder}</h1>
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
};
export default ProductDetails;
