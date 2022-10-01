import styled from "styled-components";
import { useEffect } from "react";

const Stock = () => {
  const getProfile = async (e) => {
    // try {
    console.log("getProfile clicked");

    const res = await fetch("/api/get-quote/");
    if (res.ok) {
      const result = await res.json();
      console.log(result.data);
    }
  };

  return (
    <Wrapper>
      selected stocks price
      <button onClick={(e) => getProfile(e)}>get</button>
    </Wrapper>
  );
};

export default Stock;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  border: 1px solid red;
`;
