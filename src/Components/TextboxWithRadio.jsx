import React, { useState, useEffect } from "react";
import "../Styles/textboxWithRadio.css";
import { BaseJson, currencyCode } from '../Constants/Constants';
import UpdateBenfitDetails from "../Containers/UpdateBenfitDetails";

const TextboxWithRadio = (props) => {
  const [value, setValue] = useState('');
  //console.log("global-array",currencyCode);
  const [array, setArray] = useState([]);
  const [rerender, Setrerender] = useState(false);
  const [showModal,setshowModal]=useState(false);

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
    }
  };
 const handleEdit=()=>{
    console.log("modal",showModal);
    if(value)
    setshowModal(!showModal);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent:"flex-start" }}>
        {showModal&&<UpdateBenfitDetails showModal handleEdit={handleEdit} selectedvalue={value}/>}
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
    </div>
  );
};

export default TextboxWithRadio;
