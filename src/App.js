import "./App.css";
import Button from "./Components/Button";
import MainContainer from "./MainContainer";
import Headers from './Components/Header'
import DateInput from "./Components/DateInput";

function App() {
  return (
    <div className="App">
      <MainContainer />
      <Button name="Add to list" />
      <Headers title={"Product Details"}/>
      <DateInput/>
    </div>
  );
}

export default App;
