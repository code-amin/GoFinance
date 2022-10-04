import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Suggestion = ({ data, setResult }) => {
  console.log(data);
  const { name, content } = data;
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    setResult([]);
    navigate(`/stock/${name}`);
  };

  return (
    <Wrapper onClick={handleClick}>
      <Name>{name}</Name>
      <Content>{content}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;

const Name = styled.span`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const Content = styled.span`
  margin-left: 5px;
`;

export default Suggestion;
