import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: var(--darkGrey);

  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--white);
  }

  a {
    text-decoration: none;
    color: var(--white);
    font-size: var(--fontMed);
    padding: 0 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>LabeX</h1>
      </Link>
      <div>
        <Link to="/list/trips">Lista</Link>
        <Link to="/login">Login</Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
