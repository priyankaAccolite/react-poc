import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import TextInput from '../Components/TextInput'
import { validation } from '../Constants/Constants'
import DropDown from '../Components/DropDown'
import { limitAgainstPolicy } from '../Constants/Constants'
import { otherLaValidations } from '../Constants/Constants';
import { applicableExternalValidation } from '../Constants/Constants'
import { applicableTransactionValidation } from '../Constants/Constants'
import TextboxWithRadio from "../Components/TextboxWithRadio";

const Validation = () => {

    const [value, setValue] = useState('');
    const [rerender, Setrerender] = useState(false);
    const [display, setDisplay] = useState(true);
    const [textValue, setTextValue] = useState('');
    const [min, setMinValue] = useState('');
    const [max, setMaxValue] = useState('');
    const [count, setCountValue] = useState('');
    const [val1, setval1Value] = useState('');
    const [val2, setval2Value] = useState('');
    const [enable, setEnable] = useState("n")

    // const handleTextChange = (e) => {
    //     console.log(e.target.value, e.target.dataset.id , e.target)
    //     if (e.target.dataset.id === 1) {
    //         setMinValue(e.target.value)
    //         Setrerender(!rerender);
    //     } else if (e.target.dataset.id === 2) {
    //         setMaxValue(e.target.value)
    //         Setrerender(!rerender);
    //     } else if (e.target.dataset.id === 4) {
    //         setCountValue(e.target.value)
    //         Setrerender(!rerender);
    //     } else if (e.target.dataset.id === 5) {
    //         setval1Value(e.target.value)
    //         Setrerender(!rerender);
    //     } else if (e.target.dataset.id === 6) {
    //         setval2Value(e.target.value)
    //         Setrerender(!rerender);
    //     } else if (e.target.dataset.id === 3) {
    //         setTextValue(e.target.value)
    //         Setrerender(!rerender);
    //     } 

    // };
    const handleMinChange = (e) => {
        setMinValue(e.target.value)
    }
    const handleMaxChange = (e) => {
        setMaxValue(e.target.value)
    }
    const handleTextChange = (e) => {
        setTextValue(e.target.value)
    }
    const handleCountChange = (e) => {
        setCountValue(e.target.value)
    }
    const handleVal1Change = (e) => {
        setval1Value(e.target.value)
    }
    const handleVal2Change = (e) => {
        setval2Value(e.target.value)
    }
    const handleChange = (e) => {
        setValue(e.label);
        Setrerender(!rerender);
        //console.log("selected-value",value);
        if (e.label === "Gender" || e.label === "Smoker") {
            setEnable("y")
        } else {
            setEnable("n")
        }
    };
    const handleClick = (e) => {
        console.log("e.target", e.target.dataset)
        if (e.target.dataset.id === "13") {
            let arrayValue = `${value}-${textValue}`;
            if (!otherLaValidations.includes(arrayValue))
                otherLaValidations.push(arrayValue);
            Setrerender(!rerender);
            setTextValue("");
        }
        else if (e.target.dataset.id === "14") {
            if (!limitAgainstPolicy.includes(value))
                limitAgainstPolicy.push(value);
            Setrerender(!rerender);
        } else if (e.target.dataset.id === "15") {
            if (!applicableExternalValidation.includes(value))
                applicableExternalValidation.push(value);
            Setrerender(!rerender);
        } else if (e.target.dataset.id === "16") {
            if (!applicableTransactionValidation.includes(value))
                applicableTransactionValidation.push(value);
            Setrerender(!rerender);
        } else {

        }
    }
    const handleAccordion = () => {
        setDisplay(!display);
    };
    // const handleTextInput = (u_id) => {
    //     let textInput
    //     if (u_id === 1) {
    //         textInput = max
    //     } else if (u_id === 2) {
    //         textInput = min
    //     } else if (u_id === 3) {
    //         textInput = textValue
    //     } else if (u_id === 4) {
    //         textInput = count
    //     } else if (u_id === 5) {
    //         textInput = val1
    //     } else if (u_id === 6) {
    //         textInput = val2
    //     } 
    //     console.log("textinput",textInput)
    //     return textInput
    // }
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Header title={"Validation"} />
                <div >
                    <input type="button" onClick={handleAccordion} style={{ padding: 12, width: 60, backgroundColor: "white", borderLeft: '1px solid black', borderBottom: '1px solid black', borderTop: 'none', borderRight: 'none' }} value="-" />
                </div>
            </div>
            {validation.map((item) => {
                return <>
                    <div
                        style={{
                            flexDirection: "row",
                            display: "flex",
                            padding: 12,
                            display: display ? "flex" : "none",
                            marginRight: 20,
                            marginLeft: 20,

                        }}
                    >
                        <div style={{ width: 400, textAlign: 'left', fontSize: 16 }}>{item.id + '.' + ' ' + item.label + " " + (item.mandatory === "y" ? '*' : '')}</div>
                        {item.type.map((i) => {
                            if (i.placeHolder === "input") {
                                return (
                                    <>
                                        <div style={{ marginRight: i.marginRight ? i.marginRight : 80 }}>
                                            {i.u_id === 1 ?
                                                <TextInput
                                                    placeHolderText={i.placeHolderText}
                                                    value={min}
                                                    handleChange={handleMinChange}
                                                    width={i.width}
                                                    enable={item.label === "Other LA Validations" ? enable : ""}
                                                    data={i.u_id}
                                                />
                                                : i.u_id === 2 ?
                                                    <TextInput
                                                        placeHolderText={i.placeHolderText}
                                                        value={max}
                                                        handleChange={handleMaxChange}
                                                        width={i.width}
                                                        enable={item.label === "Other LA Validations" ? enable : ""}
                                                        data={i.u_id}
                                                    />
                                                    : i.u_id === 3 ?
                                                        <TextInput
                                                            placeHolderText={i.placeHolderText}
                                                            value={textValue}
                                                            handleChange={handleTextChange}
                                                            width={i.width}
                                                            enable={item.label === "Other LA Validations" ? enable : ""}
                                                            data={i.u_id}
                                                        />
                                                        : i.u_id === 4 ?
                                                            <TextInput
                                                                placeHolderText={i.placeHolderText}
                                                                value={count}
                                                                handleChange={handleCountChange}
                                                                width={i.width}
                                                                enable={item.label === "Other LA Validations" ? enable : ""}
                                                                data={i.u_id}
                                                            /> : i.u_id === 5 ?
                                                                <TextInput
                                                                    placeHolderText={i.placeHolderText}
                                                                    value={val1}
                                                                    handleChange={handleVal1Change}
                                                                    width={i.width}
                                                                    enable={item.label === "Other LA Validations" ? enable : ""}
                                                                    data={i.u_id} />
                                                                : <TextInput
                                                                    placeHolderText={i.placeHolderText}
                                                                    value={val2}
                                                                    handleChange={handleVal2Change}
                                                                    width={i.width}
                                                                    enable={item.label === "Other LA Validations" ? enable : ""}
                                                                    data={i.u_id} />
                                            }
                                        </div>
                                    </>
                                )
                            } else if (i.placeHolder === "dropdown") {
                                return <>
                                    {i.label ?
                                        <div style={{ marginTop: -18, marginRight: i.marginRight ? i.marginRight : 80 }}>
                                            <div style={{textAlign:"left", marginLeft:"27px"}}>{i.label ? i.label + (i.mandatory === "y" ? "*" : "") : ""}</div>
                                            <DropDown handleChange={handleChange} options={i.options} width={i.width} />
                                        </div>
                                        : <div style={{ marginRight: i.marginRight ? i.marginRight : 80 }}><DropDown handleChange={handleChange} options={i.options} width={i.width} /></div>
                                    }

                                </>
                            } else if (i.placeHolder === "button") {
                                return <input
                                    type="button"
                                    value="Add to List"
                                    onClick={handleClick}
                                    style={{ border: '1px solid black', height: 35, borderRadius: 3, width: 96, fontWeight: 'bold', fontSize: 12, backgroundColor: '#ED2939', marginLeft:6 , color: "whitesmoke"}}
                                    data-id={item.id}
                                />
                            } else if (i.placeHolder === "dropdownlist1") {
                                return <TextboxWithRadio currencyCode={limitAgainstPolicy} />
                            } else if (i.placeHolder === "dropdownlist2") {
                                return <TextboxWithRadio currencyCode={applicableExternalValidation} />
                            } else if (i.placeHolder === "dropdownlist3") {
                                return <TextboxWithRadio currencyCode={applicableTransactionValidation} />
                            } else if (i.placeHolder === "list") {
                                return <TextboxWithRadio currencyCode={otherLaValidations} />
                            }
                        })}
                    </div>
                </>
            })}
        </>
    )

}
export default Validation