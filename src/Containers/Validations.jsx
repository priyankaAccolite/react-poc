import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import TextInput from '../Components/TextInput'
import { limitAgainstPolicyJoint, applicableExternalValidationJoint,validation, applicableTransactionValidationJoint } from '../Constants/Constants'
import DropDown from '../Components/DropDown'
import { limitAgainstPolicy } from '../Constants/Constants'
import { otherLaValidations } from '../Constants/Constants';
import { applicableExternalValidation } from '../Constants/Constants'
import { applicableTransactionValidation,applicableTransactionValidationCheck } from '../Constants/Constants'
import TextboxWithRadio from "../Components/TextboxWithRadio";
import { BaseJson } from "../Constants/Constants";
import { checkProductAvailability , checkProductAvailabilityArgument, calculationBasis} from "../Constants/Constants";
import { limitAgainstPolicySkeleton,limitAgainstPolicySkeletonMapper, transactionValidationSkeleton } from '../Constants/JsonSkeleton-Validations'

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
    const [enable, setEnable] = useState("n");
    const [calculation, setCalculation] = useState('');
    const [lapuc, setlapuc] = useState('');
    const [lapucJoint, setlapucJoint] = useState('');
    const [aev, setaev] = useState('');
    const [aevJoint, setaevJoint] = useState('');
    const [atv, setatv] = useState('');
    const [atvTrans, setatvTrans] = useState('');
    const [atvJoint, setatvJoint] = useState('');
    const [disable,setdisable]=useState("y");
    // const [gendersmokerval, setgendersmokerval] = useState('')
    
    const handleAgeVariable = () =>{
        let param = ""
        let cal
        if (calculation === "ANB") {
            param = "var age = calculateAgeNextBirthday(birthDate);"
            calculationBasis[0] = "calculateAgeNextBirthday"
        }

        else if (calculation === "ALB") {
            param = "var age = calculateAgeLastBirthday(birthDate);"
            calculationBasis[0] = "calculateAgeLastBirthday"
        }

        else if (calculation === "ANrB") {
            param = "var age = calculateAgeNearestBirthday(birthDate);"
            calculationBasis[0] = "calculateAgeNearestBirthday"
        }

        else if (calculation === "ANBfrD") {
            param = "var age = calculateAgeNextBirthdayFromReferenceDate(birthDate);"
            calculationBasis[0] = "calculateAgeNextBirthdayFromReferenceDate"
        }

        else if (calculation === "ALBfrD") {
            param = "var age = calculateAgeLastBirthdayFromReferenceDate(birthDate);"
            calculationBasis[0] = "calculateAgeLastBirthdayFromReferenceDate"
        }

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
            if (!otherLaValidations.includes(arrayValue) && textValue!="" ){
                let check =0
                otherLaValidations.map((item)=>{
                    if(item.includes(value)){
                        check =1;
                    }
                })
                if(check==0){otherLaValidations.push(arrayValue)} else {}
            } 
                handleOtherLaValidation(textValue)
            console.log("otherlaValidation", otherLaValidations, )
            Setrerender(!rerender);
            setTextValue("");
        }
        else if (e.target.dataset.id === "14") {
            if (count&&lapuc&&!limitAgainstPolicy.includes(lapuc)){
                limitAgainstPolicy.push(lapuc);
                limitAgainstPolicyJoint.push(lapucJoint);
                let checkName="";
                limitAgainstPolicySkeletonMapper.map((item)=>{
                    if(item.value==lapuc)
                    checkName=item.checkName;
                });
                limitAgainstPolicySkeleton.tableData.push( {
                    "ATTRIBUTE NAME": "maxAllowedPolicies",
                    "ATTRIBUTE VALUE": `${count}`,
                    "EXTERNAL CHECK NAME": `${checkName}`,
                    "TRANSACTION": "SALES"
                });
                let index =-1;
                BaseJson.computes.tables.map((item)=>{
                    if(item.tableName=="T_WORKFLOW_EXTERNAL_VALIDATIONS"){
                       index=0;
                       item=limitAgainstPolicySkeleton;
                    }
                })
                if(index==-1)
                BaseJson.computes.tables.push(limitAgainstPolicySkeleton);
                console.log("limitAgainstPolicy", limitAgainstPolicy)
            }
                
            Setrerender(!rerender);
        } else if (e.target.dataset.id === "15") {
            if (val1&&aev&&!applicableExternalValidation.includes(aev)&&limitAgainstPolicy.length>0){
                applicableExternalValidation.push(aev);
                applicableExternalValidationJoint.push(aevJoint);
                if(limitAgainstPolicySkeleton.tableData.length>0){
                    if(aev=="Eligible National ID"){
                        limitAgainstPolicySkeleton.tableData.push({
                            "ATTRIBUTE NAME": "maxAllowedPolicies",
                            "ATTRIBUTE VALUE": `${val1}`,
                            "EXTERNAL CHECK NAME": "EligibleNationalIdCheck",
                            "TRANSACTION": "SALES"
                        })
                    }
                    else if(aev=="Billing Created"){
                        limitAgainstPolicySkeleton.tableData.push({
                            "ATTRIBUTE NAME": "RENEW",
                            "ATTRIBUTE VALUE": `${val1}`,
                            "EXTERNAL CHECK NAME": "isBillingCreated",
                            "TRANSACTION": "RENEW"
                        });
                    }
                    else if(aev=="Payment Not Auto"){
                        limitAgainstPolicySkeleton.tableData.push({
                            "ATTRIBUTE NAME": "RENEW",
                            "ATTRIBUTE VALUE": `${val1}`,
                            "EXTERNAL CHECK NAME": "isPaymentNotAuto",
                            "TRANSACTION": "RENEW"
                        });
                    }
                    else if(aev=="Maximum Benefit SA Check"){
                        limitAgainstPolicySkeleton.tableData.push({
                            "ATTRIBUTE NAME": "maxAllowedSA",
                            "ATTRIBUTE VALUE": `${val1}`,
                            "ATTRIBUTE CODES": [],
                            "EXTERNAL CHECK NAME": "MaxBenefitSACheck",
                            "TRANSACTION": "SALES"
                        });
                    }
                }
                BaseJson.computes.tables.map((item)=>{
                    if(item.tableName=="T_WORKFLOW_EXTERNAL_VALIDATIONS"){
                       item=limitAgainstPolicySkeleton;
                       console.log("addeddddddddddd",BaseJson);
                    }
                })
                
            }
            Setrerender(!rerender);
        } else if (e.target.dataset.id === "16") {
            if(atv=="Loan Applicable For the Product"&&!applicableTransactionValidation.includes(atv))
            {
                setval2Value('');
                setatvTrans('');
                setdisable("n");
                applicableTransactionValidation.push(atv);
                applicableTransactionValidationJoint.push(atv);
                console.log("applicableTransactionValidationCheck1",applicableTransactionValidation,applicableTransactionValidationCheck);
                transactionValidationSkeleton.tableData.push( {
                    "ATTRIBUTE NAME": "POLICYLOAN",
                    "ATTRIBUTE VALUE": 1,
                    "EXTERNAL CHECK NAME": "IsLoanApplicableForProduct"
                });
            }
            else if (atv!="Loan Applicable For the Product"&&!applicableTransactionValidationCheck.includes(atvTrans)){
                // applicableTransactionValidation.push(atv);
                // applicableTransactionValidationCheck.push(atvTrans);
                // console.log("applicableTransactionValidationCheck",applicableTransactionValidation,applicableTransactionValidationCheck);
            
                
                    if(atv&&atvTrans&&val2){
                        applicableTransactionValidation.push(atv);
                        applicableTransactionValidationCheck.push(atvTrans);
                        console.log("applicableTransactionValidationCheck2",applicableTransactionValidation,applicableTransactionValidationCheck);
                        applicableTransactionValidationJoint.push(atvJoint);
                         let reqValue="";
                        if(atvTrans=="Manual Renew")
                        reqValue="RENEW"
                        else if(atvTrans=="Cancel")
                        reqValue="CANCEL"
                        else if(atvTrans=="Policy Loan")
                        reqValue="POLICY LOAN"
                        else if(atvTrans=="Update Beneficiary Details")
                        reqValue="CHANGEBENEFICIARY"
                        else if(atvTrans=="Reinstatement")
                        reqValue="REINSTATEMENT"
                        else if(atvTrans=="Surrender")
                        reqValue="SURRENDER"
                        else if(atvTrans=="Update Contact Details")
                        reqValue="CHANGECONTACTDETAILS"
                        transactionValidationSkeleton.tableData.push({
                            "ATTRIBUTE NAME": `${reqValue}`,
                            "ATTRIBUTE VALUE": `${val2}`,
                            "ATTRIBUTE CODES": [`${val2}`],
                            "EXTERNAL CHECK NAME": "MinPolicyAgeCheck"
                        })
                    }
            }
            let index =-1;
            BaseJson.computes.tables.map((item)=>{
                if(item.tableName=="T_TRANSACTIONS_EXTERNAL_VALIDATIONS"){
                   index=0;
                   item=transactionValidationSkeleton;
                }
            })
            if(index==-1)
            BaseJson.computes.tables.push(transactionValidationSkeleton);


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
                        <div style={{ width: 400, textAlign: 'left', fontSize: 16 }}>{(parseInt(item.id)-1).toString() + '.' + ' ' + item.label + " " + (item.mandatory === "y" ? '*' : '')}</div>
                        {item.type.map((i) => {
                            if (i.placeHolder === "input") {
                                return (
                                    <>
                                        <div style={{ marginRight: i.marginRight ? i.marginRight : 80 }}>
                                            <TextInput
                                                placeHolderText={i.placeHolderText}
                                                value={i.u_id === 1 ? min : i.u_id === 2 ? max : i.u_id === 3 ? textValue : i.u_id === 4 ? count : i.u_id === 5 ? val1 : val2}
                                                handleChange={e => i.u_id === 1 ? setMinValue(e.target.value) : i.u_id === 2 ? setMaxValue(e.target.value) : i.u_id === 3 ? setTextValue(e.target.value) : i.u_id === 4 ? (setCountValue(e.target.value),setlapucJoint(e.target.value+"-"+lapuc)) : i.u_id === 5 ? (setval1Value(e.target.value),setaevJoint(e.target.value+"-"+aev)) : (setval2Value(e.target.value), setatvJoint(atv+"-"+e.target.value+"-"+atvTrans))}
                                                width={i.width}
                                                enable={item.label === "Other LA Validations" ? enable : item.label=="Applicable Transaction Validations"?disable:""}
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
                                            handleChange={e => item.id === 12 ? setCalculation(e.label) : item.id === 13 ? handleChange(e) : item.id === 14 ? (setlapuc(e.label),setlapucJoint(count+"-"+e.label)) : item.id === 15 ? (setaev(e.label),setaevJoint(val1+"-"+e.label)) : item.id==16&&e.label=="Minimum Policy Age Check"?(setatv(e.label),setdisable("y"),  setatvJoint(e.label+"-"+val2+"-"+atvTrans)):item.id==16&&e.label=="Loan Applicable For the Product"?(setatv(e.label),setdisable("n"),setval2Value(''),setatvJoint(e.label+"-"+val2+"-"+atvTrans)):(setatvTrans(e.label), setatvJoint(atv+"-"+val2+"-"+e.label))}
                                            options={i.options}
                                            width={i.width}
                                            enable={ i.place=="second"?disable:""}
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
                                return <TextboxWithRadio currencyCode={limitAgainstPolicyJoint} fromLimitAgainstPolicy={true}/>
                            } else if (i.placeHolder === "dropdownlist2") {
                                return <TextboxWithRadio currencyCode={applicableExternalValidationJoint} fromExternalvalidation={true} rerender={rerender} Setrerender={Setrerender}/>
                            } else if (i.placeHolder === "dropdownlist3") {
                                return <TextboxWithRadio currencyCode={applicableTransactionValidationJoint} fromapplicableTransaction={true}/>
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