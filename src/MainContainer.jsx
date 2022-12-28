import React,{useState} from "react";
import ProductDetails from './Containers/ProductDetails';
import PremiumDetails from './Containers/PremiumDetails';
import BenefitDetails from './Containers/BenefitDetails';
import "./Styles/mainContainer.css";
import { Container } from 'react-bootstrap';
import Validation from './Containers/Validations'
import PolicyServicing from "./Containers/PolicyServicing";
import { BaseJson } from "./Constants/Constants";
import { checkProductAvailability, checkProductAvailabilityArgument } from "./Constants/Constants";

const MainContainer = () => {
  const [download,setDownload]=useState(false);
  const [rerender, Setrerender] = useState(false);
 const handleClick=()=>{
    setDownload(true);
    Setrerender(!rerender);
 };
 const handleComputesAllFunctionsDefinitions = () =>{
  return BaseJson.computes.allFunctionsDefinitions = `function checkProductAvailability(${checkProductAvailabilityArgument.join(",")}){${checkProductAvailability.join("")}}`
}
handleComputesAllFunctionsDefinitions()

const handleComputesFunctionGroupsFunctionBody = () =>{
  return BaseJson.computes.functionGroups.map((item)=>{
    if(item.type === "INCLUSION"){
      item.functions.map((i)=>{
        i.functionBody = `function checkProductAvailability(${checkProductAvailabilityArgument.join(",")}){${checkProductAvailability.join("")}}`
      })
    }
  })
}
handleComputesFunctionGroupsFunctionBody()

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
        <div style={{justifyContent:"flex-end", display:"flex", marginRight:140, marginBottom:50, marginTop:50}}>
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
