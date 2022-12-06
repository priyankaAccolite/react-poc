import React, {useState } from "react";
import Header from "../Components/Header";
import {policyServicing,applicablePolicyServicing} from "../Constants/Constants";
import DropDown from "../Components/DropDown";
import '../Styles/productDetails.css'
import TextboxWithRadio from "../Components/TextboxWithRadio";

const PolicyServicing = () => {

  const [value, setValue] = useState('');
  const [rerender, Setrerender] = useState(false);
  const [display,setDisplay]=useState(true);
  
  const handleChange = (e) => {
    setValue(e.label);
    Setrerender(!rerender);
    //console.log("selected-value",value);
  };
  const handleClick = (e) => {
      if(!applicablePolicyServicing.includes(value))
      applicablePolicyServicing.push(value);
      Setrerender(!rerender);
    //console.log("global-array",currencyCode);
  };

  const handleEdit=()=>{

  };
  const handleAccordion=()=>{
    setDisplay(!display);
    console.log("vijayyyyy",display);
};



  return (
    <>
       <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <Header title={"Policy Servicing"} />
      <div >
            <input type="button" onClick={handleAccordion} style={{padding:12,width:60,backgroundColor:"white",borderLeft: '1px solid black', borderBottom: '1px solid black', borderTop: 'none', borderRight: 'none'}} value="-"/>
      </div>
    </div>
      {policyServicing.map((item) => {
        return (
          <>
            <div
              style={{
                flexDirection: "row",
                display:display?"flex":"none",
                padding: 12,
                marginRight:20,
                marginLeft:20,
              }}
            >
              <div style={{ width: 400, textAlign: 'left', fontSize: 16 }}>{item.id + ".  " + item.label}</div>
              {item.type.map((i) => {
                if (i.placeHolder === "dropdown") {
                  return (
                    <>
                      <div style={{ marginLeft: 40 }}>
                        <DropDown handleChange={handleChange} options={i.options} />
                      </div>
                    </>
                  )
                }  else if (i.placeHolder === "button") {
                  return <div style={{ marginLeft: 10 }}>
                    <input type="button" value="Add to List" onClick={handleClick} style={{border:'1px solid black', backgroundColor:"#edb525", height:35, borderRadius:3 ,width:75, fontWeight:'bold', fontSize:12}}/>
                  </div>
                } 
                else {
                  return <div style={{display:"flex", flexDirection:"row",marginLeft: 5}}>
                    <TextboxWithRadio currencyCode={applicablePolicyServicing} />
                    <input type="button" value="Edit" onClick={handleEdit} style={{border:'1px solid black', backgroundColor:"#edb525", height:35, borderRadius:3 ,width:40, marginLeft:5, fontWeight:'bold', fontSize:12}}/>
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
export default PolicyServicing;
