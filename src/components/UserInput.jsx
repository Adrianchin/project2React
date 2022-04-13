import React, {useState} from 'react';

function UserInput(props) {

    const setTempDataReturn = props.setTempDataReturn;

    const [userInput, setUserInput] = useState();

    function onTextInput(event) {
        setUserInput(event.target.value);
    }

    function onTextSubmit(){
        let tempData = JSON.stringify({
            temperatureInput: userInput,
        });
        let submitUserTemperatureEndpoint = "http://localhost:3000/usertemperaturesubmit"
        async function submitUserTemperature() {
            try{
                const response = await fetch(submitUserTemperatureEndpoint,{
                    method:"POST",
                    headers: { "Content-Type": "application/json" },
                    body: tempData
                });
                const returnedTempSubmit = await response.json();
                console.log(returnedTempSubmit);
                setTempDataReturn(returnedTempSubmit)
            }catch(error){
                console.log("Error with temperature submission: ", error)
            };
        };
        submitUserTemperature();
    };

    return (
        <div>
            <input 
            className=""
            type="text"
            onChange={onTextInput}
            />
            <button
            className=""
            onClick={onTextSubmit}
            >Submit Temperature</button>
        </div>
    )
}

export default UserInput