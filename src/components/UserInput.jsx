import React, { useState } from "react";
import {
  TemperatureSubmitContainer,
  SubmitTempButton,
  InputText,
  TemperatureSubmitRow,
  TemperatureSubmitCol,
  TemperatureControlRowTop,
  TemperatureControlRowBottom
} from "./ComponentElements";
import dataDec from "./data/filtered_Dec2021_-30.json";
import dataJan from "./data/filtered_Jan2022_-20.json";
import dataNov from "./data/filtered_Nov2021_-12.json";

function UserInput(props) {
  const setTempDataReturn = props.setTempDataReturn;

  const [tempControl, setTempControl] = useState("Temperature Less Than");
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState(1);
  const [userInput, setUserInput] = useState(null);
  const [warningTempBool, setwarningTempBool] = useState(false)

  function onTextInput(event) {
    setUserInput(event.target.value);
  }

  const onTempControl = (event) => {
    setTempControl(event.target.value);
  };

  const onYear = (event) => {
    setYear(event.target.value);
  };

  const onMonth = (event) => {
    setMonth(event.target.value);
  };

  function onTextSubmit(event) {
    event.preventDefault();
    if (month==12){
      setTempDataReturn(dataDec)
    }else if(month==1){
      setTempDataReturn(dataJan)
    }else if(month==11){
      setTempDataReturn(dataNov)
    }
    /*
    if (userInput) {
    setwarningTempBool(false)
      let tempData = JSON.stringify({
        temperatureInput: userInput,
        temperatureControl: tempControl,
        year: year,
        month: month,
      });
      let submitUserTemperatureEndpoint =
        "http://localhost:3000/usertemperaturesubmit";
      async function submitUserTemperature() {
        try {
          const response = await fetch(submitUserTemperatureEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: tempData,
          });
          const returnedTempSubmit = await response.json();
          console.log(returnedTempSubmit);
          setTempDataReturn(returnedTempSubmit);
        } catch (error) {
          console.log("Error with temperature submission: ", error);
        }
      }
      submitUserTemperature();
    } else {
      console.log("Test")
      setwarningTempBool(true);
    }
    */
  }

  return (
    <form>
      <TemperatureSubmitContainer>
        <div>
          <select value={tempControl} onChange={onTempControl}>
            <option value="Temperature Less Than">Temperature Less Than</option>
            <option value="Temperature Equal To">Temperature Equal To</option>
            <option value="Temperature Greater Than">
              Temperature Greater Than
            </option>
          </select>
        </div>
        <TemperatureControlRowTop>
          <TemperatureSubmitCol>
            <p>Year</p>
            <select value={year} onChange={onYear}>
              <option value={2021}>2021</option>
              <option value={2020}>2020</option>
              <option value={2019}>2019</option>
              <option value={2018}>2018</option>
              <option value={2017}>2017</option>
              <option value={2016}>2016</option>
            </select>
          </TemperatureSubmitCol>
        </TemperatureControlRowTop>
        <TemperatureControlRowBottom>
          <TemperatureSubmitCol>
            <p>Month</p>
            <select value={month} onChange={onMonth}>
              <option value={1}>Jan</option>
              <option value={2}>Feb</option>
              <option value={3}>Mar</option>
              <option value={4}>Apr</option>
              <option value={5}>May</option>
              <option value={6}>Jun</option>
              <option value={7}>Jul</option>
              <option value={8}>Aug</option>
              <option value={9}>Sep</option>
              <option value={10}>Oct</option>
              <option value={11}>Nov</option>
              <option value={12}>Dec</option>
            </select>
          </TemperatureSubmitCol>
        </TemperatureControlRowBottom>

        <TemperatureSubmitRow>
          <InputText className="" type="text" onChange={onTextInput} />
          <SubmitTempButton className="" onClick={onTextSubmit}>
            Submit Temperature
          </SubmitTempButton>
        </TemperatureSubmitRow>
      </TemperatureSubmitContainer>
      {warningTempBool
      ?<div>
          <h3>{`PLEASE ENTER A TEMPERATURE`}</h3>
      </div>
      :<div>

      </div>
      }
    </form>
  );
}

export default UserInput;
