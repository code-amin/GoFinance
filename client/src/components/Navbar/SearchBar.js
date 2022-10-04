import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Suggestion from "./Suggestion";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`/api/get-search-suggestions/${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
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
        <button onClick={handleSubmit}>GO</button>
      </div>
      <>
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
  display: flex;
  flex-direction: column;
  min-height: 50px;
  max-height: 50px;
  flex-direction: column;
`;

const Search = styled.input`
  background-color: #f2f2f2;
  border-radius: 5px;
  max-height: 50px;
  min-width: 200px;
  border: 0.1px solid #181818;
  margin: 10px;
`;
const Ul = styled.ul`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  color: gray;
  cursor: pointer;
  z-index: 1000;
`;
const Li = styled.li`
  color: black;
  flex-direction: column;
  margin: 13px;
  font-size: 17px;
  &:hover {
    border-radius: 3%;
    background-color: lavender;
    color: black;
  }
`;
