import React, {useState} from "react"
import './App.css';
import HomePage from "./pages/HomePage";
import constData from "./components/data/merged.json"
import dataDec from "./components/data/filtered_Dec2021_-30.json";

function App() {

  const [tempDataReturn, setTempDataReturn] = useState(null);

  /*const [tempDataReturn, setTempDataReturn] = useState([
    {
    date: "2022-01-31T00:00:00.000",
    year: "2022",
    month: "Jan",
    city: "Calgary",
    sheltertype: "Short Term Supportive",
    sheltername: "River Front - Short Term Supportive",
    organization: "Calgary Drop-In Centre",
    shelter: "River Front - Short Term Supportive",
    capacity: 0,
    overnight: 0,
    temperature: "TEMP",
    },
    {
    date: "2022-01-31T00:00:00.000",
    year: "2022",
    month: "Jan",
    city: "Calgary",
    sheltertype: "Short Term Supportive",
    sheltername: "River Front - Short Term Supportive",
    organization: "Calgary Drop-In Centre",
    shelter: "River Front - Short Term Supportive",
    capacity: 0,
    overnight: 0,
    temperature: "TEMP",
    },
    {
    date: "2022-01-31T00:00:00.000",
    year: "2022",
    month: "Jan",
    city: "Calgary",
    sheltertype: "Short Term Supportive",
    sheltername: "River Front - Short Term Supportive",
    organization: "Calgary Drop-In Centre",
    shelter: "River Front - Short Term Supportive",
    capacity: 0,
    overnight: 0,
    temperature: "TEMP",
    }
    ]);*/

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
