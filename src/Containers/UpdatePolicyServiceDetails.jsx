import React from "react";
import Button from "../Components/Button";
import DropDown from "../Components/DropDown";
import Header from "../Components/Header";
import { updatePolicyServiceDetails, checkCancelAvailability, BaseJson, calculateCancelRefund, calculateCancelRefundArgument } from "../Constants/Constants";
import "../Styles/updateBenefit.css";
import Modal from "react-modal";
import TextInput from "../Components/TextInput";
import { insuredObjs } from "../Constants/JsonSkeleton-BenefitDetails";

const UpdatePolicyServiceDetails = (props) => {
  // const [selectedval, setSelectedVal] = React.useState("");
  const [policyService, setPolicyService] = React.useState("")
  const [freeLockPeriod, setFreeLockPeriod] = React.useState("")
  const [refundApplicable, setRefundApplicabe] = React.useState("")
  const [freeLoackPeriodType, setFreeLockPeriodType] = React.useState("")
  const [textArea, setTextArea] = React.useState("")


  const handleCancelAvailability = () => {
    let cancelObj = {
      "transactionContextRef": [
        "CANCEL-ANY-ALL"
      ],
      "functionName": "checkCancelAvailability",
      "functionBody": "var policyAgeInDays = calculateDaysBetweenDates(policyStartDate, policyCancelDate);var freecancelPrd = 0;if (freelookPeriodUnit = \"M\") {freecancelPrd = freelookPeriod  * 30;} else if (freelookPeriodUnit = \"W\") {freecancelPrd = freelookPeriod  * 7;} else if (freelookPeriodUnit = \"Y\") {freecancelPrd = freelookPeriod  * 365;}else if (freelookPeriodUnit = \"D\") {freecancelPrd = freelookPeriod;}if (policyAgeInDays > freecancelPrd) {this.errorCode = 1007; this.errorMessage = \"The policy cannot be cancelled as it is beyond the freelook period \";return false;} else{return true};",
      "input": [
        {
          "name": "freeLookPeriod",
          "attributeMapping": {
            "domainObjectMapping": null,
            "source": "productOption",
            "productCode": "THIS",
            "attributeName": "freeLookPeriod"
          }
        },
        {
          "name": "freelookPeriodUnit",
          "attributeMapping": {
            "domainObjectMapping": null,
            "source": "productOption",
            "productCode": "THIS",
            "attributeName": "freelookPeriodUnit"
          }
        },
        {
          "name": "policyCancelDate",
          "attributeMapping": {
            "domainObjectMapping": "$..cancelDate",
            "source": null,
            "productCode": "THIS",
            "attributeName": "policyCancelDate"
          }
        },
        {
          "name": "policyStartDate",
          "attributeMapping": {
            "domainObjectMapping": "$..firstIssueDate",
            "source": null,
            "productCode": "THIS",
            "attributeName": "policyStartDate"
          }
        }
      ],
      "output": {
        "name": "planInfo",
        "dataType": "jsonString"
      },
      "order": 0
    }
    let refundObj = {
      "type": "REFUND",
      "functions": [
        {
          "transactionContextRef": [
            "CANCEL-ANY-ALL"
          ],
          "functionName": "F_CalculateCancelRefund",
          "functionBody": "",
          "input": [
          ],
          "output": {
            "name": "planInfo",
            "dataType": "jsonString",
            "attributeMapping": [
              {
                "domainObjectMapping": null,
                "source": "productOption",
                "outputPropertyName": "refundAmount",
                "productCode": "THIS",
                "attributeName": "refundAmount"
              }
            ]
          },
          "order": 0
        }
      ]
    }
    if (props.selectedvalue === "Cancel") {

      let index=-1;
      BaseJson.insuredObjs[0].selectionCriteria.map((item)=>{
        if(item.functionName=="checkCancelAvailability")
        index=0;
      });
      if(index==-1)
      BaseJson.insuredObjs[0].selectionCriteria.push({
        "type": "INCLUSION",
        "functionName": "checkCancelAvailability"
      });
      calculateCancelRefund[0] =textArea
      checkCancelAvailability[0] ="function checkCancelAvailability(freeLookPeriod,freelookPeriodUnitpolicyCancelDate,policyStartDate) {var policyAgeInDays = calculateDaysBetweenDates(policyStartDate, policyCancelDate);var freecancelPrd = 0;if (freelookPeriodUnit = \"M\") {freecancelPrd = freelookPeriod  * 30;} else if (freelookPeriodUnit = \"W\") {freecancelPrd = freelookPeriod  * 7;} else if (freelookPeriodUnit = \"Y\") {freecancelPrd = freelookPeriod  * 365;}else if (freelookPeriodUnit = \"D\") {freecancelPrd = freelookPeriod;}if (policyAgeInDays > freecancelPrd) {this.errorCode = 1007; this.errorMessage = \"The policy cannot be cancelled as it is beyond the freelook period \";return false;} else{return true};}"
      
      if(BaseJson.computes.functionGroups.some((item) => item.type === "REFUND")){} else BaseJson.computes.functionGroups.push(refundObj)
      BaseJson.computes.functionGroups.map((item) => {
        if (item.type === "INCLUSION") {
            if (item.functions.some((item) => item.functionName === "checkCancelAvailability")) {} else item.functions.push(cancelObj)
        }
          if(item.type=== 'REFUND'){
            item.functions.map((i)=>{
              return i.functionBody = `${calculateCancelRefund}`
            })
          }
      })
    }
  }
  const toggleModal = () => {
    console.log("propssstoggle", props)
    props.handleEditPolicy(!props.showPolicyModal);
  };
  const handleRefundChange = (e) => {
    setRefundApplicabe(e.label)

    if (e.label === "yes") {
      setTextArea(`{return totalPremiumPaid;}`)
    }
    if (e.label === "No") {
      setTextArea(`{return 0;}`)
    }
  }
  const handleRefundObject = () => {
    let obj = {
      "name": "totalPremiumPaid",
      "attributeMapping": {
        "domainObjectMapping": "$..productOptions[0].totalPremium",
        "source": null,
        "productCode": "THIS",
        "attributeName": "totalPremiumPaid"
      }
    }
    calculateCancelRefundArgument[0]= "totalPremiumPaid"
    return BaseJson.computes.functionGroups.map((item) => {
      if (item.type === "REFUND") {
        item.functions.map((i) => {
          if(i.input.some((item) => item.name === "totalPremiumPaid") ){} else i.input.push(obj)
        })
      }
    })

  }

  const handleSave = () => {
    handleCancelAvailability()
    if (refundApplicable === "yes") {
      handleRefundObject()
    }
    if (refundApplicable === "NO") {
      BaseJson.computes.functionGroups.map((item) => {
        if (item.type === "REFUND") {
          item.functions.map((i) => {
            if(i.input.some((item) => item.name === "totalPremiumPaid") ){} else {i.input.splice(i.input.findIndex(item => item.name === "totalPremiumPaid"), 1)}
          })
        }
      })
    }
    let param= `function F_CalculateCancelRefund(${calculateCancelRefundArgument.join(",")})`
    BaseJson.computes.allFunctionsDefinitions = BaseJson.computes.allFunctionsDefinitions + `${param}{${calculateCancelRefund.join("")}}`
    toggleModal();
  }


  return (
    console.log("BaseJSON computes",BaseJson.computes, BaseJson.computes.allFunctionsDefinitions),
    <Modal isOpen={true} className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={500}>
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
                          <TextInput
                            size={21}
                            value={item.label === "Policy Service" ? props.selectedvalue : item.label === "Free Look Period" ? freeLockPeriod : null}
                            handleChange={e => item.label === "Free Look Period" ? setFreeLockPeriod(e.target.value) : null}
                            width={subItem.width}
                            isItModalInput={true}
                            enable={item.label == "Policy Service" ? "n" : "y"}
                          />
                        </div>
                      );
                    } else if (subItem.label === "dropdown") {
                      return (
                        <div className="dropdownContainer">
                          <DropDown
                            options={subItem.options}
                            handleChange={e => item.label === "Free Look Period" ? setFreeLockPeriodType(e.label) : item.label === "Refund Applicable" ? handleRefundChange(e) : null}
                            width={subItem.width}
                          />{" "}
                        </div>
                      );
                    } else if (subItem.label === "textField") {
                      return (
                        <div className="policyButtonHeader">
                          <div className="textareaContainer">
                            <textarea className="textArea" rows="5" cols="46" value={textArea} onChange={e=>setTextArea(e.target.value)}/>
                          </div>
                          <div className="buttonPolicy">
                            <button
                              onClick={handleSave}
                              style={{
                                padding: "5px 15px",
                                backgroundColor: "#ED2939",
                                fontWeight: "600",
                                cursor: "pointer",
                                borderRadius: "3px",
                                border: "1px solid black",
                                margin: "8px 5px",
                                color: "whitesmoke"
                              }}
                            >
                              Save
                            </button>
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
    </Modal>
  );
};
export default UpdatePolicyServiceDetails;
