import styled from "styled-components";
import { Link } from "react-router-dom";
import Featured from "./Featured";
import NewsFeed from "./NewsFeed";

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <Headline>
          Your <Underline>favorite stocks</Underline> at any time.
        </Headline>
        <FeaturedSection>
          <Featured />
          <ViewFeatured to="/stock/TSLA">View stock... →</ViewFeatured>
        </FeaturedSection>
      </Header>
      <NewsFeed />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  color: black;
  padding: 3px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;

const Headline = styled.h1`
  color: var(--color-blue);
  font-size: 50px;
  padding: 80px 0px 0px 20px;
  width: 50%;
`;

const Underline = styled.p`
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
  padding-left: 25px;
`;
