import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <Wrapper>
      <Button onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </Button>
    </Wrapper>
  );
};

export default Logout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 50px;
  padding: 10px;
`;

const Button = styled(Link)`
  background-color: #6f38c5;
  border-radius: 6px;
  max-height: 50px;
  width: 60px;
  padding: 5px;
  text-align: center;
  border: none;
  color: var(--color-beige);
  text-decoration: none;
  &:hover {
    color: lightgrey;
    transition: all 0.4s;
  }
`;
