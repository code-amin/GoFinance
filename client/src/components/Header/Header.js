import styled from "styled-components";
import SearchBar from "./SearchBar";
import Login from "./Login";

const Header = () => {
  return (
    <Wrapper>
      <Logo>GoFinance</Logo>
      <SearchBar />
      <Login />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  min-height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #8758ff;
  color: #8758ff;
  padding:3px;
`;

const Logo = styled.div`
  margin: 10px;
  font-weight: bold;
  color: white;
  background-color: #5cb8e4;
  border-radius: 5px;
  padding: 6px;
`;
