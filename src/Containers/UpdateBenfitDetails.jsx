import React from "react";
import DropDown from "../Components/DropDown";
import Header from "../Components/Header";
import { BaseJson, updateBenfitDetails } from "../Constants/Constants";
import "../Styles/updateBenefit.css";
import  Modal  from "react-modal";
import { useState } from "react";
import TextInput from "../Components/TextInput";
import { benefitDetailsSkeleton,insuredObjs_Skeleton,insuredObjs_coverages, insuredObjs_coverages_array} from "../Constants/JsonSkeleton-BenefitDetails"; 
import { globalInsuredObjectsId } from "../Constants/Constants";

const UpdateBenfitDetails = (props) => {
  console.log("props",props);
   const [claimType,setClaimType]=useState("");
   const [waitPeriodInput,setwaitPeriodInput]=useState("");
   //const [waitPeriod,setwaitPeriod]=useState("");
  // const [causeOfEvent,setCauseOfEvent]=useState("");
  // const [claimantRole,setClaimantRole]=useState("");
  // const [benefitType,setBenefitType]=useState("");
  //let claimType="";
  let waitPeriod="";
  let causeOfEvent="";
  let claimantRole="";
  let benefitType="";
  const [error,setError]=useState(false);


  const displayError=()=>{
   setError(true);
  };

  const handleChange = (e,label) => {
    // if(label=="Waiting period"){
    //   setwaitPeriod(waitPeriodInput+e.value);
    // }
    // else if(label=="Allowed Values for cause of event"){
    //  setCauseOfEvent(e.value);
    // }
    // else if(label=="Claimant Role"){
    //  setClaimantRole(e.value);
    // }
    // else if(label=="Benefit Type"){
    //   setBenefitType(e.value);
    // }
    if(label=="Waiting period"){
      waitPeriod=waitPeriodInput+e.value;
    }
    else if(label=="Allowed Values for cause of event"){
      causeOfEvent=e.value;
    }
    else if(label=="Claimant Role"){
      claimantRole=e.value;
    }
    else if(label=="Benefit Type"){
      benefitType=e.value;
    }
  };
  const toggleModal=()=>{
  props.handleEdit(!props.showModal);
  };

  const handleSave=()=>{
    console.log("printteeddddd",props.selectedvalue.substring(7));




    insuredObjs_coverages.id="C000"+`${parseInt(globalInsuredObjectsId.value)+1}`;
    insuredObjs_coverages.name=props.selectedvalue.substring(7);
    if(insuredObjs_coverages.name!=="DeathBenefit")
    insuredObjs_coverages.desc=null;
    else
    insuredObjs_coverages.desc="Protection for your family in case of your death";
    insuredObjs_coverages.code=props.selectedvalue.substring(0,6);
    insuredObjs_coverages.event.name=claimType;
    insuredObjs_coverages.event.eventType=claimType;
    insuredObjs_coverages.indemnities[0].name=props.selectedvalue.substring(7);
    globalInsuredObjectsId.value=(parseInt(globalInsuredObjectsId.value)+1).toString();
    let resultData = JSON.parse(JSON.stringify(insuredObjs_coverages));
    insuredObjs_coverages_array.push(resultData);
     

    console.log("insuredObjs_coverages_array",insuredObjs_coverages_array);
    BaseJson.insuredObjs[0].coverages=insuredObjs_coverages_array;
    console.log(" BaseJson.insuredObjs.coverages", BaseJson.insuredObjs.coverages);
    //BaseJson.insuredObjs.push(insuredObjs_Skeleton);



    benefitDetailsSkeleton.name=props.selectedvalue.substring(7);
    benefitDetailsSkeleton.code=props.selectedvalue.substring(0,6);
    if(benefitDetailsSkeleton.name!=="DeathBenefit")
    benefitDetailsSkeleton.desc=null;
    benefitDetailsSkeleton.behaviours[0].displayName=props.selectedvalue.substring(7);
    benefitDetailsSkeleton.relationshipTypeName=benefitType;
    benefitDetailsSkeleton.attributes.map(item=>{
      if(item.name=="claimTemplateType"){
        item.value=claimType;
      }
      if(item.name=="base_waitingPeriod"){
        item.value=waitPeriod;
      }
      if(item.name=="causeOfDeath"){
        item.behaviours[0].allowedValues[0].displayValue=causeOfEvent;
        item.behaviours[0].allowedValues[0].value=causeOfEvent;
      }
    });
    if(claimType&&waitPeriod&&causeOfEvent&&claimantRole&&benefitType){
    BaseJson.components.push(JSON.parse(JSON.stringify(benefitDetailsSkeleton)));
      toggleModal();
    }
    else
    displayError();
  };

  return (
    <Modal  isOpen={true}  className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={500}>
    <div className="updateContainer">
      {" "}
      <Header title="Update Benefit Details" BorderLeft={false} />
      {error&&<p style={{color:"red",marginBottom:-20,marginLeft:40}}>Please fill all the mandatory fields to proceed</p>}
      <div className="subUpdateContainer">
        {updateBenfitDetails?.map((item, i) => (
          <div className="mainCard">
            <div className="card">
              <div className="mainLabel">
                <div className="labelStar">16.{i + 1}</div>
                <div>{item.label + ' ' +(item.mandatory === "y" ? '*' : '')}</div>
              </div>
              <div className="Field">
                {item.type?.map((subItem) => {
                  if (subItem.label === "input") {
                    return (
                      <div>
                      <TextInput
                      size={21}
                      value={item.label=="Benefit Code"?props.selectedvalue.substring(0,6):item.label=="Benefit Name"?props.selectedvalue.substring(7):item.label=="Claim Template Type"?claimType:item.label=="Waiting period"?waitPeriodInput:null}
                      handleChange={e=>item.label=="Claim Template Type"?setClaimType(e.target.value.toUpperCase()):item.label=="Waiting period"?setwaitPeriodInput(e.target.value):null}
                      width={subItem.width}
                      isItModalInput={true}
                      enable={item.label=="Benefit Code"?"n":"y"}
                     />
                      </div>
                    );
                  } else if (subItem.label === "dropdown") {
                    return (
                      <div
                        className="dropdownContainer"
                        style={{ paddingLeft: "30px" }}
                      >
                        <DropDown
                          options={subItem.options}
                          handleChange={e=>handleChange(e,item.label)}
                          width={subItem.width}
                        />{" "}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        ))}
        <div className="buttonheader">
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
    </div>
    </Modal>
  );
};
export default UpdateBenfitDetails;
