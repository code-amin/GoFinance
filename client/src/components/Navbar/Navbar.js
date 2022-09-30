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

      <LoginSection>
        {isAuthenticated ? (
          <>
            <ProfileIconSection to="/Profile">
              <BsPersonCircle />
            </ProfileIconSection>
            <Logout to="/" />
          </>
        ) : (
          <Login />
        )}
      </LoginSection>
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

const LoginSection = styled.div`
  min-height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #8758ff;
  color: #8758ff;
  padding: 3px;
`;

const ProfileIconSection = styled(Link)`
  color: white;
  font-size: 30px;
  position: relative;
  top: 7px;
`;
const ProfileIcon = styled.img`
  border: 1px red solid;
`;
