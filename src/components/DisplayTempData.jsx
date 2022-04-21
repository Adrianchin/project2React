import React from "react";

function DisplayTempData(props) {
  const tempDataReturn = props.tempDataReturn;

  function renderHeader() {
    let headerElement = ["id", "day", "tempertaure", "location"];
    //renders the headers
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  //renders the body of the table
  function renderBody() {
    //use the && so it only runs when the data is returned so no errors occur
    return (
      tempDataReturn &&
      tempDataReturn.map(({ id, day, tempertaure, location }) => {
        //arrow function means "do this when react detets updates"
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{day}</td>
            <td>{tempertaure}</td>
            <td>{location}</td>
          </tr>
        );
      })
    );
  }

  return (
    <>
      <div>
        <div className="center">
          <h2 id="title">Daily Temperature vs Shelter Table</h2>
        </div>
        <div className="center">
          <table id="temptable">
            <thead>
              <tr>{renderHeader()}</tr>
            </thead>
            <tbody>{renderBody()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DisplayTempData;
