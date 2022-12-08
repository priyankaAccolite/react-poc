import React, {useState } from "react";
import Header from "../Components/Header";
import {benefitDetails, otherLaValidations} from "../Constants/Constants";
import DropDown from "../Components/DropDown";
import '../Styles/productDetails.css'
import TextboxWithRadio from "../Components/TextboxWithRadio";
import FileUpload from "../Components/FileUpload";
import { applicableBenefits } from "../Constants/Constants";
import TextInput from "../Components/TextInput";

const BenefitDetails = () => {

  const [textValue,setTextValue]=useState('');
  const [value, setValue] = useState('');
  const [rerender, Setrerender] = useState(false);
  const [display,setDisplay]=useState(true);

  const handleTextChange=(e)=>{
     setTextValue(e.target.value);
  };
  const handleChange = (e) => {
    setValue(e.label);
    Setrerender(!rerender);
  };
  const handleClick = (e) => {
    if(e.target.dataset.id){
      let arrayValue=`${value}-${textValue}`;
      if(!otherLaValidations.includes(arrayValue))
      otherLaValidations.push(arrayValue);
      Setrerender(!rerender);
      setTextValue("");
    }
    else{
      if(!applicableBenefits.includes(value))
      applicableBenefits.push(value);
      Setrerender(!rerender);
    }
  };
  const handleEdit=()=>{

  };
  const handleAccordion=()=>{
    setDisplay(!display);
};



  return (
    <>
       <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <Header title={"Benefit Details"} />
      <div >
            <input type="button" onClick={handleAccordion} style={{padding:12,width:60,backgroundColor:"white",borderLeft: '1px solid black', borderBottom: '1px solid black', borderTop: 'none', borderRight: 'none'}} value="-"/>
      </div>
    </div>
      {benefitDetails.map((item) => {
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
                      <div style={{ marginLeft: 24 }}>
                        <DropDown handleChange={handleChange} options={i.options} width = {i.width}/>
                      </div>
                    </>
                  )
                } else if (i.placeHolder === "upload") {
                  return <div style={{ marginLeft: 23 }}>
                    <FileUpload />
                  </div>
                } else if (i.placeHolder === "button") {
                  return <div style={{ marginLeft: 6 }}>
                    <input type="button" value="Add to List" onClick={handleClick} style={{border:'1px solid black', backgroundColor:"#ED2939", height:35, borderRadius:3 ,width:75, fontWeight:'bold', fontSize:12, color: "whitesmoke"}}/>
                  </div>
                } 
                else if (i.placeHolder === "textinputlist") {
                  return <div style={{ display:"flex", flexDirection:"row",marginLeft: 10 }}>
                    <TextInput size="20" value={textValue} handleChange={handleTextChange}/>
                    <input type="button" data-id={item.id} value="Add to List" onClick={handleClick} style={{border:'1px solid black', backgroundColor:"#ED2939", height:35, borderRadius:3 ,width:75, fontWeight:'bold', fontSize:12}}/>
                    <TextboxWithRadio currencyCode={otherLaValidations} />
                  </div>
                } 
                else {
                  return <div style={{display:"flex", flexDirection:"row",marginLeft: 5}}>
                    <TextboxWithRadio currencyCode={applicableBenefits} />
                    <input type="button" value="Edit" onClick={handleEdit} style={{border:'1px solid black', backgroundColor:"#ED2939", height:35, borderRadius:3 ,width:40, marginLeft:5, fontWeight:'bold', fontSize:12, color:"whitesmoke"}}/>
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
