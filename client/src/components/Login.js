import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  // AUTH0 HANDLES THE LOGIN AND ACCOUNT CREATION
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    </Wrapper>
  );
};

export default Login;

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
`;
