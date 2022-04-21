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

function UserInput(props) {
  const setTempDataReturn = props.setTempDataReturn;

  const [tempControl, setTempControl] = useState("Temperature Less Than");
  const [yearControlLower, setYearControlLower] = useState(2021);
  const [yearControlUpper, setYearControlUpper] = useState(2016);
  const [userInput, setUserInput] = useState(null);
  const [warningTempBool, setwarningTempBool] = useState(false)

  function onTextInput(event) {
    setUserInput(event.target.value);
  }

  const onTempControl = (event) => {
    setTempControl(event.target.value);
  };

  const onYearControlLower = (event) => {
    setYearControlLower(event.target.value);
  };

  const onYearControlUpper = (event) => {
    setYearControlUpper(event.target.value);
  };

  function onTextSubmit(event) {
    event.preventDefault();
    if (yearControlLower <= yearControlUpper) {
    setwarningTempBool(false)
      let tempData = JSON.stringify({
        temperatureInput: userInput,
        temperatureControl: tempControl,
        yearLowerBound: yearControlLower,
        yearUpperBound: yearControlUpper,
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
        setwarningTempBool(true);
    }
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
            <p>From</p>
            <select value={yearControlUpper} onChange={onYearControlUpper}>
              <option value={2022}>2022</option>
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
            <p>To</p>
            <select value={yearControlLower} onChange={onYearControlLower}>
              <option value={2022}>2022</option>
              <option value={2021}>2021</option>
              <option value={2020}>2020</option>
              <option value={2019}>2019</option>
              <option value={2018}>2018</option>
              <option value={2017}>2017</option>
              <option value={2016}>2016</option>
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
      {!warningTempBool
      ?<div>
          <h3>{`PLEASE ENTER LOWER BOUND TEMPERATURE < or = UPPER BOUND`}</h3>
      </div>
      :<div>

      </div>
      }
    </form>
  );
}

export default UserInput;
