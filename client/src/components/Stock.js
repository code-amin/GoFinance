import styled from "styled-components";
import { useEffect } from "react";

const Stock = () => {
  useEffect(async () => {
    try {
      console.log("getProfile useEffect render");
      const x = await fetch(`/api/get-quote`);
      if (x.ok) {
        const parsedX = await x.json();
        console.log(parsedX);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const getProfile = async (e) => {
    {
      //WORKING FETCH const url =
      //   "https://seeking-alpha.p.rapidapi.com/symbols/get-profile?symbols=aapl%2Ctsla";
      // const options = {
      //   method: "GET",
      //   headers: {
      //     "X-RapidAPI-Key": "960417bb1emsha85a4ec0b46d5a6p18cfbcjsnd1faade51d75",
      //     "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
      //   },
      // };
      // fetch(url, options)
      //   .then((res) => res.json())
      //   .then((json) => console.log(json))
      //   .catch((err) => console.error("error:" + err));
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
