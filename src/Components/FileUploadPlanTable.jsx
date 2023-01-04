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
import { T_PLAN_Details } from "../Constants/JsonSkeleton-BenefitDetails";
import { BaseJson, fromPremium } from "../Constants/Constants";
const  FileUploadPlanTable = (props) => {

    const [Planfile, setPlanFile] = useState("");
    const [concatPlanString, setConcatPlanString] = useState(false);
    const [PlanfileAccepted,setPlanfileAccepted]=useState(true);
    const [PlanJsonResult,setPlanJsonResult]=useState({});
     console.log("fromPremium-plan",fromPremium);
    const handlePlanUpload = (event) => {
        console.log("event-plan-upload",event.target.files);
        if(event.target.files[0].name.startsWith("T_PLAN")){
        setPlanfileAccepted(true);
        setPlanFile(event.target.files[0]);
        }
        else if(event.target.files[0].name.startsWith("T_PRE")){
            fromPremium.value=true;
            fromPremium.file=event.target.files[0];
        }
        // Add code here to upload file to server
    };

    const handleClick = () => {
        setPlanFile("");
        T_PLAN_Details.tableData=[];
        setConcatPlanString(false);
            let index=-1;
            BaseJson.computes.tables.map((item)=>{
              if(item.tableName=="T_PLANDETAILS"){
                index = BaseJson.computes.tables.indexOf(item);
              }
            })
            if (index > -1) { 
                BaseJson.computes.tables.splice(index, 1); 
            }         
            console.log("in-plan delete", BaseJson.computes.tables);
    };

    const ImageThumb = ({ image }) => {
        if (Planfile.name.length > 20) 
            setConcatPlanString(true);
      
       // console.log("inside elseeeee",Planfile.type);
        if (Planfile.type == "application/vnd.ms-excel" || Planfile.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        {
            excelFileToJSON();
          return <div>
                <Image src={require('../Resources/csv.jpg')} rounded style={{ width: 15, height: 15, marginRight: 10, marginLeft: 5, paddingTop: 5 }} />
            </div>
        }
        else{
                setPlanfileAccepted(false);
                setPlanFile("");
                setConcatPlanString(false);
                T_PLAN_Details.tableData=[];
            
            return <div></div>
        }

    };


    const excelFileToJSON=()=>{
    
        try {
          var reader = new FileReader();
          reader.readAsBinaryString(Planfile);
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
             // console.log("result json",JSON.stringify(result, null, 4));
              setPlanJsonResult(JSON.stringify(result, null, 4));
              let resultData = JSON.parse(PlanJsonResult);
              T_PLAN_Details.tableData=resultData.Sheet1;
              let t_plan_present=false;
              BaseJson.computes.tables.map(item=>{
                if(item.tableName=="T_PLANDETAILS")
                t_plan_present=true;
              });
              if(!t_plan_present)
              BaseJson.computes.tables.push(T_PLAN_Details);
              else{
                BaseJson.computes.tables.map(item=>{
                    if(item.tableName=="T_PLANDETAILS"){
                        item.tableData=resultData.Sheet1;
                    }
                })
              }
              console.log("in-plan upload", BaseJson.computes.tables);
              }
          }catch(e){
              console.error(e);
          }
        
    };

    return (
     <div>
     <Container style={{display: "flex", flexDirection: "row", height: 20, paddingBottom: '10px' }}>
            <div className="uploadContainer">
                {PlanfileAccepted&&<div className="uploadFile">
                    {Planfile && <ImageThumb image={Planfile} />}
                    {Planfile && <label >{Planfile.name.slice(0, 20)}</label>}
                    {concatPlanString && <label>{"...." + Planfile.name.slice(-4)}</label>}
                </div>}
                <div className="uploadButton">
                    <label for="upload-photo" id="button" style={{ float: "right", fontWeight:"bold" , color:"whitesmoke"}}>Upload</label>
                    <input type="file" name="photo" id="upload-photo" onChange={handlePlanUpload} />
                </div>
            </div>
            <input type="button" value="Delete" style={{fontWeight:"bold", color:"whitesmoke"}} class="deleteButton" onClick={handleClick} />
           <a href={require('../Resources/T_PLANDETAILS_TEMPALTE.xlsx')} download="T_PLANDETAILS_TEMPALTE.xlsx" target="_blank">
           <input type="button" value="Template" style={{fontWeight:"bold", color:"whitesmoke"}} class="templateButton"  />
           </a>
        </Container>
        {!PlanfileAccepted&&<p style={{color:"red",width:500}}>Please upload valid excel files only !<br/>Note: Download the template, edit it as required and upload the file</p>}
        </div>
    );
}

export default FileUploadPlanTable;








