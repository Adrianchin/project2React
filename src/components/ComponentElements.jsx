import styled from 'styled-components';

export const TemperatureSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  max-width: auto;
  height:auto;
  padding: 20px;
`;
export const SubmitTempButton = styled.button`
  border-radius: 5px;
  background: #7eaafc;
  white-space: nowrap;
  padding: 10px 10px;
  color: #ffffff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    background: #5053ff;
  }
`;

export const InputText = styled.input`
  padding: 10px 10px;
  border: solid;
  border-radius: 5px;
  font-size: 14px;
`; 


export const TemperatureSubmitRow = styled.div`
    display: grid;
    flex-direction:column;
  grid-template-columns: 2fr 1fr;
  max-width: auto;
  height:auto;
`
export const TemperatureSubmitCol = styled.div`
    display: grid;
    flex-direction:row;
  max-width: 10%;
`
export const TemperatureControlRowTop = styled.div`
    display: grid;
    flex-direction: column;
`
export const TemperatureControlRowBottom = styled.div`
    display: grid;
    flex-direction: column;
    margin-bottom:30px;
`
export const OptionsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
