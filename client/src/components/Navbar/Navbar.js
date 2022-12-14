import styled from "styled-components";
import SearchBar from "./SearchBar";
import Login from "../Login";
import Logout from "../Logout";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { IoPersonOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";

const Navbar = () => {
// GET USER FROM AUTH0 CONTEXT
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Wrapper>
      <Logo to="/">GoFinance </Logo>
      <SearchBar />
{/* IF LOGGED IN, LOAD USER-ENABLED BUTTONS */}
      <LoginSection>
        {isAuthenticated ? (
          <>
            <FavouritesIcon to="favourites">
              <BsBookmark />
            </FavouritesIcon>
            <ProfileIconSection to="/Profile">
              <IoPersonOutline />
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
  background-color: var(--color-purple);
  color: #8758ff;
  padding: 3px;
`;

const Logo = styled(Link)`
  margin: 10px;
  font-weight: bold;
  color: white;
  border-radius: 6px;
  padding: 6px;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    color: var(--color-blue);
    transition: all 0.4s;
  }
`;

const LoginSection = styled.div`
  min-height: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #8758ff;
  color: #8758ff;
  padding-right: 10px;
  &:hover {
    color: var(--color-blue);
    transition: all 0.4s;
  }
`;

const ProfileIconSection = styled(Link)`
  color: white;
  font-size: 30px;
  position: relative;
  top: 7px;
  padding-right: 10px;
  &:hover {
    color: var(--color-blue);
    transition: all 0.4s;
  }
`;
const FavouritesIcon = styled(Link)`
  color: white;
  font-size: 30px;
  position: relative;
  top: 7px;
  padding-right: 10px;
  &:hover {
    color: var(--color-blue);
    transition: all 0.4s;
  }
`;
