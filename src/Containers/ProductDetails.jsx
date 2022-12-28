import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { productDetails } from "../Constants/Constants";
import DropDown from "../Components/DropDown";
import DateInput from "../Components/DateInput";
import Button from "../Components/Button";
import '../Styles/productDetails.css'
import TextboxWithRadio from "../Components/TextboxWithRadio";
// import { currencyCode } from '../Constants/Constants';
import TextInput from '../Components/TextInput'
import { BaseJson } from "../Constants/Constants";
import { checkProductAvailability , checkProductAvailabilityArgument} from "../Constants/Constants";

const ProductDetails = ({ rerender, Setrerender }) => {
  // let checkProductAvailability = ""
  const [value, setValue] = useState('');
  //  const [rerender, Setrerender] = useState(false);
  const [pickedDate, setPickedDate] = useState("");
  const [currency, setCurrency] = useState("");
  const [category, setCategory] = useState("");
  const [display, setDisplay] = useState(true);
  const [enablePromotionRedemption, setEnablePromotionRedemption] = useState("n");
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [mnoba, setMnoba] = useState('')
  const [pCode, setPcode] = useState('S99999')
  const [ptotp, setptotp] = useState('')
  const [isPa, setisPa] = useState('')
  const [promotionR, setPromotionR] = useState('')
  const [petc, setPetc] = useState('')
  const [ymwd, setymwd] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const handleMinor = () => {
    let obj = {
      "name": "isMinor",
      "dataType": "boolean",
      "value": null,
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
            "displayName": "isMinor"
          }
        }
      ]
    }
    let param = 'if (isMinor.toString().toUpperCase() == "TRUE") {if (age >= laMinAge && age <= 17) {return true;} else {this.errorMessage = "Age should be within /"+ laMinAge +/" to 17 years for a minor.";this.errorCode = 1000;return false;}}if (isMinor.toString().toUpperCase() == "FALSE") {if (age >= 18 && age <= laMaxAge) {return true;} else {this.errorMessage = "Age should be within 18 to /"+ laMaxAge +/" years for an adult";this.errorCode = 1001;return false;}} else {this.errorMessage = "Please define isMinor value properly";this.errorCode = 1002;return false;}'
    let str = 'if (age >= laMinAge && age <= laMaxAge) {return true;} else {this.errorMessage = "Age should be within /"+ laMinAge +/" to /"+ laMaxAge +/" years for an adult";this.errorCode = 1001;return false;}'
    if(petc === "Yes"){
        checkProductAvailability[2]=param
        if(checkProductAvailabilityArgument.some((item) => item.name === "isMinor")){}else checkProductAvailabilityArgument.push("isMinor") 

    }
    if(petc === "No"){
      checkProductAvailability[2]=str
    }
    return petc === "Yes" ? BaseJson.attributes.some((item) => item.name === "isMinor") ? null : BaseJson.attributes.push(obj) : BaseJson.attributes.some((item) => item.name === "isMinor") ? BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "isMinor"), 1) : null
  }
  const handleBeneficiary = () => {
    return BaseJson.attributes.map((item) => {
      if (item.name === "noOfBeneficiaries") {
        item.value = Number(mnoba)
      }
    })
  }
  const handlePromotion = () => {
    let promoObjFull = {
      "name": "promoFullRedemption",
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
            "hidden": true,
            "displayIndex": 5,
            "visibleInCatalog": false,
            "displayName": "promoFullRedemption"
          }
        }
      ]
    }
    let promoObjPartial = {
      "name": "promoFullRedemption",
      "dataType": "boolean",
      "value": false,
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
            "displayName": "promoFullRedemption"
          }
        }
      ]
    }
    console.log("promotion", BaseJson.attributes, isPa, promotionR)
    // return isPa === "Yes" && promotionR === "Full" ? BaseJson.attributes.some((item) => item.name === "promoFullRedemption") ? null : BaseJson.attributes.push(promoObjFull) : isPa === "Yes" && promotionR === "Partial" ? BaseJson.attributes.some((item) => item.name === "promoFullRedemption") ? BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "promoFullRedemption")) && BaseJson.attributes.push(promoObjPartial) : BaseJson.attributes.push(promoObjPartial) : BaseJson.attributes.some((item) => item.name === "promoFullRedemption") ? BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "promoFullRedemption"), 1) : null
    if (isPa === "Yes") {
      if (promotionR === "Full") {
        BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "promoFullRedemption"), 1)
        BaseJson.attributes.push(promoObjFull)
      } else if (promotionR === "Partial") {
        BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "promoFullRedemption"), 1)
        BaseJson.attributes.push(promoObjPartial)
      }
    } else if (isPa === "No") {
      BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "promoFullRedemption"), 1)
    }
    return BaseJson.attributes
  }
  const handlePolicyTerm = () => {
    return BaseJson.attributes.map((item) => {
      if (item.name === "policyTerm") {
        item.value = Number(ptotp)
      }
    })
  }
  const handlePolicyTermUnit = () => {
    return BaseJson.attributes.map((item) => {
      if (item.name === "policyTermUnit") {
        item.value = ymwd === "Week(s)" ? "W" : ymwd === "Year(s)" ? "Y" : ymwd === "Day(s)" ? "D" : "M"
      }
    })
  }
  const handleDate = () => {
    let obj = {
      "name": "saleCoverageEndDate",
      "dataType": "string",
      "value": "$$Value$$",
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
            "displayName": "saleCoverageEndDate"
          }
        }
      ]
    }
    return BaseJson.attributes.some((item) => item.name === "saleCoverageEndDate") ? null : pickedDate != "" ? BaseJson.attributes.push(obj) : null
  }
  const handleDateValue = () => {
    let param = "var diffBetweenDates = calculateActualDaysBetweenDates(new Date().toISOString().split('T')[0],saleCoverageEndDate); if(diffBetweenDates<0) { this.errorMessage = \"Product is Not available\"; this.errorCode = 1002; return false; }"
    if(pickedDate != "" ){
      BaseJson.attributes.map((item) => {
        if (item.name === "saleCoverageEndDate") {
          item.value = pickedDate.toLocaleDateString('sv')
        }
      })
      checkProductAvailability[0]=param
      if(checkProductAvailabilityArgument.some((item) => item.name === "saleCoverageEndDate")){}else checkProductAvailabilityArgument.push("saleCoverageEndDate") 
    }  

  }
  const handlePromoCode = () => {
    let promoobj = {
      "name": "promotionCategory",
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
            "displayName": "promotionCategory"
          }
        }
      ]
    }
    if (isPa === "Yes") {
      if (BaseJson.attributes.some((item) => item.name === "promotionCategory")) { } else BaseJson.attributes.push(promoobj)

    } else if (isPa === "No") {
      if (BaseJson.attributes.some((item) => item.name === "promotionCategory")) { BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "promotionCategory"), 1) } else { }
    }
    return BaseJson.attributes
  }

  const handlePromoCodeValue = () => {
    return BaseJson.attributes.map((item) => {
      if (item.name === "promotionCategory") {
        item.value = promoCode != "" ? promoCode : "S99999"
      }
    })
  }

  const handleComputesSales = () =>{
    let obj = 	{
      "name": "saleCoverageEndDate",
      "attributeMapping": {
        "domainObjectMapping": "",
        "source": null,
        "productCode": "THIS",
        "attributeName": "saleCoverageEndDate"
      }
    }
       if(pickedDate != "" ) {
        BaseJson.computes.functionGroups.map((item)=>{
          if(item.type === "INCLUSION"){
            item.functions.map((i)=>{
            return  i.input.some((items) => items.name === "saleCoverageEndDate")?null:i.input.push(obj)
            })
          }
        }) 
       }

  }
  const handleComputesMinor = () =>{
    let obj = {
      "name": "isMinor",
      "attributeMapping": {
        "domainObjectMapping": "",
        "source": null,
        "productCode": "THIS",
        "attributeName": "isMinor"
      }
    }
     BaseJson.computes.functionGroups.map((item)=>{
      if(item.type === "INCLUSION"){
        item.functions.map((i)=>{
         return petc === "Yes" ? i.input.some((items) => items.name === "isMinor")?null : i.input.push(obj): i.input.some((items) => items.name === "isMinor") ? i.input.splice(i.input.findIndex(item => item.name === "isMinor"), 1) : null
        })
      }
    })
  }
  BaseJson._id = `PRODUCT_DEFINITION//${pCode}/A.1`
  BaseJson.code = pCode
  BaseJson.shortName = name;
  BaseJson.fullName = name;
  BaseJson.productDisplayBehaviour.productDisplayName = name;
  BaseJson.effectiveFrom = Date.now()
  BaseJson.effectiveTo = Date.now() + 10
  BaseJson.desc = desc;
  BaseJson.category = category;
  BaseJson.productDisplayBehaviour.productGroupName = value;
  BaseJson.LBU.distributingCurrency = currency;
  handleMinor()
  handleBeneficiary()
  handlePromotion()
  handlePolicyTerm()
  handlePolicyTermUnit()
  handleDate()
  handleDateValue()
  handlePromoCode()
  handlePromoCodeValue()
  handleComputesSales()
  handleComputesMinor()

  console.log("BaseJSON", BaseJson, BaseJson.attributes.length, BaseJson.attributes, BaseJson.computes.allFunctionsDefinitions)

  const handleChange = (e) => {
    setValue(e.label);
    console.log("dropdown", e.label);
    Setrerender();
    console.log("selected-value", e);
    if (e.label === "Cambodia") {
      setCurrency("USD")
    } else if (e.label === "HongKong") {
      setCurrency("HKD")
    } else if (e.label === "Indonesia") {
      setCurrency("IDR")
    } else if (e.label === "Laos") {
      setCurrency("LAK")
    } else if (e.label === "Malaysia") {
      setCurrency("RM")

    } else if (e.label === "Myanmar") {
      setCurrency("MMK")
    } else if (e.label === "Philippines") {
      setCurrency("PHP")
    } else if (e.label === "Singapore") {
      setCurrency("SGD")
    } else if (e.label === "Thailand") {
      setCurrency("THB")
    } else if (e.label === "Vietnam") {
      setCurrency("VND")
    } else {
      setCurrency("")
    }
  };
  const handleAccordion = () => {
    setDisplay(!display);
  };
  const promoRedemption = (e) => {
    if (e.label === "Full" || e.label === "Partial") {
      setPromotionR(e.label)
      setEnablePromotionRedemption("y")
    }
    else { }

    if (e.label === "Yes" && e.type === "ipa") {
      setisPa(e.label)
      setEnablePromotionRedemption("y")
    }

    if (e.label === "No" && e.type === "ipa") {
      setisPa(e.label)
      setEnablePromotionRedemption("n")
      setPromotionR("")

    }
  }
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Header title={"Product Details"} />
        <div >
          <input type="button" onClick={handleAccordion} style={{ padding: 12, width: 60, backgroundColor: "white", borderLeft: '1px solid black', borderBottom: '1px solid black', borderTop: 'none', borderRight: 'none' }} value="-" />
        </div>
      </div>
      {productDetails.map((item) => {
        return (
          <>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                padding: 18,
                display: display ? "flex" : "none",
                marginRight: 20,
                marginLeft: 20,
              }}
            >
              <div style={{ width: 400, textAlign: 'left', fontSize: 16 }}>{item.id + '.' + ' ' + item.label + " " + (item.mandatory === "y" ? '*' : '')}</div>
              {item.type.map((i) => {
                if (i.placeHolder === "dropdown") {
                  return (
                    <>
                      <div style={{ marginLeft: item.id === 11 ? 90 : 40, marginTop: i.label ? -20 : 0 }}>
                        <div style={{ textAlign: "left" }}>{i.label ? i.label + (i.mandatory === "cm" ? "(*)" : "") : ""}</div>
                        <DropDown
                          handleChange={e => item.label === "Category" ? setCategory(e.label) : item.id === 8 ? setPetc(e.label) : item.id === 10 ? setymwd(e.label) : item.id === 7 ? promoRedemption(e) : handleChange(e)}
                          options={i.options}
                          enable={i.label === "Promotion Redemption" ? enablePromotionRedemption : i.enable}
                          width={i.width}
                        />
                      </div>
                    </>
                  )
                } else if (i.placeHolder === "date") {
                  return <div style={{ marginLeft: 40 }}>
                    <DateInput pickDate={pickedDate} setPickDate={e => setPickedDate(e)} />
                  </div>
                } else if (i.placeHolder === "input") {
                  return <div style={{ marginLeft: 40, color: "black", marginTop: i.label ? -20 : 0 }}>
                    <div style={{ textAlign: "left" }}>{i.label ? i.label + (i.mandatory === "cm" ? "(*)" : "") : ""}</div>
                    <TextInput
                      size={item.label === "Description" ? 72 : 21}
                      enable={i.label === "Promotion Code" ? enablePromotionRedemption : i.enable}
                      value={item.label === "Name" ? name : item.label === "Description" ? desc : item.id === 9 ? mnoba : item.id === 1 ? pCode : item.id === 10 ? ptotp : item.id === 7 ? promoCode : null}
                      handleChange={e => item.label === "Name" ? setName(e.target.value) : item.label === "Description" ? setDesc(e.target.value) : item.id === 9 ? setMnoba(e.target.value) : item.id === 1 ? setPcode('S99999') : item.id === 10 ? setptotp(e.target.value) : item.id === 7 ? setPromoCode(e.target.value) : null}
                      placeHolderText={i?.label === "Currency Code" ? currency : i.placeHolderText}
                      width={i.width}
                    />
                  </div>
                } else {
                  return <div style={{}}>
                    {/* <TextboxWithRadio currencyCode={currencyCode} /> */}
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
export default ProductDetails;
