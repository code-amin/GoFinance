import styled from "styled-components";

const SearchBar = () => {
  return (
    <Wrapper>
      <Search placeholder="Enter a ticker..."></Search>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-bottom: 1px gray solid;
  min-height: 50px;
`;

const Search = styled.input`
  background-color: white;
  border-radius: 5px;
  max-height: 20px;
  border:0.1px solid #181818;
`;

