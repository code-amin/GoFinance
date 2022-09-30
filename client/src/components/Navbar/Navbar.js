import styled from "styled-components";
import SearchBar from "./SearchBar";
import Login from "../Login";
import Profile from "../Profile";
import Logout from "../Logout";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Wrapper>
      <Logo to="/">GoFinance</Logo>
      <SearchBar />

      <ConnectionSection>
        <Login />
        {isAuthenticated ? <ProfileIcon to="/Profile" /> : console.log("hi")}

        <ProfileIconSection>
          <BsPersonCircle />
        </ProfileIconSection>
        <Logout to="/" />
      </ConnectionSection>
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

  const ConnectionSection = styled.div`
   min-height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #8758ff;
  color: #8758ff;
  padding: 3px;
  `

  const ProfileIconSection = styled.div`
    top: 100px;
    width: 1000px;
    color: red;
  `;
const ProfileIcon = styled.img`
  border: 1px red solid;
`;
