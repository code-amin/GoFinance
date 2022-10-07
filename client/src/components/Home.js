import styled from "styled-components";
import { Link } from "react-router-dom";
import Featured from "./Featured";
import NewsFeed from "./NewsFeed";
import Stock from "./Stock";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Header>
          {" "}
          Your <Underline>favorite stocks</Underline> at any time 🚀
        </Header>

        <FeaturedSection>
          <Featured />
          <ViewFeatured to="/stock/TSLA">View stock... →</ViewFeatured>
        </FeaturedSection>
      </Wrapper>
      <NewsFeed />
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: black;
  padding: 3px;
`;

const Header = styled.h1`
  color: black;
  font-size: 50px;
  padding: 140px 0px 20px 20px;
  width: 50%;
  display: grid;
  justify-content: center;
`;

const Underline = styled.p`
  text-decoration: underline;
  color: var(--color-purple);
`;

const FeaturedSection = styled.div`
  width: 50%;
  margin: 30px;
  display: grid;
  justify-content: center;
`;

const ViewFeatured = styled(Link)`
  text-decoration: none;
  font-style: italic;
`;
