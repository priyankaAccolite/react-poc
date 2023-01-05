import React,{useState} from "react";
import ProductDetails from './Containers/ProductDetails';
import PremiumDetails from './Containers/PremiumDetails';
import BenefitDetails from './Containers/BenefitDetails';
import "./Styles/mainContainer.css";
import { Container } from 'react-bootstrap';
import Validation from './Containers/Validations'
import PolicyServicing from "./Containers/PolicyServicing";
import { BaseJson } from "./Constants/Constants";
import { checkProductAvailability, checkProductAvailabilityArgument, checkPremium, checkPremiumArgument, checkCancelAvailability , calculateCancelRefund, calculateCancelRefundArgument} from "./Constants/Constants";

const MainContainer = () => {
  const [download,setDownload]=useState(false);
  const [rerender, Setrerender] = useState(false);
 const handleClick=()=>{
    setDownload(true);
    Setrerender(!rerender);
 };
 const handleComputesAllFunctionsDefinitions = () =>{
  console.log("cancellll",calculateCancelRefund,checkCancelAvailability)
  let var1 = `function checkProductAvailability(${checkProductAvailabilityArgument.join(",")})`
  let var2 = "function F_Calculate_Benefit(planName,T_PLANDETAILS){var rows=T_PLANDETAILS.filter(function (elem) {return elem.packageName==planName.toUpperCase()});if (rows.length>0) {return {\"totalSumAssured\": rows[0].sumInsured,\"S00309_SI\": rows[0].S00309_SI};} else{this.errorMessage = \"plan doesnt exist\"; this.errorCode = 1008;}}"
  let var3 = "function F_GetPlans(T_PLANDETAILS){return T_PLANDETAILS;}"
  let var4 =  `function F_calculatePremium(${checkPremiumArgument.join(",")})`
  let param= ""
  if(calculateCancelRefund.length && checkCancelAvailability.length){
    param=`function F_CalculateCancelRefund(${calculateCancelRefundArgument.join(",")})${calculateCancelRefund}${checkCancelAvailability.join("")}`
  }
  
    // BaseJson.computes.allFunctionsDefinitions = BaseJson.computes.allFunctionsDefinitions + `${param}{${calculateCancelRefund.join("")}}`
  return BaseJson.computes.allFunctionsDefinitions = `${var1}{${checkProductAvailability.join("")}}${var2}${var3}${var4}${checkPremium.join("")} ${param}`
}
handleComputesAllFunctionsDefinitions()

const handleComputesFunctionGroupsFunctionBody = () =>{
  return BaseJson.computes.functionGroups.map((item)=>{
    if(item.type === "INCLUSION"){
      item.functions.map((i)=>{
        if(i.functionName === "checkProductAvailability")
        i.functionBody = `${checkProductAvailability.join("")}`
      })
    }
    if(item.type === "PREMIUM"){
      item.functions.map((i)=>{
        i.functionBody = `${checkPremium.join("")}`
      })
    }
  })
}
const handleComputesFUnctionGroupBenefit = () =>{
  let obj = {
    "type": "BENEFIT",
    "functions": [
      {
        "transactionContextRef": [
          "SALES-ANY-ALL"
        ],
        "functionName": "F_Calculate_Benefit",
        "functionBody": "var rows=T_PLANDETAILS.filter(function (elem) {return elem.packageName==planName.toUpperCase()});if (rows.length>0) {return {\"totalSumAssured\": rows[0].sumInsured,\"S00309_SI\": rows[0].S00309_SI};} else{this.errorMessage = \"plan doesnt exist\"; this.errorCode = 1008;}",
        "input": [
          {
            "name": "planName",
            "attributeMapping": {
              "domainObjectMapping": "",
              "source": "productOption",
              "productCode": "THIS",
              "attributeName": "planName"
            }
          },
          {
            "name": "table",
            "tableRef": "T_PLANDETAILS"
          }
        ],
        "output": {
          "name": "planInfo",
          "dataType": "jsonString",
          "attributeMapping": [
            {
              "domainObjectMapping": null,
              "source": "product",
              "outputPropertyName": "totalSumAssured",
              "productCode": "THIS",
              "attributeName": "totalSumAssured"
            },
            {
              "domainObjectMapping": null,
              "source": "productOption",
              "outputPropertyName": "S00309_SI",
              "productCode": "S00309",
              "attributeName": "totalSumAssured"
            },
            {
              "domainObjectMapping": null,
              "source": "productOption",
              "outputPropertyName": "S00312_SI",
              "productCode": "S00312",
              "attributeName": "totalSumAssured"
            }
          ]
        },
        "order": 0
      }
    ]
  }

  return BaseJson.computes.functionGroups.some((item) => item.type === "BENEFIT") ?null :BaseJson.computes.functionGroups.push(obj)
}
const handleComputesPlan = () =>{
  let obj = {
    "type": "EXTERNAL",
    "functions": [
      {
        "transactionContextRef": [
          "SALES-ANY-ALL"
        ],
        "functionName": "F_GetPlans",
        "functionBody": "return T_PLANDETAILS;",
        "input": [
          {
            "name": "table",
            "tableRef": "T_PLANDETAILS"
          }
        ],
        "output": {
          "name": "plans",
          "dataType": "jsonString"
        },
        "order": 0
      }
    ]
}
return BaseJson.computes.functionGroups.some((item) => item.type === "EXTERNAL") ?null :BaseJson.computes.functionGroups.push(obj)
}

handleComputesFunctionGroupsFunctionBody()
handleComputesFUnctionGroupBenefit()
handleComputesPlan()

console.log("BaseJSON main container", BaseJson.attributes, BaseJson.computes.allFunctionsDefinitions)
  return <div>
    <Container style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px' }}>
      <div className="mainContainer">
        <div align="left" style={{ paddingLeft: '10px', fontWeight: 'bold' }}>
          Product RunTime Configurator
        </div>
        <hr style={{ border: '1px solid gray' }} />
        <div className="subContainer"><ProductDetails rerender={rerender} Setrerender={Setrerender} /></div>
        <div className="subContainer"><Validation rerender={rerender} Setrerender={Setrerender} /></div>
        <div className="subContainer"><BenefitDetails /></div>
        <div className="subContainer"><PremiumDetails /></div>
        <div className="subContainer"><PolicyServicing /></div>
        <div style={{justifyContent:"flex-end", display:"flex", marginRight:30, marginBottom:50, marginTop:50}}>
          <a href={ download&&'data:text/json;charset=utf-8,' + JSON.stringify(BaseJson)} download="ModifiedJson.json">
          <input
            type="button"
            value="Generate JSON"
            onClick={handleClick}
            style={{ border: '1px solid black', height: 35, borderRadius: 3, width: 120, fontWeight: 'bold', fontSize: 12, backgroundColor: '#ED2939' , color:"whitesmoke"}}
          />
          </a>
        </div>
      </div>
    </Container>
  </div>;
};
export default MainContainer;
