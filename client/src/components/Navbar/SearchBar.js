import { useState } from "react";
import styled from "styled-components";
import Suggestion from "./Suggestion";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  // SEND SEARCH QUERY TO API, AND IT RETURNS THE AUTOCOMPLETE RESULTS (MAX 10)
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`/api/get-search-suggestions/${query}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.data);
      });
  };

  return (
    <Wrapper>
      <div style={{ display: "flex" }}>
        <Search
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <GoButton onClick={handleSubmit}>🔍</GoButton>
      </div>
      <>
        {/* CREATE A UNORDERED LIST WITH THE RESULT OF THE FETCH */}
        {result && (
          <>
            <Ul>
              {result.map((suggestion) => {
                return <Suggestion data={suggestion} setResult={setResult} />;
              })}
            </Ul>
          </>
        )}
      </>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: inline-block;
  left: 150px;
  position: absolute;
  min-height: 50px;
  max-height: 50px;
`;

const Search = styled.input`
  background-color: var(--color-beige);
  border-radius: 5px;
  max-height: 50px;
  height: 30px;
  min-width: 350px;
  border: 0.1px solid transparent;
  margin: 10px;
`;
const Ul = styled.ul`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  color: gray;
  cursor: pointer;
  z-index: 1000;
  position: relative;
`;

const GoButton = styled.button`
  background-color: var(--color-beige);
  border-radius: 5px;
  height: 30px;
  border: 1px solid var(--color-purple);
  margin: 10px 0px 0px 2px;

  &:hover {
    color: var(--color-purple);
    transition: all 0.4s;
  }
  &:active {
    transition: all 0.01s;
    background-color: var(--color-purple);
  }
`;
