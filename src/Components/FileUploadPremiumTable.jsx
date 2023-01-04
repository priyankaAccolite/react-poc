// import React from "react";
// import '../Styles/fileupload.css';
// import { Image } from "react-bootstrap";
// import { Container } from 'react-bootstrap';
// import { useState } from "react";
// import * as XLSX from 'xlsx';
// import { T_PLAN_Details, T_PREMIUM_Details } from "../Constants/JsonSkeleton-BenefitDetails";
// import { BaseJson } from "../Constants/Constants";
// const FileUpload = (props) => {

//     const ImageThumb = ({ image }) => {
//         if ( props.Planfile.name.length > 20) 
//             props.setConcatPlanString(true);
//         // console.log("inside elseeeee",Planfile.type);
//         if (props.Planfile.type == "application/vnd.ms-excel" || props.Planfile.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
//                 excelFileToJSON();
//             return <div>
//                 <Image src={require('../Resources/csv.jpg')} rounded style={{ width: 15, height: 15, marginRight: 10, marginLeft: 5, paddingTop: 5 }} />
//             </div>
//         }
//         else {
//                 props.setPlanfileAccepted(false);
//                 props.setPlanFile("");
//                 props.setConcatPlanString(false);
//                 T_PLAN_Details.tableData = [];
//             return <div></div>
//         }
    
//     };


//     const excelFileToJSON=()=>{
//         try {
//           var reader = new FileReader();
//           reader.readAsBinaryString(props.Planfile);
//           reader.onload = function(e) {

//               var data = e.target.result;
//               var workbook = XLSX.read(data, {
//                   type : 'binary'
//               });
//               var result = {};
//               workbook.SheetNames.forEach(function(sheetName) {
//               var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
//               if (roa.length > 0) {
//                   result[sheetName] = roa;
//               }
//             });
//               //displaying the json result
//              // console.log("result json",JSON.stringify(result, null, 4));
//               props.setPlanJsonResult(JSON.stringify(result, null, 4));
//               let resultData = JSON.parse(props.PlanJsonResult);
//               T_PLAN_Details.tableData=resultData.Sheet1;
//               }
//           }catch(e){
//               console.error(e);
//           }
//     };


//     return (

//       <div>
//                 <Container style={{ display: "flex", flexDirection: "row", height: 20, paddingBottom: '10px' }}>
//                     <div className="uploadContainer">
//                         {props.PlanfileAccepted && <div className="uploadFile">
//                             {props.Planfile && <ImageThumb image={props.Planfile} />}
//                             {props.Planfile && <label >{props.Planfile.name.slice(0, 20)}</label>}
//                             {props.concatPlanString && <label>{"...." + props.Planfile.name.slice(-4)}</label>}
//                         </div>}
//                         <div className="uploadButton">
//                             <label for="upload-photo" id="button" style={{ float: "right", fontWeight: "bold", color: "whitesmoke" }}>Upload</label>
//                             <input type="file" name="photo" id="upload-photo" onChange={props.fromBenefit?props.handlePlanUpload:props.handlePremiumUpload} />
//                         </div>
//                     </div>
//                     <input type="button" value="Delete" style={{ fontWeight: "bold", color: "whitesmoke" }} class="deleteButton" onClick={props.handleDelete} />
//                     <a href={require('../Resources/'+`${props.fileDownloadName}`)} download={`${props.fileDownloadName}`} target="_blank">
//                         <input type="button" value="Template" style={{ fontWeight: "bold", color: "whitesmoke" }} class="templateButton" />
//                     </a>
//                 </Container>
//                 {!props.PlanfileAccepted && <p style={{ color: "red", width: 300 }}>Please upload valid excel files only...</p>}
//             </div>
//     );
//  };
// export default FileUpload;



