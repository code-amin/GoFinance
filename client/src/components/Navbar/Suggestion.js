import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Suggestion = ({ data, setResult }) => {
  const { name, content, currency } = data;
  const navigate = useNavigate();

  // RESULTS ARE LINKS TO THE SPECIFIED STOCK TICKER
  const handleClick = (event) => {
    event.preventDefault();
    setResult([]);
    navigate(`/stock/${name}`);
  };

  return (
    <Wrapper onClick={handleClick}>
      <Name>{name}</Name>
      {/* SOME DESCRIPTIONS ARE VERY LONG SO THEY ARE TRIMMED */}
      <Content>{content.substring(0, 25) + "... "} </Content>
      <Currency> ({currency})</Currency>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  cursor: pointer;
  padding: 4px;
  &:hover {
    border-radius: 3%;
    background-color: lavender;
    color: black;
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
const Currency = styled.span`
  justify-content: flex-end;
  color: black;
`;
export default Suggestion;
