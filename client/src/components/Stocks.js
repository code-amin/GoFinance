import styled from "styled-components";
import { useState } from "react";

const Stocks = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <>"Loading ..."</>;
  }
  return (
    <>
      <Wrapper>ALL STOCKS</Wrapper>
    </>
  );
};

export default Stocks;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  border: 1px solid red;
`;
