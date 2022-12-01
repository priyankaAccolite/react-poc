import "./App.css";
import Button from "./Components/Button";
import MainContainer from "./MainContainer";
import Headers from "./Components/Header";
import DateInput from "./Components/DateInput";
import React from "react";
import DropDown from "./Components/DropDown";

function App() {
  const [selectedval, setSelectedVal] = React.useState("");
  const handleChange = (e) => {
    setSelectedVal(e.value);
  };

  return (
    <div className="App">
      <MainContainer />
      <Button name="Add to list" />
      <Headers title={"Product Details"} />
      <DateInput />
      <br />

      <DropDown handleChange={handleChange} />
    </div>
  );
}

export default App;
