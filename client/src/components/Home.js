import styled from "styled-components";

const Home = () => {
  return (
    <Header>
      {" "}
      Your <Underline>favorite stocks</Underline> at any time.{" "}
    </Header>
  );
};

export default Home;

const Header = styled.h1`
  color: #8758ff;
  padding: 40px 0px 20px 20px;
  max-width: 40%;
`;

const Underline = styled.p`
  text-decoration: underline;
`;
