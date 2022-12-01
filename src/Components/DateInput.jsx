import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "../Styles/dateInput.css"

const DateInput = () => {
  const [pickedDate, setPickedDate] = useState(new Date());

  const CustomInput = ((props) => {
    return (
        <>
        <label className="customLabel" onClick={props.onClick}>
          {props.value}
        </label>
        <FontAwesomeIcon icon={faCalendarAlt} onClick={props.onClick} />
        </>
    );
  });

  return (
    <div className="date"
     style={{border: '1px solid black'}}
     >
      <DatePicker
        selected={pickedDate}
        dateFormat="dd-MM-yyyy"
        onChange={date => {
          setPickedDate(date);
        }}
        customInput={<CustomInput />}
      />
      </div>
  );
};

export default DateInput;