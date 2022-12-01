import "./App.css";
import Button from "./Components/Button";
import DropDown from "./Components/DropDown";
import MainContainer from "./MainContainer";
import React from "react";
const options = [
  { value: "C++", label: "C++" },
  { value: "JAVA", label: "JAVA" },
  { value: "Javascript", label: "Javascript" },
  { value: "Python", label: "Python" },
  { value: "Swift", label: "Swift" },
];

function App() {
  const [selectedval, setSelectedVal] = React.useState("");
  const handleChange = (e) => {
    setSelectedVal(e.target.value);
  };

  return (
    <div className="App">
      <MainContainer />
      <Button name="Add to list" />
      <DropDown options={options} handleChange={handleChange} />
    </div>
  );
}

export default App;
