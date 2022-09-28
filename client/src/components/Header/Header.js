import styled from "styled-components";
import SearchBar from "./SearchBar";
import Login from "./Login";

const Header = () => {
  return (
    <Wrapper>
      <Logo>Logo📈</Logo>
      <SearchBar />
      <Login />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  border-bottom: 1px gray solid;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #F2F2F2;
  color:#8758FF;
`;

const Logo = styled.div``;
