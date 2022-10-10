import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Featured = () => {
  const [data, setData] = useState(null);
  const { stock } = useParams();
  // TEMPORARY TO AVOID TOO MANY API REQUESTS

  // useEffect(() => {
  const handleClick = async () => {
    await fetch(`/api/get-stock/TSLA`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        console.log(data.data.data[0].attributes);
        // console.log(data.data[0]);

        setData(data.data.data[0].attributes);
      });
  };
  // }, []);
  // TEMPORARY TO AVOID TOO MANY API REQUESTS
  // const data = {
  //   longDesc:
  //     "Adobe Inc. operates as a diversified software company worldwide. It operates through three segments: Digital Media, Digital Experience, and Publishing and Advertising. The Digital Media segment offers produequipment manufacturers. The company was formerly known as Adobe Systems Incorporated and changed its name to Adobe Inc. in October 2018. Adobe Inc. was founded in 1982 and is headquartered in San Jose, California.",
  //   sectorname: "Information Technology",
  //   sectorgics: 45,
  //   primaryname: "Application Software",
  //   primarygics: 45103010,
  //   numberOfEmployees: 25988,
  //   yearfounded: 1982,
  //   streetaddress: "345 Park Avenue",
  //   streetaddress2: null,
  //   streetaddress3: null,
  //   streetaddress4: null,
  //   city: "San Jose",
  //   state: "CA",
  //   zipcode: "95110-2704",
  //   country: "United States",
  //   officephonevalue: "408 536 6000",
  //   webpage: "www.adobe.com",
  //   companyName: "Tesla Inc.",
  //   marketCap: 129358425000,
  //   totalEnterprise: 128235425000,
  //   totAnalystsRecommendations: 33,
  //   fy1UpRevisions: 24,
  //   fy1DownRevisions: 4,
  //   divYield: null,
  //   eps: 10.191096,
  //   lastDaily: {
  //     rtTime: "2022-09-30T15:59:59.903-04:00",
  //     rtSource: "RealTimeQuote",
  //     last: 275.2,
  //     open: 279.69,
  //     close: 275.2,
  //     low: 274.85,
  //     high: 284.29,
  //     volume: 4578776,
  //     volumeAt: "2022-09-30T15:59:59.903-04:00",
  //     at: "2022-10-01T02:41:03.786-04:00",
  //   },
  //   estimateEps: 13.62131,
  //   debtEq: 32.2897,
  //   totDebtCap: 24.4083,
  //   ltDebtEquity: 28.1987,
  //   ltDebtCap: 21.3158,
  //   totLiabTotAssets: 46.2571,
  //   impliedMarketCap: null,
  //   shortIntPctFloat: 0.9973,
  //   divTimeFrame: "historic",
  //   divRate: null,
  //   peRatioFwd: 20.203636801453,
  //   lastClosePriceEarningsRatio: 27.4387312606778,
  //   estimateFfo: null,
  //   ffoPerShareDiluted: null,
  //   dilutedEpsExclExtraItems: null,
  //   high52: 699.54,
  //   low52: 274.77,
  // };

  return (
    <Wrapper>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        fetch stock data
      </button>
      {data && (
        <Details>
          <Price> {"$" + data.lastDaily.last}</Price>
          <Name>{data.companyName}</Name>
          {"$TSLA"}
          <Details>{/* {"$" + data.id.toUpperCase()} */}</Details>

          <Technicals>
            <Details>
              {"MCap : $" + data.marketCap / 1000000000 + "(B)"}
            </Details>
            <Details>
              {"Volume : $" + data.lastDaily.volume}
              {/* {`${data.lastDaily.volumeAt}`} */}
            </Details>
            <Details>{"EPS : $" + data.eps}</Details>
            <Details>{"52W High : $" + data.high52}</Details>
            <Details>{"52W Low : $" + data.low52}</Details>
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
  background: var(--color-black);
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
