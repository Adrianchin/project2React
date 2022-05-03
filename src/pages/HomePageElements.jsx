import styled from 'styled-components';

export const PageContainer = styled.div`
     height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  margin: auto;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.9);
  margin: 50px;
  background-color: rgba(193, 237, 255, 0.9);
`;

export const TableContainer = styled.div`
    height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  margin: auto;
  padding:40px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.9);
  margin: 50px;
  width: auto;
  background-color: rgba(193, 237, 255, 0.9);
`;

export const Background = styled.div`
      background-image: url(${require("../pictures/calgary-background.jpg")});
  background-size: cover;
  opacity: 1;
  justify-content: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;
  top: 0%;
  width: 100%;
  bottom: 0%;
`