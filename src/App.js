import React, {useState} from "react"
import './App.css';
import HomePage from "./pages/HomePage";

function App() {

  const [tempDataReturn, setTempDataReturn] = useState(null);

  return (
    <div>
      <HomePage
      setTempDataReturn = {setTempDataReturn}
      tempDataReturn = {tempDataReturn}
      />
    </div>
  );
}

export default App;