import React from "react";
import '../Styles/fileupload.css';
import { Image } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import { useState } from "react";
import * as XLSX from 'xlsx';
import { T_PREMIUM_Details } from "../Constants/JsonSkeleton-BenefitDetails";
import { fromPremium,BaseJson } from "../Constants/Constants";
import { useEffect } from "react";
const  FileUploadPremiumTable = (props) => {
    console.log("fromPremium-outside",fromPremium);
    const [Premiumfile, setPremiumFile] = useState("");
    const [concatPremiumString, setConcatPremiumString] = useState(false);
    const [PremiumfileAccepted,setPremiumfileAccepted]=useState(true);
    const [PremiumJsonResult,setPremiumJsonResult]=useState({});

    const handlePremiumUpload = (event) => {
        if(fromPremium.value){
        setPremiumfileAccepted(true);
        setPremiumFile(fromPremium.file);
        }
        // Add code here to upload file to server
    };

    useEffect(() => {
        const timerID = setInterval(() => handlePremiumUpload(),3000)
        return () => {
          clearInterval(timerID)
        }
      }, [])



    const handleClick = () => {
        fromPremium.value=false;
        fromPremium.file={};
            setPremiumFile("");
            T_PREMIUM_Details.tableData=[];
            setConcatPremiumString(false);
                let index=-1;
                BaseJson.computes.tables.map((item)=>{
                  if(item.tableName=="T_PREMIUM_DETAILS"){
                    index = BaseJson.computes.tables.indexOf(item);
                  }
                })
                if (index > -1) { 
                    BaseJson.computes.tables.splice(index, 1); 
                }        
                console.log("in premium delete",BaseJson.computes.tables);
    };

    const ImageThumb = ({ image }) => {
       
        if (Premiumfile.name.length > 20) 
            setConcatPremiumString(true);
       // console.log("inside elseeeee",Planfile.type);
        if (Premiumfile.type == "application/vnd.ms-excel" || Premiumfile.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        {
            excelFileToJSON();
          return <div>
                <Image src={require('../Resources/csv.jpg')} rounded style={{ width: 15, height: 15, marginRight: 10, marginLeft: 5, paddingTop: 5 }} />
            </div>
        }
        else{
                setPremiumfileAccepted(false);
                setPremiumFile("");
                setConcatPremiumString(false);
                T_PREMIUM_Details.tableData=[];
            return <div></div>
        }

    };


    const excelFileToJSON=(table)=>{
       try {
                var reader = new FileReader();
                reader.readAsBinaryString(Premiumfile);
                reader.onload = function(e) {
      
                    var data = e.target.result;
                    var workbook = XLSX.read(data, {
                        type : 'binary'
                    });
                    var result = {};
                    workbook.SheetNames.forEach(function(sheetName) {
                    var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    if (roa.length > 0) {
                        result[sheetName] = roa;
                    }
                  });
                    //displaying the json result
                    //console.log("result json",JSON.stringify(result, null, 4));
                    setPremiumJsonResult(JSON.stringify(result, null, 4));
                    let resultData = JSON.parse(PremiumJsonResult);
                    T_PREMIUM_Details.tableData=resultData.Sheet1;
                    let t_premium_present=false;
              BaseJson.computes.tables.map(item=>{
                if(item.tableName=="T_PREMIUM_DETAILS")
                t_premium_present=true;
              });
              if(!t_premium_present)
              BaseJson.computes.tables.push(T_PREMIUM_Details);
              else{
                BaseJson.computes.tables.map(item=>{
                    if(item.tableName=="T_PREMIUM_DETAILS"){
                        item.tableData=resultData.Sheet1;
                    }
                })
              }
              console.log("in-premium upload", BaseJson.computes.tables);
                    }
                }catch(e){
                    console.error(e);
                }
    };

    return (
       <div>
     <Container style={{display: "flex", flexDirection: "row", height: 20, paddingBottom: '10px' }}>
            <div className="uploadContainer">
                {PremiumfileAccepted&&<div className="uploadFile">
                    {Premiumfile && <ImageThumb image={Premiumfile} />}
                    {Premiumfile && <label >{Premiumfile.name.slice(0, 20)}</label>}
                    {concatPremiumString && <label>{"...." + Premiumfile.name.slice(-4)}</label>}
                </div>}
                <div className="uploadButton">
                    <label for="upload-photo" id="button" style={{ float: "right", fontWeight:"bold" , color:"whitesmoke"}}>Upload</label>
                    <input type="file" name="photo" id="upload-photo" onChange={handlePremiumUpload} />
                </div>
            </div>  
            <input type="button" value="Delete" style={{fontWeight:"bold", color:"whitesmoke"}} class="deleteButton" onClick={handleClick} />
           <a href={require('../Resources/T_PREMIUMDETAILS_TEMPLATE.xlsx')} download="T_PREMIUMDETAILS_TEMPLATE.xlsx" target="_blank">
           <input type="button" value="Template" style={{fontWeight:"bold", color:"whitesmoke"}} class="templateButton"  />
           </a>
        </Container>
        {!PremiumfileAccepted&&<p style={{color:"red",width:500}}>Please upload valid excel files only !<br/>Note: Download the template, edit it as required and upload the file</p>}
        </div>
    );
}

export default FileUploadPremiumTable;








