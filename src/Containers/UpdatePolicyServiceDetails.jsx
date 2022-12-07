import React from "react";
import Button from "../Components/Button";
import DropDown from "../Components/DropDown";
import Header from "../Components/Header";
import { updatePolicyServiceDetails } from "../Constants/Constants";
import "../Styles/updateBenefit.css";

const UpdatePolicyServiceDetails = () => {
  const [selectedval, setSelectedVal] = React.useState("");

  const handleChange = (e) => {
    setSelectedVal(e.value);
  };
  return (
    <div className="updateContainer">
      {" "}
      <Header title="Update Policy Service Details" BorderLeft={false} />
      <div className="subUpdateContainer">
        {updatePolicyServiceDetails?.map((item, i) => (
          <div className="mainCard">
            <div className="card">
              <div className="mainLabel">
                <div className="labelStar">25.{i + 1}</div>
                <div>{item.label}</div>
              </div>
              <div className="Field">
                {item.type?.map((subItem) => {
                  if (subItem.label === "input") {
                    return (
                      <div>
                        <input className="input" />
                      </div>
                    );
                  } else if (subItem.label === "dropdown") {
                    return (
                      <div className="dropdownContainer">
                        <DropDown
                          handleChange={handleChange}
                          width={subItem.width}
                        />{" "}
                      </div>
                    );
                  } else if (subItem.label === "textField") {
                    return (
                      <div className="policyButtonHeader">
                        <div className="textareaContainer">
                          <textarea className="textArea" rows="5" cols="46" />
                        </div>
                        <div className="buttonPolicy">
                          <Button name="save" />
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
  );
};
export default UpdatePolicyServiceDetails;
