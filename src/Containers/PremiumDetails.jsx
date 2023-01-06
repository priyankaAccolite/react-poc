import React from "react";
import Header from "../Components/Header";
import { checkProductAvailability, premiumDetails } from "../Constants/Constants";
import "../Styles/premiumDetails.css";
import FileUploadPremiumTable from "../Components/FileUploadPremiumTable";
import DropDown2 from "../Components/DropDown2";
import { BaseJson, checkPremium,checkPremiumArgument,calculationBasis } from "../Constants/Constants";

const PremiumDetails = () => {
  const [premiumDetailsData, setPremiumDetailsData] = React.useState(
    JSON.parse(JSON.stringify(premiumDetails))
  );
  const [selectedval, setSelectedVal] = React.useState("");
  const [display, setDisplay] = React.useState(true);
  const [textArea,setTextArea] = React.useState("")  
 
  const handleChange = (index, subIndex = 0, value) => {
    setSelectedVal(value);
    console.log(value,index,subIndex)
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
  premiumDetailsData[0]?.type[0].fieldvalue === "freemium"

  let premiumDetailsEnables = {
    0: "y",
    1: isConstEnabled ? "y" : "n",
    2: isPremValueEnabled ? "y" : "n",
    3: isFreeEnabled ? "y" : "n",
  };
  const handleAccordion = () => {
    setDisplay(!display);
  };
  const handleAttributes = () =>{
    console.log("premiumDetailsData[1]?.type[0].fieldvalue",premiumDetailsData[0]?.type[0].fieldvalue)
      BaseJson.attributes.map((item)=>{
        if(item.name === "totalPremium"){
          if(premiumDetailsData[0]?.type[0].fieldvalue === "free"){
            item.value = 0
          } else if(premiumDetailsData[0]?.type[0].fieldvalue === "premium" || premiumDetailsData[0]?.type[0].fieldvalue === "freemium"){
            item.value = Number(premiumDetailsData[2]?.type[0].fieldvalue)
          }
        }
      })
      if(premiumDetailsData[0]?.type[0].fieldvalue === "freemium" && premiumDetailsData[3]?.type[0].fieldvalue != ""){
        if(BaseJson.attributes.some((item) => item.name === "freeCampaignPeriod")){} else {
          BaseJson.attributes.push({
            "name": "freeCampaignPeriod",
            "dataType": "number",
            "value": "$$value$$",
            "copyFromAttribute": null,
            "copyToChild": false,
            "behaviours": [
              {
                "transactionContext": {
                  "id": "SALES-ANY-ALL"
                },
                "display": {
                  "hidden": true,
                  "displayIndex": 5,
                  "visibleInCatalog": false,
                  "displayName": "freeCampaignPeriod"
                }
              }
            ]
          })
        } 
      } else {
        if(BaseJson.attributes.some((item) => item.name === "freeCampaignPeriod")){
          BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "freeCampaignPeriod"), 1)
        } else {}
      }
      if(premiumDetailsData[0]?.type[0].fieldvalue === "freemium" && premiumDetailsData[3]?.type[1].fieldvalue != ""){
      if(BaseJson.attributes.some((item) => item.name === "freeCampaignPeriodUnit")){} else {
        BaseJson.attributes.push({
          "name": "freeCampaignPeriodUnit",
          "dataType": "string",
          "value": "$$value$$",
          "copyFromAttribute": null,
          "copyToChild": false,
          "behaviours": [
            {
              "transactionContext": {
                "id": "SALES-ANY-ALL"
              },
              "display": {
                "hidden": true,
                "displayIndex": 5,
                "visibleInCatalog": false,
                "displayName": "freeCampaignPeriodUnit"
              }
            }
          ]
        })
      }
      } else {
        if(BaseJson.attributes.some((item) => item.name === "freeCampaignPeriodUnit")){
          BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "freeCampaignPeriodUnit"), 1)
        } else {}
      }
  }
  const handleValueOfFreePeriod = () =>{
    let value0 = Number(premiumDetailsData[3]?.type[0].fieldvalue)
    let value1
    if(premiumDetailsData[3]?.type[1].fieldvalue === "Week(s)"){
      value1 = "W"
    } else if(premiumDetailsData[3]?.type[1].fieldvalue === "Day(s)"){
      value1 = "D"
    } else if(premiumDetailsData[3]?.type[1].fieldvalue === "Year(s)"){
      value1 = "Y"
    } else if(premiumDetailsData[3]?.type[1].fieldvalue === "Month(s)"){
      value1 = "M"
    }
    BaseJson.attributes.map((item)=>{
      if(item.name === "freeCampaignPeriodUnit"){
        item.value = value1
      }
      if(item.name === "freeCampaignPeriod"){
        item.value = value0
      }
    })
  }
  const handlePremiumFrequencyAttribute = () =>{
    BaseJson.attributes.map((item)=>{
      if(item.name=== "premiumFrequency"){
        item.value = premiumDetailsData[4]?.type[0].fieldvalue
      }
    })
  }
  handleAttributes()
  handleValueOfFreePeriod()
  handlePremiumFrequencyAttribute()

  const handleClick = () =>{
    let param
    if(premiumDetailsData[0]?.type[0].fieldvalue==="free" || premiumDetailsData[0]?.type[0].fieldvalue==="freemium"){
      param = `{"totalPremium": 0}`
    } else if (premiumDetailsData[0]?.type[0].fieldvalue==="premium" && premiumDetailsData[1]?.type[0].fieldvalue==="constant"){
      param = `{"totalPremium": totalPremium}`
    } else if(premiumDetailsData[0]?.type[0].fieldvalue==="premium" && premiumDetailsData[1]?.type[0].fieldvalue==="varies with attributes"){
      param = `if (birthDate) {
        var age = ${calculationBasis.join("")}(birthDate);
            var row = T_PREMIUMDETAILS.filter(function (elem) {
                return elem.age == age && elem.packageName.toUpperCase() == planName.toUpperCase() });
            });
            if (row.length > 0) {
                var premiumAmount = Math.round(rowPlan[0].totalPremium * 100 + Number.EPSILON) / 100;
                return {
                    "totalPremium": premiumAmount};
            } else {
                this.errorMessage = "No plans available";
                this.errorCode = 1005;
                return false;
            };
        } 
      else {
        return {
            "totalPremium": 0
        };
      }
    `
    }
    checkPremium[0] = param
    setTextArea(param) 

  }
  const handleFunctionGroup = () =>{
    let obj = {
      "type": "PREMIUM",
      "functions": [
        {
          "transactionContextRef": [
            "SALES-ANY-ALL"
          ],
          "functionName": "F_calculatePremium",
          "functionBody": "",
          "input": [
          ],
          "output": {
            "name": "planInfo",
            "dataType": "jsonString",
            "attributeMapping": [
              {
                "domainObjectMapping": null,
                "source": "product",
                "outputPropertyName": "totalPremium",
                "productCode": "THIS",
                "attributeName": "totalPremium"
              }
            ]
          },
          "order": 0
        }
      ]
    }
    if(BaseJson.computes.functionGroups.some((item) => item.type === "PREMIUM")){}
    else BaseJson.computes.functionGroups.push(obj)
  }
  const handleFunctionGroupInput = () =>{
    let obj = {
      "name": "totalPremium",
      "attributeMapping": {
        "domainObjectMapping": "",
        "source": null,
        "productCode": "THIS",
        "attributeName": "totalPremium"
      }
    }
    let obj1 = {
        "name": "planName",
        "attributeMapping": {
          "domainObjectMapping": null,
          "source": "productOption",
          "productCode": "THIS",
          "attributeName": "planName"
        }
      }
      let obj2 = {
        "name": "birthDate",
        "attributeMapping": {
          "domainObjectMapping": "$..lifeAssured[0].dob",
          "source": null,
          "productCode": "S00304",
          "attributeName": "birthDate"
        }
      }
      
      let obj3 ={
        "name": "table",
        "tableRef": "T_PREMIUMDETAILS"
      }
    
    if(premiumDetailsData[0]?.type[0].fieldvalue==="premium" && premiumDetailsData[1]?.type[0].fieldvalue==="constant"){
      if(checkPremiumArgument.some((item) => item === "totalPremium")){}else checkPremiumArgument.push("totalPremium") 
      BaseJson.computes.functionGroups.map((item)=>{
        if(item.type === "PREMIUM"){
          item.functions.map((i)=>{
            return  i.input.some((items) => items.name === "totalPremium")?null:i.input.push(obj)
          })
        }
      })
    } else {
      if(checkPremiumArgument.some((item) => item === "totalPremium")){checkPremiumArgument.splice(checkPremiumArgument.findIndex(item => item === "totalPremium"), 1)}else {}
      BaseJson.computes.functionGroups.map((item)=>{
        if(item.type === "PREMIUM"){
          item.functions.map((i)=>{
            return  i.input.some((items) => items.name === "totalPremium")?i.input.splice(i.input.findIndex(item => item.name === "totalPremium"), 1):null
          })
        }
      })
    }

    if(premiumDetailsData[0]?.type[0].fieldvalue==="premium" && premiumDetailsData[1]?.type[0].fieldvalue==="varies with attributes"){
      if(checkPremiumArgument.some((item) => item === "planName")){}else checkPremiumArgument.push("planName","birthDate","T_PREMIUMDETAILS") 
      BaseJson.computes.functionGroups.map((item)=>{
        if(item.type === "PREMIUM"){
          item.functions.map((i)=>{
            return  i.input.some((items) => items.name === "planName")?null:i.input.push(obj1,obj2,obj3)
          })
        }
      })
    } else {
      if(checkPremiumArgument.some((item) => item === "planName")){
        checkPremiumArgument.splice(checkPremiumArgument.findIndex(item => item === "planName"), 1)
        checkPremiumArgument.splice(checkPremiumArgument.findIndex(item => item === "birthDate"), 1)
        checkPremiumArgument.splice(checkPremiumArgument.findIndex(item => item === "T_PREMIUMDETAILS"), 1)
      }else {}
      BaseJson.computes.functionGroups.map((item)=>{
        if(item.type === "PREMIUM"){
          item.functions.map((i)=>{
            return  i.input.some((items) => items.name === "planName")?(
              i.input.splice(i.input.findIndex(item => item.name === "planName"), 1),
              i.input.splice(i.input.findIndex(item => item.name === "birthDate"), 1),
              i.input.splice(i.input.findIndex(item => item.name === "T_PREMIUMDETAILS"), 1)
            )
            :null
          })
        }
      })
    }
  }
  handleFunctionGroup()
  handleFunctionGroupInput()
  // checkPremium[0]=textArea
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
                              value={premiumDetailsEnables[index] === "n"? "":subItem.fieldvalue}
                              onChange={(e) =>
                                handleChange(index, subIndex, e?.target?.value)
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
                                cols="102"
                                value={textArea}
                                onChange={e=>setTextArea(e.target.value,checkPremium[0]=textArea)}
                              />
                            </div>
                          </div>
                        );
                      } else if (subItem.placeHolder === "upload") {
                        return (
                          <>
                          <div className="upload">
                            <FileUploadPremiumTable />
                          </div>
                            <input
                              type="button"
                              value="Generate Function"
                              onClick={handleClick}
                              style={{ border: '1px solid black', height: 33, borderRadius: 3, width: 80, fontWeight: 'bold', fontSize: 11, backgroundColor: '#ED2939', color: "whitesmoke" , whiteSpace: "normal", marginLeft:3}}
                            />
                          </>
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
