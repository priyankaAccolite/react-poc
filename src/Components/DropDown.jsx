import React from "react";
import "../Styles/dropdown.css";

const DropDown2 = ({ handleChange, options }) => {
  return (
    <div>
      <select className="select" name="cars" onChange={handleChange}>
        <option style={{ display: "none" }}></option>
        {options?.map((item) => (
          <option value={item.value} key={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown2;
