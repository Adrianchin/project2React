import React, {useState} from "react"
import './App.css';
import UserInput from "./components/UserInput";
import DisplayTempData from "./components/DisplayTempData";

function App() {

  const [tempDataReturn, setTempDataReturn] = useState(null);

  return (
    <div>
      <div>
      <UserInput
      setTempDataReturn={setTempDataReturn}
      />
      </div>
      <div>
      <DisplayTempData
      tempDataReturn={tempDataReturn}
      />
      </div>
    </div>
  );
}

export default App;
