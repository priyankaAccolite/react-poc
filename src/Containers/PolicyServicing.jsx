import React, { useState } from "react";
import Header from "../Components/Header";
import { policyServicing, applicablePolicyServicing } from "../Constants/Constants";
import DropDown from "../Components/DropDown";
import '../Styles/productDetails.css'
import TextboxWithRadio from "../Components/TextboxWithRadio";
import { BaseJson } from "../Constants/Constants";

const PolicyServicing = () => {

  const [value, setValue] = useState('');
  const [rerender, Setrerender] = useState(false);
  const [display, setDisplay] = useState(true);

  const handleChange = (e) => {
    setValue(e.label);
    Setrerender(!rerender);
    console.log("selected-value", value);
  };

  const handleTransactionContext = () => {
    if (value === "Manual Renew") {
      if (BaseJson.transactionContext.some((item) => item.id === "RENEW-PH-PULSE")) { }
      else {
        if(BaseJson.transactionContext.some((item) => item.id === "RENEW-ANY-ALL"))
        {
          BaseJson.transactionContext.push(
            {
              "id": "RENEW-PH-PULSE",
              "transaction": "RENEW",
              "transactionChannel": "PULSE",
              "transactionRole": "PH"
            })
        }else {
          BaseJson.transactionContext.push({
            "id": "RENEW-ANY-ALL",
            "transaction": "RENEW",
            "transactionRole": "ANY",
            "transactionChannel": "ALL"
          },
            {
              "id": "RENEW-PH-PULSE",
              "transaction": "RENEW",
              "transactionChannel": "PULSE",
              "transactionRole": "PH"
            })
        }
      }

    } else if (value === "Auto Renewal & Cancel Auto Renewal") {
      if (BaseJson.transactionContext.some((item) => item.id === "CANCELAUTORENEW-ANY-ALL")) { }
      else {

        if(BaseJson.transactionContext.some((item) => item.id === "RENEW-ANY-ALL")){
          BaseJson.transactionContext.push({
              "id": "CANCELAUTORENEW-ANY-ALL",
              "transaction": "CANCELAUTORENEW",
              "transactionRole": "ANY",
              "transactionChannel": "ALL"
            })
        }else {
          BaseJson.transactionContext.push({
            "id": "RENEW-ANY-ALL",
            "transaction": "RENEW",
            "transactionRole": "ANY",
            "transactionChannel": "ALL"
          },
            {
              "id": "CANCELAUTORENEW-ANY-ALL",
              "transaction": "CANCELAUTORENEW",
              "transactionRole": "ANY",
              "transactionChannel": "ALL"
            })
        }
      }
      if(BaseJson.attributes.some((item) => item.name === "isAutoRenewAllowed")){}
      else{
        BaseJson.attributes.push(
          {
            "name": "isAutoRenewAllowed",
            "dataType": "boolean",
            "value": true,
            "copyFromAttribute": null,
            "copyToChild": false,
            "behaviours": [
              {
                "transactionContext": {
                  "id": "SALES-ANY-ALL"
                },
                "display": {
                  "hidden": false,
                  "displayIndex": 33,
                  "visibleInCatalog": false,
                  "displayName": "Is Auto Renew Allowed"
                },
                "allowedValues": []
              }
            ]
          }
        )
      }
    } else if (value === "Cancel") {
      if (BaseJson.transactionContext.some((item) => item.id === "CANCEL-ANY-ALL")) { }
      else {
        BaseJson.transactionContext.push({
          "id": "CANCEL-ANY-ALL",
          "transaction": "CANCEL",
          "transactionRole": "ANY",
          "transactionChannel": "ALL"
        },
          {
            "id": "CANCEL-PH-PULSE",
            "transaction": "CANCEL",
            "transactionRole": "PH",
            "transactionChannel": "PULSE"
          })
      }

    } else if (value === "Claims") {
      if (BaseJson.transactionContext.some((item) => item.id === "CLAIMS-ANY-ALL")) { }
      else {
        BaseJson.transactionContext.push({
          "id": "CLAIMS-ANY-ALL",
          "transaction": "CLAIMS",
          "transactionRole": "ANY",
          "transactionChannel": "ALL"
        },
          {
            "id": "MINORCLAIMS-PH-PULSE",
            "transaction": "MINORCLAIMS",
            "transactionRole": "PH",
            "transactionChannel": "PULSE"
          },
          {
            "id": "MAJORCLAIMS-BENEFICARY-PULSE",
            "transaction": "MAJORCLAIMS",
            "transactionRole": "BENEFICARY",
            "transactionChannel": "PULSE"
          })
      }

    } else if (value === "Policy Loan") {
      if (BaseJson.transactionContext.some((item) => item.id === "LOANDISBURSEMENT-ANY-ALL")) { }
      else {
        BaseJson.transactionContext.push({
          "id": "LOANDISBURSEMENT-ANY-ALL",
          "transaction": "LOANDISBURSEMENT",
          "transactionRole": "ANY",
          "transactionChannel": "ALL"
        },
          {
            "id": "LOANREPAYMENT-ANY-ALL",
            "transaction": "LOANREPAYMENT",
            "transactionRole": "ANY",
            "transactionChannel": "ALL"
          },
          {
            "id": "LOANSURRENDER-ANY-ALL",
            "transaction": "LOANSURRENDER",
            "transactionRole": "ANY",
            "transactionChannel": "ALL"
          },
          {
            "id": "POLICYLOAN-ANY-ALL",
            "transaction": "POLICYLOAN",
            "transactionRole": "ANY",
            "transactionChannel": "ALL"
          })
      }

    } else if (value === "Update Beneficiary details") {
      if (BaseJson.transactionContext.some((item) => item.id === "CHANGEBENEFICIARY-PH-PULSE")) { }
      else {
        BaseJson.transactionContext.push({
          "id": "CHANGEBENEFICIARY-PH-PULSE",
          "transaction": "CHANGEBENEFICIARY",
          "transactionRole": "PH",
          "transactionChannel": "PULSE"
        })
      }
    } else if (value === "Reinstatement") {
      if (BaseJson.transactionContext.some((item) => item.id === "REINSTATEMENT-ANY-ALL")) { }
      else {
        BaseJson.transactionContext.push({
          "id": "REINSTATEMENT-ANY-ALL",
          "transaction": "REINSTATEMENT",
          "transactionRole": "ANY",
          "transactionChannel": "ALL"
        })
      }
    } else if (value === "Surrender") {
      if (BaseJson.transactionContext.some((item) => item.id === "SURRENDER-ANY-ALL")) { }
      else {
        BaseJson.transactionContext.push({
          "id": "SURRENDER-ANY-ALL",
          "transaction": "SURRENDER",
          "transactionRole": "ANY",
          "transactionChannel": "ALL"
        })
      }
    } else if (value === "Update Contact details") {
      if (BaseJson.transactionContext.some((item) => item.id === "CHANGECONTACTDETAILS-PH-PULSE")) { }
      else {
        BaseJson.transactionContext.push({
          "id": "CHANGECONTACTDETAILS-PH-PULSE",
          "transaction": "CHANGECONTACTDETAILS",
          "transactionRole": "PH",
          "transactionChannel": "PULSE"
        })
      }

    }
  }

  const handleClick = (e) => {
    if (!applicablePolicyServicing.includes(value))
      applicablePolicyServicing.push(value);
    Setrerender(!rerender);
    handleTransactionContext()
    //console.log("global-array",currencyCode);
  };

  const handleEdit = () => {

  };
  const handleAccordion = () => {
    setDisplay(!display);
    console.log("vijayyyyy", display);
  };

  return (
    console.log("BaseJSON.transactionContext", BaseJson.transactionContext, BaseJson.attributes),
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Header title={"Policy Servicing"} />
        <div >
          <input type="button" onClick={handleAccordion} style={{ padding: 12, width: 60, backgroundColor: "white", borderLeft: '1px solid black', borderBottom: '1px solid black', borderTop: 'none', borderRight: 'none' }} value="-" />
        </div>
      </div>
      {policyServicing.map((item) => {
        return (
          <>
            <div
              style={{
                flexDirection: "row",
                display: display ? "flex" : "none",
                padding: 12,
                marginRight: 20,
                marginLeft: 20,
              }}
            >
              <div style={{ width: 400, textAlign: 'left', fontSize: 16 }}>{item.id + ".  " + item.label}</div>
              {item.type.map((i) => {
                if (i.placeHolder === "dropdown") {
                  return (
                    <>
                      <div style={{ marginLeft: 40 }}>
                        <DropDown handleChange={handleChange} options={i.options} width={i.width} />
                      </div>
                    </>
                  )
                } else if (i.placeHolder === "button") {
                  return <div style={{ marginLeft: 10 }}>
                    <input type="button" value="Add to List" onClick={handleClick} style={{ border: '1px solid black', backgroundColor: "#ED2939", height: 35, borderRadius: 3, width: 75, fontWeight: 'bold', fontSize: 12, color: "whitesmoke" }} />
                  </div>
                }
                else {
                  return <div style={{ display: "flex", flexDirection: "row", marginLeft: 5 }}>
                    <TextboxWithRadio currencyCode={applicablePolicyServicing} fromPolicyServicing={true} />
                    {/* <input type="button" value="Edit" onClick={handleEdit} style={{ border: '1px solid black', backgroundColor: "#ED2939", height: 35, borderRadius: 3, width: 40, marginLeft: 5, fontWeight: 'bold', fontSize: 12, color: "whitesmoke" }} /> */}
                  </div>
                }
              })}
            </div>
          </>
        );
      })}
    </>
  );
}
export default PolicyServicing;
