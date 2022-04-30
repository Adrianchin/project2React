import React from "react";
import UserInput from "../components/UserInput";
import DisplayTempData from "../components/DisplayTempData";
import {
    PageContainer,
    TableContainer,
    Background
} from "./HomePageElements"

function HomePage(props) {
    const setTempDataReturn = props.setTempDataReturn;
    const tempDataReturn = props.tempDataReturn;

  return (
    <Background>
      <PageContainer>
        <UserInput setTempDataReturn={setTempDataReturn} />
      </PageContainer>
      {tempDataReturn
      ?<TableContainer>
        <DisplayTempData tempDataReturn={tempDataReturn} />
      </TableContainer>
      :<></>}
    </Background>
  );
}

export default HomePage;
