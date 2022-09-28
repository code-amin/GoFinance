import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <Button>Login</Button>
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

const Button = styled.button`
  background-color: #6F38C5;
  border-radius: 5px;
  max-height: 50px;
  width: 60px;
  border: none;
  color: var(--color-beige);
`;
