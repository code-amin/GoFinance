import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsFeed = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/get-news/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Wrapper>
      {<Header>Headlines</Header>}

      {data?.data.map((newsObject) => {
        return (
          <NewsSection>
            <NewsCard>
              <Img
                src={`${
                  newsObject.attributes.gettyImageUrl
                    ? newsObject.attributes.gettyImageUrl
                    : "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }`}
              />
              <div style={{ padding: "10px" }}>
                <Anchor
                  href={newsObject.links.canonical}
                  target="_blank"
                  rel="noreferrer"
                >
                  {newsObject.attributes.title}
                  <ReadMore>READ MORE</ReadMore>
                </Anchor>
              </div>
            </NewsCard>
          </NewsSection>
        );
      })}
    </Wrapper>
  );
};

export default NewsFeed;
const Header = styled.h2`
  color: var(--color-blue);
  font-size: 35px;
  padding: 10px 0px 0px 10px;
  width: 50%;
`;
const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid var(--color-beige);
`;

// Stock feed section
const NewsSection = styled.div`
  border: 2.5px var(--color-purple) solid;
  border-radius: 10px;
  padding: 0;
  margin: 2px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.6s ease-in-out;
    background-color: #966fd6;
    color: var(--color-beige);
  }
`;

const Img = styled.img`
  width: 150px;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  object-fit: cover;
  overflow: hidden;
`;
const NewsCard = styled.div`
  display: flex;
  border-radius: 10px;
  white-space: wrap;
  padding: 0;
  color: #010606;
  font-size: 22px;
  min-height: 100px;
  &:hover {
    transition: all 0.6s ease-in-out;
    color: var(--color-beige);
  }
`;
const Anchor = styled.a`
  margin-top: 10px;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
const ReadMore = styled.div`
  color: var(--color-blue);
  font-size: 15px;
  padding-top: 2px;
`;
