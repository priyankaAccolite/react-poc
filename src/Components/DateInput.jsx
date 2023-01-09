import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "../Styles/dateInput.css"

const DateInput = (props) => {
  //   const [pickedDate, setPickedDate] = useState(new Date());

  const CustomInput = ((props) => {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between", marginRight: 20, marginLeft: 20 }}>
          <label className="customLabel" onClick={props.onClick}>
            {props.value}
          </label>
          <FontAwesomeIcon icon={faCalendarAlt} onClick={props.onClick} />
        </div>
      </>
    );
  });

  return (
    <div
      style={{ border: '1px solid black', height: 30, borderRadius: 3, width: 222, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <DatePicker
        selected={props.pickDate}
        dateFormat="dd-MM-yyyy"
        onChange={date => {
          props.setPickDate(date);
        }}
        customInput={<CustomInput />}
      />
    </div>
  );
};

export default DateInput;