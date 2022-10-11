import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";

const Favourites = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [favourites, setFavourites] = useState("");

  // POPULATE THE FAVOURITES LIST BY FETCHING OUR MONGODB
  if (!favourites) {
    const fetchFavourite = async () => {
      try {
        if (isAuthenticated) {
          //WE VERIFY THE USERS FAVOURITES IN THE DB AND IF NONE CREATE AN EMPTY ARRAY FOR THE FUTURE
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
          {favourites?.map((favourite) => {
            return (
              <FavouritesURL to={`/stock/${favourite}`}>
                <HiStar />
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
const FavHeader = styled.div`
  font-size: 35px;
  text-align: center;
`;
const FavouritesDiv = styled.div`
  display: flex;
  color: var(--color-blue);
`;
const FavouritesURL = styled(Link)`
  position: relative;
  min-width: 320px;
  height: 80px;
  box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 20px;
  transition: 0.5s;
  text-align: center;
  padding-top: 30px;
  &:hover {
    transform: scale(1.15);
  }
`;
