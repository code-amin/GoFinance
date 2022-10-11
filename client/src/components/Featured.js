// FEATURED STOCK IS THE ONE ON THE MAIN PAGE AND HAS BEEN MANUALLY SELECTED FOR THE MOMENT
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

const Featured = () => {
  const [data, setData] = useState(null);
  // TESLAS ID
  const featuredId = 16123;

  // GET FEATURED STOCKS DATA
  useEffect(() => {
    fetch(`/api/get-price/${featuredId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.real_time_quotes[0]);
      });
  }, []);

  if (!data) {
    return (
      <Triangle
        height="425"
        width="320"
        color="#2de054"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
  const percentage = (data.last / data.prev_close - 1) * 100;

  return (
    <Wrapper>
      {data && (
        <Details>
          <Price>
            {" "}
            {"$" + data.last}
            {(data.last / data.prev_close - 1) * 100 > 0
              ? ` (⬆${percentage.toFixed(2)}%)`
              : ` (⬇${percentage.toFixed(2)}%)`}
          </Price>

          <Name>{data.lua.company}</Name>
          {"$TSLA"}
          <Technicals>
            <Details>
              {"MCap : $" + (data.market_cap / 1000000000).toFixed(2) + "(B)"}
            </Details>
            <Details>
              {/* FORMAT MILLIONS WITH COMMAS */}
              {"Volume : $" +
                data.volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Details>
            <Details>{"Open : $" + data.open}</Details>
            <Details>{"52W High : $" + data.lua.high_52w}</Details>
            <Details>{"52W Low : $" + data.lua.low_52w}</Details>
          </Technicals>
        </Details>
      )}
    </Wrapper>
  );
};

export default Featured;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px;
  min-height: 400px;
  border: 1px solid black;
  border-radius: 13px;
  position: relative;
  min-width: 300px;
  position: relative;
  width: 300px;
  height: 400px;
  background: #404040;
  margin: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  color: white;
`;
const Details = styled.div`
  padding: 3px 0 3px 0;
  font-size: 18px;
`;
const Price = styled.div`
  text-align: center;
  font-size: 30px;
`;
const Name = styled.div`
  font-size: 30px;
  padding: 20px 0 0 0;
`;
const Technicals = styled.div`
  padding: 20px 0 3px 0;
  color: var(--color-white);
  text-align: left;
`;
