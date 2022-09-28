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
  border-bottom: 1px gray solid;
  min-height: 50px;
`;

const Button = styled.button`
  background-color: #ffb562;
  border-radius: 5px;
  max-height: 20px;
  width: 40px;
  border: none;
  color: #F87474;
`;
