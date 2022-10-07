import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// TODO -> add params so that click on news -> redirect to /news/:id with content (on our website)
const NewsArticle = ({ data, setResult }) => {
  // console.log(data);
  const { name, content } = data;
  // const navigate = useNavigate();

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   setResult([]);
  //   navigate(`/stock/${name}`);
  // };

const data = {
  "id": "3889425",
  "type": "news",
  "attributes": {
    "publishOn": "2022-10-06T14:22:26-04:00",
    "isLockedPro": false,
    "commentCount": 0,
    "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1266875357/image_1266875357.jpg",
    "videoPreviewUrl": null,
    "themes": {
      "small-cap": {
        "path": "/",
        "slug": "small-cap",
        "title": null,
        "sasource": "",
        "non_theme": true
      },
      "on-the-move": {
        "path": "/market-news/on-the-move",
        "slug": "on-the-move",
        "title": "On the Move",
        "sasource": "theme_breadcrumb",
        "non_theme": false
      },
      "energy": {
        "path": "/market-news/energy",
        "slug": "energy",
        "title": "Energy ",
        "sasource": "theme_breadcrumb",
        "non_theme": false
      },
      "news-metered": {
        "path": "/",
        "slug": "news-metered",
        "title": null,
        "sasource": "",
        "non_theme": true
      }
    },
    "title": "Transocean shares power higher after double-upgrade by Barclays",
    "lastModified": "2022-10-06T14:24:29-04:00",
    "isExclusive": false,
    "status": "Active",
    "content": "<p></p> <p>Transocean (<span class=\"ticker-hover-wrapper\">NYSE:<a href=\"https://seekingalpha.com/symbol/RIG\" title=\"Transocean Ltd.\">RIG</a></span>) <span class=\"green\">+6.7%</span> in Thursday's trading after Barclays upgraded shares two notches to Overweight from Underweight with a $5 price target, raised from $3.50, as the bank forecasts dayrates will rise to $500K next year from $400K currently.</p> <p class=\"paywall-full-content\">Barclays believes the offshore drilling market outlook has improved materially, and while Transocean's (<a href=\"https://seekingalpha.com/symbol/RIG\" title=\"Transocean Ltd.\">RIG</a>) debt balance remains a concern, the company's risk-reward profile is \"now significantly more attractive at current valuation levels in light of significant increase in pricing we've seen for high-spec offshore rigs the past 3-4 months - several long-term contracts for $440K/day - and our view that the market will remain tight over the next 2-3 years at least.\"</p> <p class=\"paywall-full-content\">Transocean (<a href=\"https://seekingalpha.com/symbol/RIG\" title=\"Transocean Ltd.\">RIG</a>) also pull on several levers to help pay down debt and extend maturities, with terms and pricing likely to become even more favorable over time as the company should generate ~$900M of free cash flow per year starting in 2024.</p> <p class=\"paywall-full-content\">Barclays also upgraded TechnipFMC (<span class=\"ticker-hover-wrapper\">NYSE:<a href=\"https://seekingalpha.com/symbol/FTI\" title=\"TechnipFMC plc\">FTI</a></span>) to Overweight from Equal Weight with a $14 price target, up from $9, citing its \"materially lower\" deepwater cost structure over the last five years; shares <span class=\"green\">+5%</span> in Thursday's trading.</p> <p class=\"paywall-full-content\">TechnipFMC's (<a href=\"https://seekingalpha.com/symbol/FTI\" title=\"TechnipFMC plc\">FTI</a>) 40% growth in orders this year is \"just the start, and continued momentum the next several years coupled with better pricing (given recent capacity rationalization and industry consolidation) will drive earnings growth and free cash flow generation,\" Barclays wrote.</p> <p class=\"paywall-full-content\">Schlumberger (<a href=\"https://seekingalpha.com/symbol/SLB\" title=\"Schlumberger Limited\">SLB</a>) is Barclays' top pick in the group with offshore oilfield spending about to ramp up.</p> <p class=\"paywall-full-content\">Transocean (<a href=\"https://seekingalpha.com/symbol/RIG\" title=\"Transocean Ltd.\">RIG</a>) shares \"have been artificially pressured for a long time,\" and the offshore drilling sector is \"recovering fast,\" Anna Sokolidou wrote in an <a href=\"https://seekingalpha.com/article/4543394-transocean-shares-have-just-plunged-substantially-but-have-upside-potential\" target=\"_blank\">analysis published recently on Seeking Alpha</a>.</p>",
    "metered": true,
    "correctionReason": null
  },
  "relationships": {
    "author": {
      "data": {
        "id": "543215",
        "type": "newsAuthorUser"
      }
    },
    "sentiments": {
      "data": []
    },
    "primaryTickers": {
      "data": [
        {
          "id": "1447",
          "type": "tag"
        },
        {
          "id": "1891",
          "type": "tag"
        }
      ]
    },
    "secondaryTickers": {
      "data": [
        {
          "id": "1901",
          "type": "tag"
        }
      ]
    },
    "otherTags": {
      "data": []
    },
    "ratingChangeNotice": {}
  },
  "links": {
    "self": "/news/3889425-transocean-shares-power-higher-after-double-upgrade-by-barclays",
    "canonical": "https://seekingalpha.com/news/3889425-transocean-shares-power-higher-after-double-upgrade-by-barclays",
    "uriImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1266875357/image_1266875357.jpg?io=getty-c-w750",
    "schemaImage": [
      "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1266875357/image_1266875357.jpg?io=getty-c-w1280",
      "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1266875357/image_1266875357.jpg?io=getty-c-crop-16-9",
      "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1266875357/image_1266875357.jpg?io=getty-c-crop-4-3"
    ]
  }
}

  return (
    <Wrapper onClick={handleClick}>
      <Name>{name}</Name>
      <Content>{content}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;

const Name = styled.span`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const Content = styled.span`
  margin-left: 5px;
`;

export default NewsArticle;
