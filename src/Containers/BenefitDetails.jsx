import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import {benefitDetails} from "../Constants/Constants";
import DropDown from "../Components/DropDown";
import '../Styles/productDetails.css'
import TextboxWithRadio from "../Components/TextboxWithRadio";
import { currencyCode } from '../Constants/Constants';
import TextInput from '../Components/TextInput'
import FileUpload from "../Components/FileUpload";
import { applicableBenefits } from "../Constants/Constants";

const BenefitDetails = () => {
  const [value, setValue] = useState('');
  const [rerender, Setrerender] = useState(false);

  const handleChange = (e) => {
    setValue(e.label);
    Setrerender(!rerender);
    //console.log("selected-value",value);
  };
  const handleClick = () => {
    if(!applicableBenefits.includes(value))
    applicableBenefits.push(value);
    Setrerender(!rerender);
    //console.log("global-array",currencyCode);
  };
  const handleEdit=()=>{

  };

  return (
    <>
      <Header title={"Benefit Details"} />
      {benefitDetails.map((item) => {
        return (
          <>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                padding: 12,
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
                } else if (i.placeHolder === "upload") {
                  return <div style={{ marginLeft: 40 }}>
                    <FileUpload />
                  </div>
                } else if (i.placeHolder === "button") {
                  return <div style={{ marginLeft: 10 }}>
                    <input type="button" value="Add to List" onClick={handleClick} style={{border:'1px solid black', backgroundColor:"#edb525", height:35, borderRadius:3 ,width:75, fontWeight:'bold', fontSize:12}}/>
                  </div>
                } 
                else {
                  return <div style={{display:"flex", flexDirection:"row",marginLeft: 5}}>
                    <TextboxWithRadio currencyCode={applicableBenefits} />
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
export default BenefitDetails;
