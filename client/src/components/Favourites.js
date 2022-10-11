import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";

const Favourites = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [dataIsLoading, setDataIsLoading] = useState(true);

  const [favourites, setFavourites] = useState("");
  if (!favourites) {
    const fetchFavourite = async () => {
      try {
        if (isAuthenticated) {
          const { email } = user;
          const fetchResult = await fetch(`/api/get-favourites/${email}`);
          const parsedResult = await fetchResult.json();

          setFavourites(parsedResult.data ?? []);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setDataIsLoading(false);
      }
    };
    fetchFavourite();
  }
  return (
    <FavouritesDiv>
      {favourites && (
        <FavouriteContainer>
          <FavHeader>Favourites</FavHeader>
          <HiStar />
          {favourites?.map((favourite) => {
            return (
              <FavouritesURL to={`/stock/${favourite}`}>
                {favourite}
              </FavouritesURL>
            );
          })}
        </FavouriteContainer>
      )}
    </FavouritesDiv>
  );
};

export default Favourites;

const FavouriteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FavouritesDiv = styled.div`
  display: flex;
  color: var(--color-blue);
`;
const FavouritesURL = styled(Link)`
  font-size: 16px;
  display: grid;
`;
const FavHeader = styled.div`
  font-size: 25px;
`;
