import React from "react";
import Button from "../Components/Button";
import DropDown from "../Components/DropDown";
import Header from "../Components/Header";
import { updateBenfitDetails } from "../Constants/Constants";
import "../Styles/updateBenefit.css";

const UpdateBenfitDetails = () => {
  const [selectedval, setSelectedVal] = React.useState("");

  const handleChange = (e) => {
    setSelectedVal(e.value);
  };

  return (
    <div className="updateContainer">
      {" "}
      <Header title="Update Benefit Details" BorderLeft={false} />
      <div className="subUpdateContainer">
        {updateBenfitDetails?.map((item) => (
          <div className="mainCard">
            <div className="card">
              <div className="mainLabel">
                <div className="labelStar">*</div>
                <div>{item.label}</div>
              </div>
              <div className="Field">
                {item.type?.map((subItem) => {
                  if (subItem.label === "input") {
                    return (
                      <div>
                        <input
                          className="input"
                          style={{
                            width: subItem.width,
                          }}
                        />
                      </div>
                    );
                  } else if (subItem.label === "dropdown") {
                    return (
                      <div
                        className="dropdownContainer"
                        style={{ paddingLeft: "30px" }}
                      >
                        <DropDown
                          handleChange={handleChange}
                          width={subItem.width}
                        />{" "}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        ))}
        <div className="buttonheader">
          <Button name="save" />
        </div>
      </div>
    </div>
  );
};
export default UpdateBenfitDetails;
