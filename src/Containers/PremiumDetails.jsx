import React from "react";
import Header from "../Components/Header";
import { premiumDetails } from "../Constants/Constants";
import DropDown from "../Components/DropDown";
import "../Styles/premiumDetails.css";
import FileUpload from "../Components/FileUpload";

const PremiumDetails = () => {
  const [premiumDetailsData, setPremiumDetailsData] = React.useState(
    JSON.parse(JSON.stringify(premiumDetails))
  );
  // console.log(premiumDetails, "premiumDetails");
  const [selectedval, setSelectedVal] = React.useState("");

  const handleChange = (index, subIndex = 0, value) => {
    setSelectedVal(value);
    let _premiumDetailsData = JSON.parse(JSON.stringify(premiumDetailsData));
    _premiumDetailsData[index].type[subIndex].fieldvalue = value;
    setPremiumDetailsData(JSON.parse(JSON.stringify(_premiumDetailsData)));
  };
  let validPremiumTypes = ["premium", "freemium"];
  let validAttribute = "constant";
  let isConstEnabled = validPremiumTypes.includes(
    premiumDetailsData[0]?.type[0].fieldvalue
  );

  let isPremValueEnabled =
    isConstEnabled &&
    premiumDetailsData[1]?.type[0].fieldvalue === validAttribute;

  let isFreeEnabled = isPremValueEnabled;
  let premiumDetailsEnables = {
    0: "y",
    1: isConstEnabled ? "y" : "n",
    2: isPremValueEnabled ? "y" : "n",
    3: isFreeEnabled ? "y" : "n",
  };

  console.log(premiumDetailsData, "premiumDetailsData");
  console.log(premiumDetailsEnables, "premiumDetailsEnables");
  return (
    <div>
      <div className="premiumContainer">
        {" "}
        <Header title="Premium Details" BorderLeft={false} />
        <div className="subpremiumContainer">
          {premiumDetailsData?.map((item, index) => (
            <div className="premiumCard">
              <div className="premiumsubcard">
                <div className="premiumMainLabel">
                  <div className="premiumLabelStar">{item.id}</div>

                  <div>
                    {item.label} <span>{item.id === 18 ? "*" : "(*)"}</span>
                  </div>
                </div>
                <div className="premiumField">
                  {item.type?.map((subItem, subIndex) => {
                    if (subItem.placeHolder === "input") {
                      return (
                        <div>
                          <input
                            className="premiumInput"
                            disabled={premiumDetailsEnables[index] === "n"}
                            style={{
                              width: subItem.width,
                              backgroundColor:
                                (premiumDetailsEnables[index] ??
                                  subItem.enable) === "n" && "#f2f2f3",
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
                            handleChange={(e) =>
                              handleChange(index, subIndex, e?.value)
                            }
                            options={subItem.options}
                            width={subItem.width}
                            enable={
                              premiumDetailsEnables[index] ?? subItem.enable
                            }
                          />
                          {console.log(premiumDetailsEnables[subIndex])}
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
                    } else if (subItem.placeHolder === "upload") {
                      console.log(subItem, "subItm");
                      return (
                        <div className="upload">
                          <FileUpload />
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
