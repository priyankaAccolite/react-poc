import React, { useState } from "react";

//pass size as props from wherever you are using this component
const TextInput = (props) => {

    return (
        <input
            style={{
                border: '1px solid black', height: 30, borderRadius: 3, fontSize: 15,paddingLeft:15,paddingRight:15,
                backgroundColor: props.enable === "n" || props.enable === "ce" ? "lightgrey" : "white",
                width: props.width,
                marginLeft:props.isItModalInput?30:15
            }}
            type="text"
            value={props.value}
            onChange={e => props.handleChange(e)} 
            size={props.size}
            placeholder={props.placeHolderText}
            disabled={props.enable === "n" ? true : false}
            data-id={props.data}
        />
    );
};

export default TextInput;