import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <Button to="/login">Login</Button>

    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 50px;
  padding:10px;
`;

const Button = styled(Link)`
  background-color: #6F38C5;
  border-radius: 6px;
  max-height: 50px;
  width: 60px;
  padding:5px;
  text-align: center;
  border: none;
  color: var(--color-beige);
  text-decoration: none;
`;
