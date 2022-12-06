import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import TextInput from '../Components/TextInput'
import { validation } from '../Constants/Constants'
import DropDown from '../Components/DropDown'
// import { laValidations } from '../Constants/Constants';
import TextboxWithRadio from "../Components/TextboxWithRadio";

const Validation = () => {

    const [value, setValue] = useState('');
    const [rerender, Setrerender] = useState(false);

    const handleChange = (e) => {
        setValue(e.label);
        Setrerender(!rerender);
        //console.log("selected-value",value);
    };
    // const handleClick = () => {
    //     laValidations.push(value);
    //     Setrerender(!rerender);
    //     console.log("global-array", laValidations);
    // };


    return (
        <>
            <Header title={"Validations"} />
            {validation.map((item) => {
                return <>
                    <div
                        style={{
                            flexDirection: "row",
                            display: "flex",
                            padding: 12
                        }}
                    >
                        <div style={{ width: 400, textAlign: 'left', fontSize: 16 }}>{item.id + '.' + ' ' + item.label}</div>
                        {item.type.map((i) => {
                            if (i.placeHolder === "input") {
                                return <TextInput placeHolderText={i.placeHolderText} />
                            } else if (i.placeHolder === "dropdown") {
                                return <>
                                    {i.label ?
                                        <div style={{ marginTop: -18 }}>
                                            <div>{i.label}</div>
                                            <DropDown handleChange={handleChange} options={i.options} />
                                        </div>
                                        : <DropDown handleChange={handleChange} options={i.options} />
                                    }

                                </>
                            } else if (i.placeHolder === "button") {
                                return <input
                                    type="button"
                                    value="Add to List"
                                    onClick={''}
                                    style={{ border: '1px solid black', height: 35, borderRadius: 3, width: 96, fontWeight: 'bold', fontSize: 12 }}
                                />
                            } else if (i.placeHolder === "list") {
                                // return <TextboxWithRadio currencyCode={laValidations} />
                            }
                        })}
                    </div>
                </>
            })}
        </>
    )

}
export default Validation