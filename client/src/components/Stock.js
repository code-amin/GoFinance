import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { RotatingLines } from "react-loader-spinner";

const Stock = () => {
  const { user, isAuthenticated } = useAuth0();
  const [favourites, setFavourites] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavourite, setIsFavourite] = useState(false);
  const { stock } = useParams();
  const [data, setData] = useState("");
  const [metaData, setMetaData] = useState("");

  // FIRST WE GET THE STOCKS SEEKING ALPHA_ID AND THEN ONLY CAN WE FETCH ITS REAL TIME DATA
  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/get-stock-id/${stock}`)
      .then((res) => res.json())
      .then((mdata) => {
        setMetaData(mdata);
        fetch(`/api/get-price/${mdata.data.data.id}`)
          .then((res) => res.json())
          .then((datax) => {
            setData(datax.data.real_time_quotes[0]);
            setIsLoading(false);
          });
      });
  }, [stock]);

  // VERIFY IF ITS ONE OF OUR FAVOURITES TO TRIGGER THE STAR
  useEffect(() => {
    const fetchFavourite = async () => {
      try {
        if (isAuthenticated) {
          const { email } = user;
          const fetchResult = await fetch(`/api/get-favourites/${email}`);
          const parsedResult = await fetchResult.json();
          setFavourites(parsedResult.data ?? []);
          setIsFavourite(parsedResult.data.includes(stock));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFavourite();
  }, [isAuthenticated]);

  // WHEN WE CLICK ON THE STAR TO ADD TO FAVOURITES
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
    }
  };

  if (isLoading) {
    return (
      <>
        Retrieving data...
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="25"
          visible={true}
        />
      </>
    );
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
            {" $" + data.last.toFixed(2)}
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
              {"Volume : $" +
                data.volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div>{"Open : $" + data.open}</div>
            <div>{"52-Week High : $" + data.lua.high_52w.toFixed(2)}</div>
            <div>{"52-Week Low : $" + data.lua.low_52w.toFixed(2)}</div>
          </div>
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
  left: 0;
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Img = styled.img`
  width: 97.5px;
  height: 97.5px;
  position: absolute;
  top: 3px;
  right: -130px;
  float: right;
  margin-right: 10px;
  object-fit: contain;
  overflow: hidden;
`;
