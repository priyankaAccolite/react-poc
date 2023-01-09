import React from "react";
import "../Styles/dropdown.css";
import Select from "react-select";

const DropDown2 = ({
  handleChange,
  width,
  options,
  enable,
  value,
  ...rest
}) => {
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
        textAlign: "left"
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
  let _value = options?.filter((opt) => opt.value === value);
  return (
    <div
      style={{
        width: width,
        display: "inline-block",
        justifyContent: "center",
      }}
    >
      <Select
        isDisabled={enable === "n"}
        theme={customTheme}
        myFontSize="20px"
        options={options}
        styles={styles}
        placeholder=""
        components={{
          IndicatorSeparator: () => null,
        }}
        onChange={handleChange}
        value={_value}
      />
    </div>
  );
};
export default DropDown2;
