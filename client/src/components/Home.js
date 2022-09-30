import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <Wrapper>
      <Header>
        {" "}
        Your <Underline>favorite stocks</Underline> at any time 🚀{" "}
      </Header>

      <FeaturedSection>
        <h2>$TSLA</h2>
        <StockDiv></StockDiv>
        <ViewFeatured to="/:stock">View stock... →</ViewFeatured>
      </FeaturedSection>

      {/* // add this section below the Header */}
      <Feed>
        <StockList></StockList>
      </Feed>
    </Wrapper>
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
  padding: 140px 0px 20px 20px;
  width: 50%;
`;

const Underline = styled.p`
  text-decoration: underline;
  color: var(--color-purple);
`;

const FeaturedSection = styled.div`
  width: 50%;
  margin: 30px;
`;

const StockDiv = styled.div`
  height: 400px;
  width: 200px;
  border: 1px red dashed;
`;

const ViewFeatured = styled(Link)`
  text-decoration: none;
  font-style: italic;
`;

// Stock feed section
const Feed = styled.div`
  border: 1px red dashed;
  position: relative;
`;

const StockList = styled.ul`
  border: 1px red dashed;
`;
