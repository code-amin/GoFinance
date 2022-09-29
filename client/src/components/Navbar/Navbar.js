import styled from "styled-components";
import SearchBar from "./SearchBar";
import Login from "../Login";
import { Link } from "react-router-dom";
import Logout from "../Logout";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo to="/">GoFinance</Logo>
      <SearchBar />
      <Login />
      <Logout />
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  min-height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #8758ff;
  color: #8758ff;
  padding: 3px;
`;

const Logo = styled(Link)`
  margin: 10px;
  font-weight: bold;
  color: white;
  border: 2px solid var(--color-beige);
  border-radius: 6px;
  padding: 6px;
  text-decoration: none;
`;
