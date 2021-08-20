import styled from "styled-components";

const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items: center;
  padding: 0 8px;
`;

const AppBar = ({ goToChooseProfilePage, goToMatchListPage }) => {
  return (
    <AppBarContainer>
      <button onClick={goToChooseProfilePage}>Escolher</button>
      <p>astromatch</p>
      <button onClick={goToMatchListPage}>Lista</button>
    </AppBarContainer>
  );
};

export default AppBar;
