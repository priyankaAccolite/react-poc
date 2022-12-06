import React from "react";
import Header from "../Components/Header";
import { premiumDetails } from "../Constants/Constants";
import DropDown from "../Components/DropDown";
import "../Styles/premiumDetails.css";

const PremiumDetails = () => {
  const [selectedval, setSelectedVal] = React.useState("");

  const handleChange = (e) => {
    setSelectedVal(e.value);
  };
  return (
    <div>
      <div className="premiumContainer">
        {" "}
        <Header title="Premium Details" BorderLeft={false} />
        <div className="subpremiumContainer">
          {premiumDetails?.map((item) => (
            <div className="premiumCard">
              <div className="premiumsubcard">
                <div className="premiumMainLabel">
                  <div className="premiumLabelStar">{item.id}</div>

                  <div>
                    {item.label} <span>{item.id === 18 ? "*" : "(*)"}</span>
                  </div>
                </div>
                <div className="premiumField">
                  {item.type?.map((subItem) => {
                    console.log(subItem, "subItem");
                    if (subItem.placeHolder === "input") {
                      return (
                        <div>
                          <input
                            className="premiumInput"
                            disabled={subItem.enable === "n"}
                            style={{
                              width: subItem.width,
                              backgroundColor:
                                subItem.enable === "n" && "#f2f2f3",
                            }}
                          />
                        </div>
                      );
                    } else if (subItem.placeHolder === "dropdown") {
                      return (
                        <div
                          className="premiumDropdownContainer"
                          style={{ paddingLeft: "30px" }}
                        >
                          <DropDown
                            handleChange={handleChange}
                            options={subItem.options}
                            width={subItem.width}
                            enable={subItem.enable}
                          />{" "}
                        </div>
                      );
                    } else if (subItem.placeHolder === "textField") {
                      return (
                        <div className="premiumPolicyButtonHeader">
                          <div className="premiumTextareaContainer">
                            <textarea
                              className="premiumTextArea"
                              rows="5"
                              cols="100"
                            />
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PremiumDetails;
