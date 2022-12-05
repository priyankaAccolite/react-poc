import React, { useState } from "react";

//pass size as props from wherever you are using this component
const TextInput = (props) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    return (
        <input style={{border:'1px solid black', height:30, borderRadius:3}} type="text" value={value} onChange={e => handleChange(e)} size={props.size} />
    );
};

export default TextInput;