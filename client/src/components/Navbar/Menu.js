// Will be a stretch
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { IoPersonOutline, IoMenu } from "react-icons/io5";
import { useState } from "react";

const Menu = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [menuVisibility, setMenuVisibility] = useState(false);
  const handleMenu = () => {
    setMenuVisibility(!menuVisibility);
  };
  return (
    <>
      <IoMenu
        onClick={() => {
          handleMenu();
        }}
      />
      <Menu1 menuVisibility={menuVisibility}>
        {isAuthenticated && <Link to="/Profile">Profile</Link>}
      </Menu1>
    </>
  );
};

export default Menu;

const Menu1 = styled.div`
  display: grid;
  display: ${(props) => (props.menuVisibility ? "visible" : `hidden`)};
`;
const Navigation = styled.div`
  margin: 10px;
  font-weight: bold;
  color: white;
  border: 2px solid var(--color-beige);
  border-radius: 6px;
  padding: 6px;
  text-decoration: none;
`;
