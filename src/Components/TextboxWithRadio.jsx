import React, { useState, useEffect } from "react";
import "../Styles/textboxWithRadio.css";
import { BaseJson, currencyCode , calculateCancelRefund, checkCancelAvailability, checkProductAvailabilityArgument, calculateCancelRefundArgument} from '../Constants/Constants';
import UpdateBenfitDetails from "../Containers/UpdateBenfitDetails";
import { insuredObjs_coverages_array } from "../Constants/JsonSkeleton-BenefitDetails";
import UpdatePolicyServiceDetails from "../Containers/UpdatePolicyServiceDetails";

const TextboxWithRadio = (props) => {
  const [value, setValue] = useState('');
  //console.log("global-array",currencyCode);
  const [array, setArray] = useState([]);
  const [rerender, Setrerender] = useState(false);
  const [showModal,setshowModal]=useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false)

  const handleClick = () => {
    if (value != "") {
      const index = props.currencyCode.indexOf(value)
      setArray(props.currencyCode.splice(index, 1));
      Setrerender(!rerender);
    }
    setValue('');

    if(props.fromBenefit){
      let index=-1;
      BaseJson.components.map((item)=>{
        if(item.name==value.substring(7)){
          index =  BaseJson.components.indexOf(item);
        }
      })
      if (index > -1) { 
        BaseJson.components.splice(index, 1); 
      }

      index=-1;
      insuredObjs_coverages_array.map((item)=>{
        if(item.name==value.substring(7)){
          index=insuredObjs_coverages_array.indexOf(item);
        }
      })
      if(index>-1){
        insuredObjs_coverages_array.splice(index,1);
        BaseJson.insuredObjs[0].coverages=insuredObjs_coverages_array;
      }
    }
    if(props.fromPolicyServicing){
      BaseJson.computes.functionGroups.map((item) => {
        if (item.type === "INCLUSION") {
          if (item.functions.some((item) => item.functionName === "checkCancelAvailability")) {item.functions.splice(item.functions.findIndex(item => item.functionName === "checkCancelAvailability"), 1)} else {}
        }
      })
      if(BaseJson.computes.functionGroups.some((item)=>item.type === "REFUND")) {BaseJson.computes.functionGroups.splice(BaseJson.computes.functionGroups.findIndex(item => item.type === "REFUND"), 1)} else {}
      while(checkCancelAvailability.length>0) {
        checkCancelAvailability.pop()
      }
      while(calculateCancelRefund.length > 0){
        calculateCancelRefund.pop()
      }
      while(calculateCancelRefundArgument.length>0){
        calculateCancelRefundArgument.pop()
      }
      
    }
  };
 const handleEdit=()=>{
    console.log("modal",showModal);
    if(value)
    setshowModal(!showModal);
  };

  const handleEditPolicy=()=>{
    console.log("modalpolicyy",showPolicyModal);
    if(value)
    setShowPolicyModal(!showPolicyModal);
  };

  return (
    console.log("props.fromPolicyServicing",props.fromPolicyServicing),
    <div style={{ display: "flex", flexDirection: "row", justifyContent:"flex-start" }}>
        {showModal&&<UpdateBenfitDetails showModal handleEdit={handleEdit} selectedvalue={value}/>}
        {showPolicyModal && <UpdatePolicyServiceDetails showPolicyModal handleEditPolicy={handleEditPolicy} selectedvalue={value}/>}
      <div className="viewContainer">
        {props.currencyCode.map(val => {
          return (
            <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"}}>
              <input type="radio" id={val} value={val} name="value" checked={value==val?true:false} onChange={e => {setValue(e.target.value)}} />{val}
            </div>
          );
        })}
      </div>
      <div>
        <input type="button" value="Delete" onClick={handleClick} style={{border:'1px solid black', height:35, backgroundColor:"#ED2939",borderRadius:3 ,width:50, fontWeight:'bold', fontSize:12, color:"whitesmoke"}}/>
      </div>
      {props.fromBenefit&&<div>
      <input type="button" value="Edit" onClick={handleEdit} style={{border:'1px solid black', backgroundColor:"#ED2939", height:35, borderRadius:3 ,width:40, marginLeft:5, fontWeight:'bold', fontSize:12, color:"whitesmoke"}}/>
      </div>}
      {props.fromPolicyServicing&&<div>
      <input type="button" value="Edit" disabled = {value === "Cancel" ? false : true} onClick={handleEditPolicy} style={{border:'1px solid black', backgroundColor:"#ED2939", height:35, borderRadius:3 ,width:40, marginLeft:5, fontWeight:'bold', fontSize:12, color:"whitesmoke"}}/>
      </div>}
    </div>
  );
};

export default TextboxWithRadio;
