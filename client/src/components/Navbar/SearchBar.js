import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
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
      <>{result && (
        <>
          {result.map((suggestion)=>{
            return (<Ul><Li>{suggestion.slug}</Li></Ul>)
          })}
        </>
      )}</>
      <Search
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>GO</button>
      {/* {result && (
        <>
          {" "}
          {
            // <Ul>
            //   {result.map((suggestion) => {
            //     return <Li><Link to={`/stock/${suggestion}`}>{suggestion}</Link>{<br></br>}</Li>;
            //   })}
            // </Ul>
          }{" "}
        </>
      )} */}
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  flex-direction: column;

  cursor: pointer;
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
