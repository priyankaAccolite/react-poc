import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import TextInput from '../Components/TextInput'
import { validation } from '../Constants/Constants'
import DropDown from '../Components/DropDown'
import { limitAgainstPolicy } from '../Constants/Constants'
import { otherLaValidations } from '../Constants/Constants';
import { applicableExternalValidation } from '../Constants/Constants'
import { applicableTransactionValidation } from '../Constants/Constants'
import TextboxWithRadio from "../Components/TextboxWithRadio";
import { BaseJson } from "../Constants/Constants";
import { checkProductAvailability , checkProductAvailabilityArgument} from "../Constants/Constants";

const Validation = () => {
    const [value, setValue] = useState('');
    const [rerender, Setrerender] = useState(false);
    const [display, setDisplay] = useState(true);
    const [textValue, setTextValue] = useState('');
    const [min, setMinValue] = useState('');
    const [max, setMaxValue] = useState('');
    const [count, setCountValue] = useState('');
    const [val1, setval1Value] = useState('');
    const [val2, setval2Value] = useState('');
    const [enable, setEnable] = useState("n")
    const [calculation, setCalculation] = useState('')
    const [lapuc, setlapuc] = useState('')
    const [aev, setaev] = useState('')
    const [atv, setatv] = useState('')
    // const [gendersmokerval, setgendersmokerval] = useState('')

    const handleAgeVariable = () =>{
        let param = ""
        if(calculation === "ANB")
        param = "var age = calculateAgeNextBirthday(birthDate);"
        else if (calculation === "ALB")
        param = "var age = calculateAgeLastBirthday(birthDate);"
        else if(calculation === "ANrB")
        param = "var age = calculateAgeNearestBirthday(birthDate);"
        else if(calculation === "ANBfrD")
        param = "var age = calculateAgeNextBirthdayFromReferenceDate(birthDate);"
        else if(calculation === "ALBfrD")
        param = "var age = calculateAgeLastBirthdayFromReferenceDate(birthDate);"
        checkProductAvailability[1] = param
        
    }
    const handleMin = () => {
        let objmin = {
            "name": "laMinAge",
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
                        "displayName": "laMinAge "
                    }
                }
            ]
        }
        return BaseJson.attributes.some((item) => item.name === "laMinAge") ? null : BaseJson.attributes.push(objmin)
    }
    const handleMax = () => {
        let objmax = {
            "name": "laMaxAge",
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
                        "displayName": "laMaxAge"
                    }
                }
            ]
        }
        return BaseJson.attributes.some((item) => item.name === "laMaxAge") ? null : BaseJson.attributes.push(objmax)
    }
    const handleMaxValue = () => {
        return BaseJson.attributes.map((item) => {
            if (item.name === "laMaxAge") {
                item.value = Number(max)
            }
        })
    }
    const handleMinValue = () => {
        return BaseJson.attributes.map((item) => {
            if (item.name === "laMinAge") {
                item.value = Number(min)
            }
        })
    }
    const handleGenderValue = (textValue) => {
        let param = 'var allowedVal = applicableLaGender.toUpperCase().split(",");var isContained = allowedVal.indexOf(gender.toUpperCase()) > -1;//if (isContained.toString().toUpperCase() == "FALSE"){this.errorMessage = "Product not applicable for the Gender";this.errorCode = 1004;return false;}'
        let obj = {
            "name": "applicableLaGender",
            "attributeMapping": {
              "domainObjectMapping": "",
              "source": null,
              "productCode": "THIS",
              "attributeName": "applicableLaGender"
            }
        }
            BaseJson.attributes.map((item) => {
                if (item.name === "applicableLaGender") {
                    item.value = textValue
                }
            })
        checkProductAvailability[4] = param
        if(checkProductAvailabilityArgument.some((item) => item === "applicableLaGender")){}else checkProductAvailabilityArgument.push("applicableLaGender") 
            if(checkProductAvailabilityArgument.some((item) => item === "gender")){}else checkProductAvailabilityArgument.push("gender") 
        BaseJson.computes.functionGroups.map((item)=>{
            if(item.type === "INCLUSION"){
              item.functions.map((i)=>{
              if (i.input.some((item) => item.name === "applicableLaGender")){} else i.input.push(obj)
              })
            }
          })

    }
    const handleSmokerValue = (textValue) => {
        let param = 'if (isSmokerAllowed.toString().toUpperCase() == "FALSE") {if (smoker.toString().toUpperCase() == "TRUE"){this.errorMessage = "Product not applicable for smokers";this.errorCode = 1003;return false;}}'
        let obj = {
            "name": "isSmokerAllowed",
            "attributeMapping": {
              "domainObjectMapping": "",
              "source": null,
              "productCode": "THIS",
              "attributeName": "isSmokerAllowed"
            }
        }

            BaseJson.attributes.map((item) => {
                if (item.name === "isSmokerAllowed") {
                    item.value = textValue
                }
            })
            checkProductAvailability[5] = param 
            if(checkProductAvailabilityArgument.some((item) => item === "isSmokerAllowed")){}else checkProductAvailabilityArgument.push("isSmokerAllowed") 
            if(checkProductAvailabilityArgument.some((item) => item === "smoker")){}else checkProductAvailabilityArgument.push("smoker") 
            BaseJson.computes.functionGroups.map((item)=>{
                if(item.type === "INCLUSION"){
                  item.functions.map((i)=>{
                  if(i.input.some((item) => item.name === "isSmokerAllowed")){} else i.input.push(obj)
                  })
                }
              })
        

    }

    const handleOtherLaValidation = (textValue) => {
        let smoker = {
            "name": "isSmokerAllowed",
            "dataType": "boolean",
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
                        "displayName": "isSmokerAllowed"
                    }
                }
            ]
        }
        let gender = {
            "name": "applicableLaGender",
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
                        "displayName": "applicableLaGender"
                    }
                }
            ]
        }
        if (value === "Gender") {
            if (BaseJson.attributes.some((item) => item.name === "applicableLaGender")) { } else BaseJson.attributes.push(gender)
            handleGenderValue(textValue)
        } else if (value === "Smoker") {
            if (BaseJson.attributes.some((item) => item.name === "isSmokerAllowed")) { } else BaseJson.attributes.push(smoker)
            handleSmokerValue(textValue)
        } else {

        }
        return BaseJson.attributes
    }
    handleMax()
    handleMaxValue()
    handleMin()
    handleMinValue()
    handleAgeVariable()

    console.log("BaseJSON", BaseJson.attributes, min, max, BaseJson.computes.functionGroups, checkProductAvailabilityArgument)
    BaseJson.computes.functionGroups.map((item)=>{
        if(item.type === "INCLUSION"){
          item.functions.map((i)=>{
         console.log("input",i.input)
          })
        }
      })
    const handleChange = (e) => {
        setValue(e.label);
        Setrerender(!rerender);
        //console.log("selected-value",value);
        if (e.label === "Gender" || e.label === "Smoker") {
            setEnable("y")
        } else {
            setEnable("n")
        }
    };
    const handleClick = (e) => {
        console.log("e.target", e.target.dataset)
        if (e.target.dataset.id === "13") {
            // setgendersmokerval(textValue)
            let arrayValue = `${value}-${textValue}`;
            if (!otherLaValidations.includes(arrayValue))
                otherLaValidations.push(arrayValue);
                handleOtherLaValidation(textValue)
            console.log("otherlaValidation", otherLaValidations, )
            Setrerender(!rerender);
            setTextValue("");
        }
        else if (e.target.dataset.id === "14") {
            if (!limitAgainstPolicy.includes(lapuc)){
                limitAgainstPolicy.push(lapuc);
                console.log("limitAgainstPolicy", limitAgainstPolicy)
            }
                
            Setrerender(!rerender);
        } else if (e.target.dataset.id === "15") {
            if (!applicableExternalValidation.includes(aev))
                applicableExternalValidation.push(aev);
            Setrerender(!rerender);
        } else if (e.target.dataset.id === "16") {
            if (!applicableTransactionValidation.includes(atv))
                applicableTransactionValidation.push(atv);
            Setrerender(!rerender);
        } else {

        }
    }
    const handleAccordion = () => {
        setDisplay(!display);
    };

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Header title={"Validation"} />
                <div >
                    <input type="button" onClick={handleAccordion} style={{ padding: 12, width: 60, backgroundColor: "white", borderLeft: '1px solid black', borderBottom: '1px solid black', borderTop: 'none', borderRight: 'none' }} value="-" />
                </div>
            </div>
            {validation.map((item) => {
                return <>
                    <div
                        style={{
                            flexDirection: "row",
                            display: "flex",
                            padding: 12,
                            display: display ? "flex" : "none",
                            marginRight: 20,
                            marginLeft: 20,

                        }}
                    >
                        <div style={{ width: 400, textAlign: 'left', fontSize: 16 }}>{item.id + '.' + ' ' + item.label + " " + (item.mandatory === "y" ? '*' : '')}</div>
                        {item.type.map((i) => {
                            if (i.placeHolder === "input") {
                                return (
                                    <>
                                        <div style={{ marginRight: i.marginRight ? i.marginRight : 80 }}>
                                            <TextInput
                                                placeHolderText={i.placeHolderText}
                                                value={i.u_id === 1 ? min : i.u_id === 2 ? max : i.u_id === 3 ? textValue : i.u_id === 4 ? count : i.u_id === 5 ? val1 : val2}
                                                handleChange={e => i.u_id === 1 ? setMinValue(e.target.value) : i.u_id === 2 ? setMaxValue(e.target.value) : i.u_id === 3 ? setTextValue(e.target.value) : i.u_id === 4 ? setCountValue(e.target.value) : i.u_id === 5 ? setval1Value(e.target.value) : setval2Value(e.target.value)}
                                                width={i.width}
                                                enable={item.label === "Other LA Validations" ? enable : ""}
                                                data={i.u_id}
                                            />
                                        </div>
                                    </>
                                )
                            } else if (i.placeHolder === "dropdown") {
                                return <>

                                    <div style={{ marginTop: i.label ? -20 : 0, marginRight: i.marginRight ? i.marginRight : 80 , marginLeft: 15}}>
                                        <div style={{ textAlign: "left", marginLeft: "27px" }}>{i.label ? i.label + (i.mandatory === "y" ? "*" : "") : ""}</div>
                                        <DropDown
                                            handleChange={e => item.id === 12 ? setCalculation(e.label) : item.id === 13 ? handleChange(e) : item.id === 14 ? setlapuc(e.label) : item.id === 15 ? setaev(e.label) : setatv(e.label)}
                                            options={i.options}
                                            width={i.width}
                                        />
                                    </div>


                                </>
                            } else if (i.placeHolder === "button") {
                                return <input
                                    type="button"
                                    value="Add to List"
                                    onClick={handleClick}
                                    style={{ border: '1px solid black', height: 35, borderRadius: 3, width: 96, fontWeight: 'bold', fontSize: 12, backgroundColor: '#ED2939', marginLeft: 6, color: "whitesmoke" }}
                                    data-id={item.id}
                                />
                            } else if (i.placeHolder === "dropdownlist1") {
                                return <TextboxWithRadio currencyCode={limitAgainstPolicy} fromLimitAgainstPolicy={true}/>
                            } else if (i.placeHolder === "dropdownlist2") {
                                return <TextboxWithRadio currencyCode={applicableExternalValidation} />
                            } else if (i.placeHolder === "dropdownlist3") {
                                return <TextboxWithRadio currencyCode={applicableTransactionValidation} />
                            } else if (i.placeHolder === "list") {
                                return <TextboxWithRadio currencyCode={otherLaValidations} fromOtherLaValidations={true}/>
                            }
                        })}
                    </div>
                </>
            })}
        </>
    )

}
export default Validation