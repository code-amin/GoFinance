import { useEffect, useState } from "react";
import styled from "styled-components";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const handleSubmit = async (e, query) => {
    e.preventDefault();
    
    const getData = await fetch("/api/get-search-suggestions", {
      method: "POST",
      body: JSON.stringify({
        query,
      }),
      headers: { "Content-Type": "application/json" },
      Accept: "application/json",
    });

    const parsedResponse = await getData.json();
    console.log(parsedResponse);
  };

  return (
    <Wrapper>
      <Search
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>GO</button>
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
  min-width: 200px;
  border: 0.1px solid #181818;
  margin: 10px;
`;
