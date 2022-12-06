import React from "react";
import '../Styles/fileupload.css';
import { Image } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import { useState } from "react";

const FileUpload = () => {

    const [file, setFile] = useState("");
    const [concatString, setConcatString] = useState(false);
    const handleUpload = (event) => {
        setFile(event.target.files[0]);
        // Add code here to upload file to server
    };
    const handleClick = () => {
        setFile("");
        setConcatString(false);
    };

    const ImageThumb = ({ image }) => {
        if (file.name.length > 20) {
            setConcatString(true);
        }
        if (file.type == "application/pdf" || file.type == "text/csv" || file.type == "application/vnd.ms-excel" ||
            file.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
            return <div>
                <Image src={require('../Resources/csv.jpg')} rounded style={{ width: 15, height: 15, marginRight: 10, marginLeft: 5, paddingTop: 5 }} />
            </div>

        else
            return <div>
                <Image src={require('../Resources/default.png')} rounded style={{ width: 15, height: 15, marginRight: 10, marginLeft: 5, paddingTop: 5 }} />
            </div>;
    };

    return (

        <Container style={{display: "flex", flexDirection: "row", height: 20, paddingBottom: '10px' }}>
            <div className="uploadContainer">
                <div className="uploadFile">
                    {file && <ImageThumb image={file} />}
                    {file && <label >{file.name.slice(0, 20)}</label>}
                    {concatString && <label>{"...." + file.name.slice(-4)}</label>}
                </div>
                <div className="uploadButton">
                    <label for="upload-photo" id="button" style={{ float: "right", fontWeight:"bold" }}>Upload</label>
                    <input type="file" name="photo" id="upload-photo" onChange={handleUpload} />
                </div>
            </div>
            <input type="button" value="Delete" style={{fontWeight:"bold"}} class="deleteButton" onClick={handleClick} />
           <a href={require('../Resources/file.txt')} download="file" target="_blank">
           <input type="button" value="Template" style={{fontWeight:"bold"}} class="templateButton"  />
           </a>
        </Container>

    );
}

export default FileUpload;
