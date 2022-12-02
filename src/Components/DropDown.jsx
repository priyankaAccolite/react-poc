import React from "react";
import "../Styles/dropdown.css";
import Select from "react-select";

const DropDown = ({ handleChange,options }) => {
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "orange",
        primary: "grey",
        primary50: "#eeefee",
      },
    };
  }
  const styles = {
    option: (provided, state) => {
      return {
        ...provided,
        fontWeight: "normal",
        color: "black",
        backgroundColor: "white",
        padding: "6px 6px",
        fontSize: "14px",
      };
    },

    control: (styles) => {
      return {
        ...styles,
        height: "10px",
        minHeight: 35,
        borderColor: "black",
      };
    },
  };

  return (
    <div
      style={{
        width: "200px",
        display: "inline-block",
        justifyContent: "center",
      }}
    >
      <Select
        theme={customTheme}
        myFontSize="20px"
        options={options}
        styles={styles}
        placeholder=""
        components={{
          IndicatorSeparator: () => null,
        }}
        onChange={handleChange}
      />
    </div>
  );
};
export default DropDown;
