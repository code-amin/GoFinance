import styled from "styled-components";

const SearchBar = () => {
  return (
    <Wrapper>
      <Search placeholder="Search..."></Search>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
`;

const Search = styled.input`
  background-color: #f2f2f2;
  border-radius: 5px;
  max-height: 50px;
  min-width:200px;
  border: 0.1px solid #181818;
  margin: 10px;
`;
