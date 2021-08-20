import axios from "axios";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ChosseButtons = ({ clickNo, clickYes }) => {
  return (
    <ButtonsContainer>
      <button onClick={clickNo}>Não</button>
      <button onClick={clickYes}>Sim</button>
    </ButtonsContainer>
  );
};

export default ChosseButtons;
