import React from "react";
import Header from "../Components/Header";
import { premiumDetails } from "../Constants/Constants";
import "../Styles/premiumDetails.css";
import FileUpload from "../Components/FileUpload";
import DropDown2 from "../Components/DropDown2";

const PremiumDetails = () => {
  const [premiumDetailsData, setPremiumDetailsData] = React.useState(
    JSON.parse(JSON.stringify(premiumDetails))
  );
  const [selectedval, setSelectedVal] = React.useState("");
  const [display, setDisplay] = React.useState(true);

  const handleChange = (index, subIndex = 0, value) => {
    setSelectedVal(value);
    let _premiumDetailsData = JSON.parse(JSON.stringify(premiumDetailsData));
    _premiumDetailsData[index].type[subIndex].fieldvalue = value;
    if (index === 0) {
      for (var i = 1; i <= 3; i++) {
        _premiumDetailsData[i] = JSON.parse(JSON.stringify(premiumDetails[i]));
      }
    }
    setPremiumDetailsData(JSON.parse(JSON.stringify(_premiumDetailsData)));
  };
  console.log(premiumDetailsData, "premiumDetailsData");
  let validPremiumTypes = ["premium", "freemium"];
  let validAttribute = "constant";
  let validAttribute2 = "varies with attributes";
  let isConstEnabled = validPremiumTypes.includes(
    premiumDetailsData[0]?.type[0].fieldvalue
  );

  let isPremValueEnabled =
    isConstEnabled &&
    premiumDetailsData[1]?.type[0].fieldvalue === validAttribute;

  let isFreeEnabled =
    isConstEnabled &&
    premiumDetailsData[1]?.type[0].fieldvalue === validAttribute2;

  let premiumDetailsEnables = {
    0: "y",
    1: isConstEnabled ? "y" : "n",
    2: isPremValueEnabled ? "y" : "n",
    3: isFreeEnabled ? "y" : "n",
  };
  const handleAccordion = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div>
        <div className="premiumContainer">
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Header title="Premium Details" BorderLeft={false} />

            <div>
              <input
                type="button"
                onClick={handleAccordion}
                style={{
                  padding: 12,
                  width: 60,
                  backgroundColor: "white",
                  borderLeft: "1px solid black",
                  borderBottom: "1px solid black",
                  borderTop: "none",
                  borderRight: "none",
                }}
                value="-"
              />
            </div>
          </div>
          <div
            className="subpremiumContainer"
            style={{
              padding: display ? "0px 40px 0px 0px" : "20px 40px 20px 0px;",
            }}
          >
            {premiumDetailsData?.map((item, index) => (
              <div
                className="premiumCard"
                style={{ display: !display && "none" }}
              >
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
                              value={subItem.fieldvalue}
                              onChange={(e) =>
                                handleChange(index, subIndex, e?.value)
                              }
                            />
                          </div>
                        );
                      } else if (subItem.placeHolder === "dropdown") {
                        return (
                          <div
                            className="premiumDropdownContainer"
                            style={{ paddingLeft: "30px" }}
                          >
                            <DropDown2
                              handleChange={(e) =>
                                handleChange(index, subIndex, e?.value)
                              }
                              options={subItem.options}
                              width={subItem.width}
                              enable={
                                premiumDetailsEnables[index] ?? subItem.enable
                              }
                              value={subItem.fieldvalue}
                            />
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
                                value={subItem.fieldvalue}
                                onChange={(e) =>
                                  handleChange(index, subIndex, e?.value)
                                }
                              />
                            </div>
                          </div>
                        );
                      } else if (subItem.placeHolder === "upload") {
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
    </>
  );
};
export default PremiumDetails;
