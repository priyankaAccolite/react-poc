import React, { useState } from "react";

//pass size as props from wherever you are using this component
const TextInput = (props) => {
  
    return (
        <input style={{border:'1px solid black', height:30, borderRadius:3}} type="text" value={props.value} onChange={e => props.handleChange(e)} size={props.size} />
    );
};

export default TextInput;