import React, { useState, useEffect } from "react";
import "../Styles/textboxWithRadio.css";
import { BaseJson, applicableExternalValidation, applicableTransactionValidationCheck,applicableExternalValidationJoint, limitAgainstPolicy,applicableTransactionValidationJoint, currencyCode, calculateCancelRefund, checkCancelAvailability, checkProductAvailabilityArgument, calculateCancelRefundArgument, checkProductAvailability, limitAgainstPolicyJoint, applicableTransactionValidation } from '../Constants/Constants';
import UpdateBenfitDetails from "../Containers/UpdateBenfitDetails";
import { insuredObjs_coverages_array } from "../Constants/JsonSkeleton-BenefitDetails";
import UpdatePolicyServiceDetails from "../Containers/UpdatePolicyServiceDetails";
import { limitAgainstPolicySkeleton, transactionValidationSkeleton, } from "../Constants/JsonSkeleton-Validations";
const TextboxWithRadio = (props) => {
  const [value, setValue] = useState('');
  //console.log("global-array",currencyCode);
  const [array, setArray] = useState([]);
  const [rerender, Setrerender] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false)

  const handleClick = () => {
    if (value != "") {
      const index = props.currencyCode.indexOf(value)
      console.log("value of delete", value);
      setArray(props.currencyCode.splice(index, 1));
      Setrerender(!rerender);
    }



    if (props.fromLimitAgainstPolicy) {
      console.log("vijayyyyyyyyyyyyyyyy", value.substring(value.indexOf("-") + 1));
      let index = -1;
      limitAgainstPolicy.map((item) => {
        if (value.substring(value.indexOf("-") + 1) == item) {
          index = limitAgainstPolicy.indexOf(item);
        }
      })

      if (index > -1) {
        limitAgainstPolicy.splice(index, 1);
        let innerIndex = -1;
        let reqValue = "";
        if (value.substring(value.indexOf("-") + 1) == "National ID")
          reqValue = "MaxAllowedPoliciesPerLifeAssuredCheck";
        else if (value.substring(value.indexOf("-") + 1) == "Email")
          reqValue = "MaxAllowedPoliciesPerEmailIdentifier";
        else if (value.substring(value.indexOf("-") + 1) == "F-Name + L-Name + DOB")
          reqValue = "MaxAllowedPoliciesPerUniqueIdentifier";

        limitAgainstPolicySkeleton.tableData.map((item) => {
          if (item["EXTERNAL CHECK NAME"] == reqValue) {
            innerIndex = limitAgainstPolicySkeleton.tableData.indexOf(item);
          }
        })
        if (innerIndex > -1)
          limitAgainstPolicySkeleton.tableData.splice(innerIndex, 1);
        let count = 0;
        limitAgainstPolicySkeleton.tableData.map((item) => {
          if (item["EXTERNAL CHECK NAME"] == "EligibleNationalIdCheck" ||
            item["EXTERNAL CHECK NAME"] == "isBillingCreated" ||
            item["EXTERNAL CHECK NAME"] == "isPaymentNotAuto" ||
            item["EXTERNAL CHECK NAME"] == "MaxBenefitSACheck"
          )
            count++;
        })
        if (count == limitAgainstPolicySkeleton.tableData.length)
          limitAgainstPolicySkeleton.tableData.splice(0, limitAgainstPolicySkeleton.tableData.length);

        count = 0;
        let finalCount = -1;
        BaseJson.computes.tables.map((item) => {
          if (item.tableName == "T_WORKFLOW_EXTERNAL_VALIDATIONS" && limitAgainstPolicy.length > 0) {
            console.log("number1");
            item = limitAgainstPolicySkeleton;
          }
          else if (item.tableName == "T_WORKFLOW_EXTERNAL_VALIDATIONS" && limitAgainstPolicy.length == 0) {
            finalCount = count;
            console.log("number2");
            console.log("kumarrrrr", finalCount);
            applicableExternalValidationJoint.splice(0, applicableExternalValidationJoint.length);
            applicableExternalValidation.splice(0, applicableExternalValidation.length);
            props.Setrerender(!props.rerender);
          }
          count++;
        })
        console.log("kumarrrrr-out", finalCount, finalCount >= 0);
        if (finalCount >= 0) {
          console.log("kumarr-remove");
          BaseJson.computes.tables.splice(finalCount, 1);
          console.log("basejson", BaseJson);
        }
      }
    }





    if (props.fromExternalvalidation) {
      console.log("vijayyyyyyyyyyyyyyyy", value.substring(value.indexOf("-") + 1));
      let index = -1;
      applicableExternalValidation.map((item) => {
        if (value.substring(value.indexOf("-") + 1) == item) {
          index = applicableExternalValidation.indexOf(item);
        }
      })

      if (index > -1) {
        applicableExternalValidation.splice(index, 1);
        index = -1;
        let reqValue = "";
        if (value.substring(value.indexOf("-") + 1) == "Eligible National ID")
          reqValue = "EligibleNationalIdCheck"
        else if (value.substring(value.indexOf("-") + 1) == "Billing Created")
          reqValue = "isBillingCreated";
        else if (value.substring(value.indexOf("-") + 1) == "Payment Not Auto")
          reqValue = "isPaymentNotAuto";
        else if (value.substring(value.indexOf("-") + 1) == "Maximum Benefit SA Check")
          reqValue = "MaxBenefitSACheck";
        limitAgainstPolicySkeleton.tableData.map((item) => {
          console.log("&&&&&&&&&&&&&&&&&&&", limitAgainstPolicySkeleton.tableData, item["EXTERNAL CHECK NAME"], value.substring(value.indexOf("-") + 1));
          if (item["EXTERNAL CHECK NAME"] == reqValue)
            index = limitAgainstPolicySkeleton.tableData.indexOf(item);
        });
        limitAgainstPolicySkeleton.tableData.splice(index, 1);
        // let count=0,finalCount=-1;
        BaseJson.computes.tables.map((item) => {
          if (item.tableName == "T_WORKFLOW_EXTERNAL_VALIDATIONS")
            item = limitAgainstPolicySkeleton;
        });
        //     else if(item.tableName=="T_WORKFLOW_EXTERNAL_VALIDATIONS"&&limitAgainstPolicy.length==0){
        //         finalCount=count;
        //         console.log("kumarrrrr",finalCount);
        //         applicableExternalValidationJoint.splice(0,applicableExternalValidationJoint.length);
        //         applicableExternalValidation.splice(0,applicableExternalValidation.length);
        //         props.Setrerender(!props.rerender);
        //     }
        //     count++;
        // })
        // console.log("kumarrrrr-out",finalCount,finalCount>=0);
        // if(finalCount>=0){
        //   console.log("kumarr-remove");
        //   BaseJson.computes.tables.splice(finalCount,1);
        //   console.log("basejson",BaseJson);
        // }
      }

    }




    if (props.fromapplicableTransaction) {
      console.log("vijayyyyyyyyyyyyyyyy", value,value.substring(value.indexOf("-") + 1));
      if(!value.includes("-")){
        //loan applicable
        let index=-1;
        applicableTransactionValidation.map(item=>{
          if(item==value)
          index=applicableTransactionValidation.indexOf(item);
        });
        if(index>-1)
        applicableTransactionValidation.splice(index,1);
        

        index=-1;
        applicableTransactionValidationJoint.map(item=>{
          if(item==value)
          index=applicableTransactionValidationJoint.indexOf(item);
        });
        if(index>-1)
        applicableTransactionValidationJoint.splice(index,1);
        

        index=-1;
        transactionValidationSkeleton.tableData.map(item=>{
          if(item["EXTERNAL CHECK NAME"]=="IsLoanApplicableForProduct")
          index=transactionValidationSkeleton.tableData.indexOf(item);
        })
        if(index>-1)
        transactionValidationSkeleton.tableData.splice(index,1);
      }
      else{
        //minimum policy

        console.log("helloo",applicableTransactionValidation,applicableTransactionValidationCheck,applicableTransactionValidationJoint);
      let index = -1;
      applicableTransactionValidation.map((item) => {
        if (value.substring(0,value.indexOf("-") ) == item) {
          index = applicableTransactionValidation.indexOf(item);
        }
      })
      if(index>-1)
      applicableTransactionValidation.splice(index,1);

      
      let selectedString=value;
      selectedString=selectedString.substring(value.indexOf("-")+1);
      selectedString=selectedString.substring(selectedString.indexOf("-")+1);


      index = -1;
      applicableTransactionValidationCheck.map((item) => {
        if (item==selectedString) {
          index = applicableTransactionValidationCheck.indexOf(item);
        }
      })
      if(index>-1)
      applicableTransactionValidationCheck.splice(index,1);


      index=-1;
      applicableTransactionValidationJoint.map(item=>{
        if(item==value)
        index=applicableTransactionValidationJoint.indexOf(item);
      });
      if(index>-1)
      applicableTransactionValidationJoint.splice(index,1);


      let reqValue="";
      if(selectedString=="Manual Renew")
      reqValue="RENEW"
      else if(selectedString=="Cancel")
      reqValue="CANCEL"
      else if(selectedString=="Policy Loan")
      reqValue="POLICY LOAN"
      else if(selectedString=="Update Beneficiary Details")
      reqValue="CHANGEBENEFICIARY"
      else if(selectedString=="Reinstatement")
      reqValue="REINSTATEMENT"
      else if(selectedString=="Surrender")
      reqValue="SURRENDER"
      else if(selectedString=="Update Contact Details")
      reqValue="CHANGECONTACTDETAILS"
      index=-1;
      transactionValidationSkeleton.tableData.map(item=>{
        if(item["EXTERNAL CHECK NAME"]=="MinPolicyAgeCheck"&&item["ATTRIBUTE NAME"]==reqValue)
        index=transactionValidationSkeleton.tableData.indexOf(item);
      })
      if(index>-1)
      transactionValidationSkeleton.tableData.splice(index,1);
      console.log("helloo-after",selectedString,applicableTransactionValidation,applicableTransactionValidationCheck,applicableTransactionValidationJoint);
    }
    let index =-1;
    BaseJson.computes.tables.map((item) => {
      if (item.tableName == "T_TRANSACTIONS_EXTERNAL_VALIDATIONS" && applicableTransactionValidation.length > 0) {
        console.log("number1");
        item = transactionValidationSkeleton;
      }
      else if (item.tableName == "T_TRANSACTIONS_EXTERNAL_VALIDATIONS" && applicableTransactionValidation.length == 0) {
          index= BaseJson.computes.tables.indexOf(item);
      }
    });
    if(index>-1)
    BaseJson.computes.tables.splice(index,1);
    }


    if (props.fromPolicyServicing) {
      if (value === "Cancel") {

        let index = -1;
        BaseJson.insuredObjs[0].selectionCriteria.map((item) => {
          if (item.functionName == "checkCancelAvailability") {
            index = BaseJson.insuredObjs[0].selectionCriteria.indexOf(item);
          }
        })
        if (index > -1) {
          BaseJson.insuredObjs[0].selectionCriteria.splice(index, 1);
        }

        BaseJson.computes.functionGroups.map((item) => {
          if (item.type === "INCLUSION") {
            if (item.functions.some((item) => item.functionName === "checkCancelAvailability")) { item.functions.splice(item.functions.findIndex(item => item.functionName === "checkCancelAvailability"), 1) } else { }
          }
        })
        if (BaseJson.computes.functionGroups.some((item) => item.type === "REFUND")) { BaseJson.computes.functionGroups.splice(BaseJson.computes.functionGroups.findIndex(item => item.type === "REFUND"), 1) } else { }
        while (checkCancelAvailability.length > 0) {
          checkCancelAvailability.pop()
        }
        while (calculateCancelRefund.length > 0) {
          calculateCancelRefund.pop()
        }
        while (calculateCancelRefundArgument.length > 0) {
          calculateCancelRefundArgument.pop()
        }
          if(BaseJson.transactionContext.some((item) => item.id === "CANCEL-ANY-ALL")){
            BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "CANCEL-ANY-ALL"), 1)
            BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "CANCEL-PH-PULSE"), 1)
          } else {}

      }
      if (value === "Auto Renewal & Cancel Auto Renewal") {
        if (BaseJson.attributes.some((item) => item.name === "isAutoRenewAllowed")) { BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "isAutoRenewAllowed"), 1) } else { }
        if(props.currencyCode.includes("Manual Renew")){
          if(BaseJson.transactionContext.some((item) => item.id === "CANCELAUTORENEW-ANY-ALL")){
            BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "CANCELAUTORENEW-ANY-ALL"), 1)
          } else {}       
        } else {
          if(BaseJson.transactionContext.some((item) => item.id === "CANCELAUTORENEW-ANY-ALL")){
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "CANCELAUTORENEW-ANY-ALL"), 1)    
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "RENEW-ANY-ALL"), 1)                    
        }
      }
    }
    if (value === "Manual Renew") {
      if(props.currencyCode.includes("Auto Renewal & Cancel Auto Renewal")){
        if(BaseJson.transactionContext.some((item) => item.id === "RENEW-PH-PULSE")){
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "RENEW-PH-PULSE"), 1)
        } else {}       
      } else {
        if(BaseJson.transactionContext.some((item) => item.id === "RENEW-PH-PULSE")){
        BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "RENEW-PH-PULSE"), 1)    
        BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "RENEW-ANY-ALL"), 1)                    
      }
    }
  }
      if(value === "Claims"){
        if(BaseJson.transactionContext.some((item) => item.id === "CLAIMS-ANY-ALL")){
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "CLAIMS-ANY-ALL"), 1)
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "MINORCLAIMS-PH-PULSE"), 1)
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "MAJORCLAIMS-BENEFICARY-PULSE"), 1)
        } else {}
        
      }

      if(value === "Policy Loan"){
        if(BaseJson.transactionContext.some((item) => item.id === "LOANDISBURSEMENT-ANY-ALL")){
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "LOANDISBURSEMENT-ANY-ALL"), 1)
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "LOANREPAYMENT-ANY-ALL"), 1)
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "LOANSURRENDER-ANY-ALL"), 1) 
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "POLICYLOAN-ANY-ALL"), 1) 
        } else {}
      }

      if(value === "Update Beneficiary details"){
        if (BaseJson.transactionContext.some((item) => item.id === "CHANGEBENEFICIARY-PH-PULSE")) { 
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "CHANGEBENEFICIARY-PH-PULSE"), 1)
        } else {}
      }

      if(value === "Reinstatement"){
        if (BaseJson.transactionContext.some((item) => item.id === "REINSTATEMENT-ANY-ALL")) { 
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "REINSTATEMENT-ANY-ALL"), 1)
        } else {}
      }

      if(value == "Surrender"){
        if (BaseJson.transactionContext.some((item) => item.id === "SURRENDER-ANY-ALL")) { 
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "SURRENDER-ANY-ALL"), 1)
        } else {}   
      }

      if(value === "Update Contact details"){
        if (BaseJson.transactionContext.some((item) => item.id === "CHANGECONTACTDETAILS-PH-PULSE")) { 
          BaseJson.transactionContext.splice(BaseJson.transactionContext.findIndex(item => item.id === "CHANGECONTACTDETAILS-PH-PULSE"), 1)
        } else {}   
      }
    }

    if (props.fromOtherLaValidations) {
      if (value.substring(0, 1) === "G") {
        if (BaseJson.attributes.some((item) => item.name === "applicableLaGender")) { BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "applicableLaGender"), 1) } else { }
        BaseJson.computes.functionGroups.map((item) => {
          if (item.type === "INCLUSION") {
            item.functions.map((i) => {
              if (i.input.some((item) => item.name === "applicableLaGender")) { i.input.splice(i.input.findIndex(item => item.name === "applicableLaGender"), 1) } else { }
            })
          }
        })
        checkProductAvailability[4] = ""
        if (checkProductAvailabilityArgument.some((item) => item === "applicableLaGender")) { checkProductAvailabilityArgument.splice(checkProductAvailabilityArgument.findIndex(item => item === "applicableLaGender"), 1) } else { }
        if (checkProductAvailabilityArgument.some((item) => item === "gender")) { checkProductAvailabilityArgument.splice(checkProductAvailabilityArgument.findIndex(item => item === "gender"), 1) } else { }
      }
      if (value.substring(0, 1) === "S") {
        if (BaseJson.attributes.some((item) => item.name === "isSmokerAllowed")) { BaseJson.attributes.splice(BaseJson.attributes.findIndex(item => item.name === "isSmokerAllowed"), 1) } else { }
        BaseJson.computes.functionGroups.map((item) => {
          if (item.type === "INCLUSION") {
            item.functions.map((i) => {
              if (i.input.some((item) => item.name === "isSmokerAllowed")) { i.input.splice(i.input.findIndex(item => item.name === "isSmokerAllowed"), 1) } else { }
            })
          }
        })
        checkProductAvailability[5] = ""
        if (checkProductAvailabilityArgument.some((item) => item === "isSmokerAllowed")) { checkProductAvailabilityArgument.splice(checkProductAvailabilityArgument.findIndex(item => item === "isSmokerAllowed"), 1) } else { }
        if (checkProductAvailabilityArgument.some((item) => item === "smoker")) { checkProductAvailabilityArgument.splice(checkProductAvailabilityArgument.findIndex(item => item === "smoker"), 1) } else { }
      }
    }


    setValue(''); //Confusion
    if (props.fromBenefit) {
      let index = -1;
      BaseJson.components.map((item) => {
        if (item.name == value.substring(7)) {
          index = BaseJson.components.indexOf(item);
        }
      })
      if (index > -1) {
        BaseJson.components.splice(index, 1);
      }

      index = -1;
      insuredObjs_coverages_array.map((item) => {
        if (item.name == value.substring(7)) {
          index = insuredObjs_coverages_array.indexOf(item);
        }
      })
      if (index > -1) {
        insuredObjs_coverages_array.splice(index, 1);
        BaseJson.insuredObjs[0].coverages = insuredObjs_coverages_array;
      }
    }


  };
  const handleEdit = () => {
    console.log("modal", showModal);
    if (value)
      setshowModal(!showModal);
  };

  const handleEditPolicy = () => {
    console.log("modalpolicyy", showPolicyModal);
    if (value)
      setShowPolicyModal(!showPolicyModal);
  };

  return (
    console.log("BaseJSON.attributes", BaseJson.attributes),
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
      {showModal && <UpdateBenfitDetails showModal handleEdit={handleEdit} selectedvalue={value} />}
      {showPolicyModal && <UpdatePolicyServiceDetails showPolicyModal handleEditPolicy={handleEditPolicy} selectedvalue={value} />}
      <div className="viewContainer">
        {props.currencyCode.map(val => {
          return (
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start" }}>
              <input type="radio" id={val} value={val} name="value" checked={value == val ? true : false} onChange={e => { setValue(e.target.value) }} />{val}
            </div>
          );
        })}
      </div>
      <div>
        <input type="button" value="Delete" onClick={handleClick} style={{ border: '1px solid black', height: 35, backgroundColor: "#ED2939", borderRadius: 3, width: 50, fontWeight: 'bold', fontSize: 12, color: "whitesmoke" }} />
      </div>
      {props.fromBenefit && <div>
        <input type="button" value="Edit" onClick={handleEdit} style={{ border: '1px solid black', backgroundColor: "#ED2939", height: 35, borderRadius: 3, width: 40, marginLeft: 5, fontWeight: 'bold', fontSize: 12, color: "whitesmoke" }} />
      </div>}
      {props.fromPolicyServicing && <div>
        <input type="button" value="Edit" disabled={value === "Cancel" ? false : true} onClick={handleEditPolicy} style={{ border: '1px solid black', backgroundColor: "#ED2939", height: 35, borderRadius: 3, width: 40, marginLeft: 5, fontWeight: 'bold', fontSize: 12, color: "whitesmoke" }} />
      </div>}
    </div>
  );
};

export default TextboxWithRadio;
