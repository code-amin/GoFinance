import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { HiStar, HiOutlineStar } from "react-icons/hi";
const Stock = () => {
  const { user, isAuthenticated } = useAuth0();
  const [favourites, setFavourites] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavourite, setIsFavourite] = useState(false);
  const [colour, setColour] = useState("");
  const { stock } = useParams();
  const [data, setData] = useState("");
  const [metaData, setMetaData] = useState("");
  // TEMPORARY TO AVOID TOO MANY API REQUESTS
  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/get-stock-id/${stock}`)
      .then((res) => res.json())
      .then((mdata) => {
        console.log(mdata);
        setMetaData(mdata);
        console.log(mdata.data.data.id);
        fetch(`/api/get-price/${mdata.data.data.id}`)
          .then((res) => res.json())
          .then((datax) => {
            console.log(datax);
            setData(datax.data.real_time_quotes[0]);
            setIsLoading(false);
          });
      });
  }, [stock]);

  useEffect(() => {
    const fetchFavourite = async () => {
      try {
        if (isAuthenticated) {
          const { email } = user;
          const fetchResult = await fetch(`/api/get-favourites/${email}`);
          const parsedResult = await fetchResult.json();
          setFavourites(parsedResult.data ?? []);
          setIsFavourite(parsedResult.data.includes(stock));
          console.log(favourites.includes(stock));
          console.log({ favourites });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFavourite();
  }, [isAuthenticated]);

  const handleFavourites = () => {
    const { email } = user;
    setIsFavourite(!isFavourite);
    if (isFavourite) {
      fetch("/api/remove-favourite/", {
        method: "PATCH",
        body: JSON.stringify({
          email,
          ticker: stock,
        }),
        headers: { "Content-Type": "application/json" },
        Accept: "application/json",
      });
      setFavourites(favourites.filter((favTicker) => favTicker !== stock));
      console.log(`removed ${stock}`);
    } else {
      fetch("/api/add-favourite/", {
        method: "POST",
        body: JSON.stringify({
          email,
          ticker: stock,
        }),
        headers: { "Content-Type": "application/json" },
        Accept: "application/json",
      });
      setFavourites([...favourites, stock]);
      console.log(`added ${stock}`);
    }
  };

  if (isLoading) {
    return <>Retrieving data...</>;
  }
  const percentage = (data.last / data.prev_close - 1) * 100;

  return (
    <Wrapper>
      {data && (
        <>
          {favourites && (
            <ToggleFavourite>
              {isFavourite ? (
                <HiStar
                  onClick={() => {
                    handleFavourites();
                  }}
                />
              ) : (
                <HiOutlineStar
                  onClick={() => {
                    handleFavourites();
                  }}
                />
              )}
            </ToggleFavourite>
          )}
          {
            <Img
              src={`${
                metaData.data.data.meta.companyLogoUrl
                  ? metaData.data.data.meta.companyLogoUrl
                  : "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }`}
            />
          }
          <h1>{data.lua.company}</h1>
          <Price>
            {" $" + data.sa_slug.toUpperCase()}
            {" $" + data.last}
            {(data.last / data.prev_close - 1) * 100 > 0
              ? ` (⬆${percentage.toFixed(2)}%)`
              : ` (⬇${percentage.toFixed(2)}%)`}
          </Price>

          <div>
            {metaData.data.data.attributes.tradingViewSlug}
            <h3>Technicals</h3>
            <div>
              {"Market Cap : $" +
                (data.market_cap / 1000000000).toFixed(2) +
                "(B)"}
            </div>
            <div>
              {"Volume : $" + data.volume}

              {/* {`${data.lastDaily.volumeAt}`} */}
            </div>
            <div>{"Open : $" + data.open}</div>
            <div>{"52-Week High : $" + data.lua.high_52w}</div>
            <div>{"52-Week Low : $" + data.lua.low_52w}</div>
          </div>

          {/* <h3>About the company</h3>
          <div>{" " + data.longDesc}</div>
          <div>{data.primaryname}</div>

          <div>
            {"Located in: " +
              data.city +
              ", " +
              data.state +
              ", " +
              data.country}
          </div> */}
        </>
      )}
    </Wrapper>
  );
};

export default Stock;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px;
  min-height: 50px;
  position: relative;
  max-width: 500px;
  height: calc(100vh - 120px);
`;

const ToggleFavourite = styled.div`
  font-size: 35px;
  max-width: 35px;
  color: #966fd6;
  margin: 5px 5px 10px 2px;
  /* position: absolute; */
  left: 0;
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Img = styled.img`
  width: 50px;
  position:absolute;
  right:0;
  float: right;
  margin-right: 10px;
  object-fit: contain;
  overflow: hidden;
`;
