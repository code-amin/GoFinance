import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsFeed = () => {
  // const [data, setData] = useState(null);
  // const { stock } = useParams();

  // HARDCODED API DATA TO AVOID BUSTING REQUEST LIMIT
  // useEffect(() => {
  // const handleNews = () => {
  //   fetch(`/api/get-news/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // };
  // }, []);

  // HARDCODED API DATA TO AVOID BUSTING REQUEST LIMIT
  const data = {
    status: 200,
    data: [
      {
        id: "3889425",
        type: "news",
        attributes: {
          publishOn: "2022-10-06T14:22:26-04:00",
          isLockedPro: false,
          commentCount: 0,
          gettyImageUrl:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1266875357/image_1266875357.jpg",
          videoPreviewUrl: null,
          themes: {
            "small-cap": {
              path: "/",
              slug: "small-cap",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "on-the-move": {
              path: "/market-news/on-the-move",
              slug: "on-the-move",
              title: "On the Move",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            energy: {
              path: "/market-news/energy",
              slug: "energy",
              title: "Energy ",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            "news-metered": {
              path: "/",
              slug: "news-metered",
              title: null,
              sasource: "",
              non_theme: true,
            },
          },
          title:
            "Transocean shares power higher after double-upgrade by Barclays",
          lastModified: "2022-10-06T14:24:29-04:00",
          isExclusive: false,
          status: "Active",
          content:
            '<p></p> <p>Transocean (<span class="ticker-hover-wrapper">NYSE:<a href="https://seekingalpha.com/symbol/RIG" title="Transocean Ltd.">RIG</a></span>) <span class="green">+6.7%</span> in Thursday\'s trading after Barclays upgraded shares two notches to Overweight from Underweight with a $5 price target, raised from $3.50, as the bank forecasts dayrates will rise to $500K next year from $400K currently.</p> <p class="paywall-full-content">Barclays believes the offshore drilling market outlook has improved materially, and while Transocean\'s (<a href="https://seekingalpha.com/symbol/RIG" title="Transocean Ltd.">RIG</a>) debt balance remains a concern, the company\'s risk-reward profile is "now significantly more attractive at current valuation levels in light of significant increase in pricing we\'ve seen for high-spec offshore rigs the past 3-4 months - several long-term contracts for $440K/day - and our view that the market will remain tight over the next 2-3 years at least."</p> <p class="paywall-full-content">Transocean (<a href="https://seekingalpha.com/symbol/RIG" title="Transocean Ltd.">RIG</a>) also pull on several levers to help pay down debt and extend maturities, with terms and pricing likely to become even more favorable over time as the company should generate ~$900M of free cash flow per year starting in 2024.</p> <p class="paywall-full-content">Barclays also upgraded TechnipFMC (<span class="ticker-hover-wrapper">NYSE:<a href="https://seekingalpha.com/symbol/FTI" title="TechnipFMC plc">FTI</a></span>) to Overweight from Equal Weight with a $14 price target, up from $9, citing its "materially lower" deepwater cost structure over the last five years; shares <span class="green">+5%</span> in Thursday\'s trading.</p> <p class="paywall-full-content">TechnipFMC\'s (<a href="https://seekingalpha.com/symbol/FTI" title="TechnipFMC plc">FTI</a>) 40% growth in orders this year is "just the start, and continued momentum the next several years coupled with better pricing (given recent capacity rationalization and industry consolidation) will drive earnings growth and free cash flow generation," Barclays wrote.</p> <p class="paywall-full-content">Schlumberger (<a href="https://seekingalpha.com/symbol/SLB" title="Schlumberger Limited">SLB</a>) is Barclays\' top pick in the group with offshore oilfield spending about to ramp up.</p> <p class="paywall-full-content">Transocean (<a href="https://seekingalpha.com/symbol/RIG" title="Transocean Ltd.">RIG</a>) shares "have been artificially pressured for a long time," and the offshore drilling sector is "recovering fast," Anna Sokolidou wrote in an <a href="https://seekingalpha.com/article/4543394-transocean-shares-have-just-plunged-substantially-but-have-upside-potential" target="_blank">analysis published recently on Seeking Alpha</a>.</p>',
          metered: true,
          correctionReason: null,
        },
        relationships: {
          author: {
            data: {
              id: "543215",
              type: "newsAuthorUser",
            },
          },
          sentiments: {
            data: [],
          },
          primaryTickers: {
            data: [
              {
                id: "1447",
                type: "tag",
              },
              {
                id: "1891",
                type: "tag",
              },
            ],
          },
          secondaryTickers: {
            data: [
              {
                id: "1901",
                type: "tag",
              },
            ],
          },
          otherTags: {
            data: [],
          },
          ratingChangeNotice: {},
        },
        links: {
          self: "/news/3889425-transocean-shares-power-higher-after-double-upgrade-by-barclays",
          canonical:
            "https://seekingalpha.com/news/3889425-transocean-shares-power-higher-after-double-upgrade-by-barclays",
          uriImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1266875357/image_1266875357.jpg?io=getty-c-w750",
          schemaImage: [
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1266875357/image_1266875357.jpg?io=getty-c-w1280",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1266875357/image_1266875357.jpg?io=getty-c-crop-16-9",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1266875357/image_1266875357.jpg?io=getty-c-crop-4-3",
          ],
        },
      },
      {
        id: "3889195",
        type: "news",
        attributes: {
          publishOn: "2022-10-06T14:19:58-04:00",
          isLockedPro: false,
          commentCount: 3,
          gettyImageUrl:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1324090513/image_1324090513.jpg",
          videoPreviewUrl: null,
          themes: {
            technology: {
              path: "/market-news/technology",
              slug: "technology",
              title: "Tech",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            "mid-cap": {
              path: "/",
              slug: "mid-cap",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "hidden-from-qp": {
              path: "/",
              slug: "hidden-from-qp",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "m-a": {
              path: "/market-news/m-a",
              slug: "m-a",
              title: "M&A",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            "news-metered": {
              path: "/",
              slug: "news-metered",
              title: null,
              sasource: "",
              non_theme: true,
            },
            consumer: {
              path: "/market-news/consumer",
              slug: "consumer",
              title: "Consumer ",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
          },
          title:
            "Pelosi, Pallone send letter to FCC on concerns about Tegna sale (update)",
          lastModified: "2022-10-06T14:19:58-04:00",
          isExclusive: false,
          status: "Active",
          content:
            '<p></p> <p><strong>Updat 2:20pm</strong>: Adds link to Standard General press release addressing the letter to the FCC.</p> <p>House Speaker Nancy Pelosi (D-CA) and Commerce Chairman Frank Pallone (D-NJ) sent a letter to the Federal Trade Commission to <a href="https://www.speaker.gov/sites/speaker.house.gov/files/Pelosi%20Pallone%20Letter%20to%20FCC%20on%20TENGA%2010.6.22.pdf" target="_blank">express their concerns </a><span class="paywall-full-content">about the proposed purchase of Tegna Inc. (</span><span class="ticker-hover-wrapper paywall-full-content">NYSE:<a href="https://seekingalpha.com/symbol/TGNA" title="TEGNA Inc.">TGNA</a></span><span class="paywall-full-content">).</span></p> <p class="paywall-full-content">"By law, the FCC is required to determine whether the proposed transaction will serve the public interest, convenience, and necessity," Pelosi and Pallone <a href="https://energycommerce.house.gov/newsroom/press-releases/pelosi-pallone-send-letter-to-fcc-chair-expressing-concerns-on-proposed" target="_blank">wrote in the letter</a> to FCC Chairwoman Jessica Rosenworcel. "After reviewing the public record, we are concerned that this transaction would violate the FCC’s mandate by restricting access to local news coverage, cutting jobs at local television stations, and raising prices on consumers.”</p> <p class="paywall-full-content">A week ago the FCC disclosed it\'s<a href="https://seekingalpha.com/news/3887288-tegnastandard-general-gets-fcc-request-for-more-information" target="_blank"> asking for further information </a>in regards to the deal. The FCC requested the parties respond to the agency\'s request no later than Oct. 13. Tegna (<a href="https://seekingalpha.com/symbol/TGNA" title="TEGNA Inc.">TGNA</a>) in late February agreed to be sold to Standard General and Apollo Global (<a href="https://seekingalpha.com/symbol/APO" title="Apollo Global Management, Inc.">APO</a>) for<a href="https://seekingalpha.com/news/3802377-tegna-climbs-after-confirming-24share-sale-to-standard-generalapollo" target="_blank"> $24/share in cash</a><a href="https://seekingalpha.com/news/3802377-tegna-climbs-after-confirming-24share-sale-to-standard-generalapollo" target="_blank">.</a> </p> <p class="paywall-full-content">Standard General responded to the FCC letter in a statement emailed to Seeking Alpha. The company also<a href="https://seekingalpha.com/pr/18967430-standard-general-sets-record-straight-regarding-pending-acquisition-of-tegna" target="_blank"> issued a press release</a> addressing the letter.</p> <p class="paywall-full-content">“Standard General’s proposed acquisition of TEGNA will yield significant public interest benefits without any countervailing public interest harms, including creating the largest minority-owned and female-led broadcast station group in U.S. history," Standard General said in the statement. "We were therefore disappointed to see the FCC petitioners enlist the involvement of Speaker Pelosi and Congressman Pallone by misleading them with the same false statements they have been making to the FCC."</p> <p class="paywall-full-content">The Pelosi/Pallone letter comes after a Dealreporter item on Wednesday said that a potential close of the Tegna (<a href="https://seekingalpha.com/symbol/TGNA" title="TEGNA Inc.">TGNA</a>) deal by the end of year may be hard. The Dealreporter post also said that the deal may struggle to get done at the Bureau level because it\'s complex and due to pressure from politicians.</p> <p class="paywall-full-content">The report came after a CTFN item from Monday that the FCC\'s review of its planned sale to Standard General was "going smoothly." The deal isn\'t expected to go to the <a href="https://seekingalpha.com/news/3887989-tegna-gains-amid-report-fcc-review-said-to-be-going-smoothly" target="_blank">commissioner level at the FCC.</a></p> <p class="paywall-full-content">"The TEGNA transaction has been under review at the FCC for almost nine months at this point, and the time has come to approve the transaction and unleash an almost 300% increase in the number of minority-owned TV stations in the U.S., bringing badly-needed diversity to the nation’s broadcast station ownership," Standard General said in its release.</p> <p class="paywall-full-content">Last month Tegna stock whipped around on Sept. 13 amid a report about <a href="https://seekingalpha.com/news/3882467-tegna-stock-whips-around-on-report-about-sohn-being-seated-at-fcc-for-standard-general-vote" target="_blank">Sohn being seated at FCC for Standard General vote.</a></p>',
          metered: true,
          correctionReason: null,
        },
        relationships: {
          author: {
            data: {
              id: "52996117",
              type: "newsAuthorUser",
            },
          },
          sentiments: {
            data: [],
          },
          primaryTickers: {
            data: [
              {
                id: "509176",
                type: "tag",
              },
            ],
          },
          secondaryTickers: {
            data: [],
          },
          otherTags: {
            data: [],
          },
          ratingChangeNotice: {},
        },
        links: {
          self: "/news/3889195-pelosi-pallone-send-letter-to-fcc-on-concerns-about-tegna-sale",
          canonical:
            "https://seekingalpha.com/news/3889195-pelosi-pallone-send-letter-to-fcc-on-concerns-about-tegna-sale",
          uriImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1324090513/image_1324090513.jpg?io=getty-c-w750",
          schemaImage: [
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1324090513/image_1324090513.jpg?io=getty-c-w1280",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1324090513/image_1324090513.jpg?io=getty-c-crop-16-9",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1324090513/image_1324090513.jpg?io=getty-c-crop-4-3",
          ],
        },
      },
      {
        id: "3889423",
        type: "news",
        attributes: {
          publishOn: "2022-10-06T14:13:05-04:00",
          isLockedPro: false,
          commentCount: 0,
          gettyImageUrl:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/503525151/image_503525151.jpg",
          videoPreviewUrl: null,
          themes: {
            healthcare: {
              path: "/market-news/healthcare",
              slug: "healthcare",
              title: "Healthcare ",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            "mid-cap": {
              path: "/",
              slug: "mid-cap",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "hidden-from-qp": {
              path: "/",
              slug: "hidden-from-qp",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "news-metered": {
              path: "/",
              slug: "news-metered",
              title: null,
              sasource: "",
              non_theme: true,
            },
          },
          title:
            "Novartis division Sandoz reports supply issue of generic ADHD drug Adderall - Bloomberg",
          lastModified: "2022-10-06T14:13:12-04:00",
          isExclusive: false,
          status: "Active",
          content:
            '<p></p> <ul> <li>Amid a continuing nationwide shortage of generic versions of the attention deficit/hyperactivity disorder drug Adderall (mixed amphetamine salts), Novartis (<span class="ticker-hover-wrapper">NYSE:<a href="https://seekingalpha.com/symbol/NVS" title="Novartis AG">NVS</a></span>) unit Sandoz, the second largest maker of the treatment, is reporting new supply issues.</li> <li>Sandoz, which<span class="paywall-full-content"> previously said it was only having problems with the extended-release version, is now experiencing challenges with the immediate-release version, </span><em class="paywall-full-content"><a href="https://www.bloomberg.com/news/articles/2022-10-06/aderall-shortages-eight-companies-report-issues-amid-record-high-demand" target="_blank">Bloomberg</a></em><span class="paywall-full-content"> reported.</span> </li> <li class="paywall-full-content">Several drug companies now have shortages of one or both versions of generic Adderall, according to data compiled by the <a href="https://www.ashp.org/drug-shortages/current-shortages/drug-shortage-detail.aspx?id=857" target="_blank">University of Utah\'s Drug Information Service</a>. This includes Teva Pharmaceutical Industries (<span class="ticker-hover-wrapper">NYSE:<a href="https://seekingalpha.com/symbol/TEVA" title="Teva Pharmaceutical Industries Limited">TEVA</a></span>), the largest supplier in the US.</li> <li class="paywall-full-content">In August, <em><a href="https://www.bloomberg.com/news/articles/2022-08-26/adderall-shortages-spread-to-four-pharmaceutical-companies" target="_blank">Bloomberg</a></em> reported that Adderall prescriptions in the US have hit record highs this year due to <a href="https://www.bloomberg.com/news/articles/2022-08-26/adderall-shortages-spread-to-four-pharmaceutical-companies" target="_blank">more diagnoses and increased availability through online startups</a>.</li> <li class="paywall-full-content">Novartis (<a href="https://seekingalpha.com/symbol/NVS" title="Novartis AG">NVS</a>) recorded the <a href="https://seekingalpha.com/news/3887725-for-european-pharmas-poor-q3-performance-makes-the-quarter-one-to-forget" target="_blank">second-best stock performance among European large cap pharmas in Q3</a>.</li> </ul>',
          metered: true,
          correctionReason: null,
        },
        relationships: {
          author: {
            data: {
              id: "53161691",
              type: "newsAuthorUser",
            },
          },
          sentiments: {
            data: [],
          },
          primaryTickers: {
            data: [
              {
                id: "1442",
                type: "tag",
              },
              {
                id: "1170",
                type: "tag",
              },
            ],
          },
          secondaryTickers: {
            data: [],
          },
          otherTags: {
            data: [],
          },
          ratingChangeNotice: {},
        },
        links: {
          self: "/news/3889423-novartis-division-sandoz-reports-supply-issue-of-generic-adhd-drug-adderall-bloomberg",
          canonical:
            "https://seekingalpha.com/news/3889423-novartis-division-sandoz-reports-supply-issue-of-generic-adhd-drug-adderall-bloomberg",
          uriImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/503525151/image_503525151.jpg?io=getty-c-w750",
          schemaImage: [
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/503525151/image_503525151.jpg?io=getty-c-w1280",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/503525151/image_503525151.jpg?io=getty-c-crop-16-9",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/503525151/image_503525151.jpg?io=getty-c-crop-4-3",
          ],
        },
      },
      {
        id: "3889424",
        type: "news",
        attributes: {
          publishOn: "2022-10-06T14:11:42-04:00",
          isLockedPro: false,
          commentCount: 3,
          gettyImageUrl:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1356169680/image_1356169680.jpg",
          videoPreviewUrl: null,
          themes: {
            technology: {
              path: "/market-news/technology",
              slug: "technology",
              title: "Tech",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            "large-cap": {
              path: "/",
              slug: "large-cap",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "prepare-hide-from-qp": {
              path: "/",
              slug: "prepare-hide-from-qp",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "dividend-stocks": {
              path: "/",
              slug: "dividend-stocks",
              title: null,
              sasource: "",
              non_theme: true,
            },
            dividends: {
              path: "/market-news/dividend-stocks",
              slug: "dividends",
              title: "Dividend News",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            "news-metered": {
              path: "/",
              slug: "news-metered",
              title: null,
              sasource: "",
              non_theme: true,
            },
          },
          title:
            "Oppenheimer reverses to upgrade Verizon as subscriber base improves",
          lastModified: "2022-10-06T14:25:26-04:00",
          isExclusive: false,
          status: "Active",
          content:
            '<p></p> <p>Oppenheimer has boosted Verizon stock (<span class="ticker-hover-wrapper">NYSE:<a href="https://seekingalpha.com/symbol/VZ" title="Verizon Communications Inc.">VZ</a></span>) to Outperform, citing its key catalyst as the improvement in subscriber base numbers.</p> <p>"After almost two years, we\'re getting constructive on Verizon again," analyst Tim Horan said in reversing a<span class="paywall-full-content"> downgrade the firm posted in February 2021 then based on what he said was overpayment for spectrum and 5G builds, "which led to customer defections, weaker balance sheet, and substantial capex investment."</span></p> <p class="paywall-full-content">"These factors are now reversing with network quality greatly improving, (fixed wireless) and even cable wholesale revenue growth, price increases, and lower capex enabling strong cash flow that should delever B/S back to the mid-to-low 2x range," he says now.</p> <p class="paywall-full-content">The company is gradually catching up to T-Mobile (<span class="ticker-hover-wrapper">NASDAQ:<a href="https://seekingalpha.com/symbol/TMUS" title="T-Mobile US, Inc.">TMUS</a></span>) in terms of 5G network performance and capability, Horan said.</p> <p class="paywall-full-content">The key catalyst is "gradual stabilization-to-growth of its subscriber base" even amid some volatile near-term trends, though strong free cash flow growth of 15% per year (now that Verizon has passed peak investment and leverage) should be supportive as well.</p> <p class="paywall-full-content">Finally, he notes, "the price is right" after some years of underperformance: Verizon has a price multiple of 7.5x 2023 earnings (a "55% discount to the market multiple") and the <a href="https://seekingalpha.com/symbol/VZ/dividends/scorecard" target="_blank">attractive 6.6% dividend yield with a "manageable" 50% payout</a>.</p> <p class="paywall-full-content">He\'s set a $50 price target, implying 31% upside in Verizon stock.</p> <p class="paywall-full-content">The telecom services space is a notable underperformer among Communication Services stocks Thursday: Verizon (<a href="https://seekingalpha.com/symbol/VZ" title="Verizon Communications Inc.">VZ</a>) is <span class="red">down 3.3%</span>, while AT&amp;T (<span class="ticker-hover-wrapper">NYSE:<a href="https://seekingalpha.com/symbol/T" title="AT&amp;T Inc.">T</a></span>) is <span class="red">down 3.2%</span> and T-Mobile (<a href="https://seekingalpha.com/symbol/TMUS" title="T-Mobile US, Inc.">TMUS</a>) <span class="red">down 0.9%</span>. Nascent fourth nationwide wireless network Dish Network (<span class="ticker-hover-wrapper">NASDAQ:<a href="https://seekingalpha.com/symbol/DISH" title="DISH Network Corporation">DISH</a></span>) is <span class="green">up 0.3%</span>. Foreign telecoms are losers in U.S. trading as well: <a href="https://seekingalpha.com/symbol/BCE" title="BCE Inc.">BCE</a> <span class="red">-2.8%</span>; Telus (<a href="https://seekingalpha.com/symbol/TU" title="TELUS Corporation">TU</a>) <span class="red">-2.7%</span>; Vodafone (<a href="https://seekingalpha.com/symbol/VOD" title="Vodafone Group Public Limited Company">VOD</a>) <span class="red">-2.1%</span>; Rogers Communications (<a href="https://seekingalpha.com/symbol/RCI" title="Rogers Communications Inc.">RCI</a>) <span class="red">-2.9%</span>; Telefónica (<a href="https://seekingalpha.com/symbol/TEF" title="Telefónica, S.A.">TEF</a>) <span class="red">-2%</span>.</p>',
          metered: true,
          correctionReason: null,
        },
        relationships: {
          author: {
            data: {
              id: "427396",
              type: "newsAuthorUser",
            },
          },
          sentiments: {
            data: [],
          },
          primaryTickers: {
            data: [
              {
                id: "693",
                type: "tag",
              },
              {
                id: "685",
                type: "tag",
              },
              {
                id: "7332",
                type: "tag",
              },
              {
                id: "144",
                type: "tag",
              },
            ],
          },
          secondaryTickers: {
            data: [
              {
                id: "945",
                type: "tag",
              },
              {
                id: "1324",
                type: "tag",
              },
              {
                id: "1334",
                type: "tag",
              },
              {
                id: "1342",
                type: "tag",
              },
              {
                id: "8352",
                type: "tag",
              },
            ],
          },
          otherTags: {
            data: [],
          },
          ratingChangeNotice: {},
        },
        links: {
          self: "/news/3889424-oppenheimer-reverses-to-upgrade-verizon-as-subscriber-base-improves",
          canonical:
            "https://seekingalpha.com/news/3889424-oppenheimer-reverses-to-upgrade-verizon-as-subscriber-base-improves",
          uriImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1356169680/image_1356169680.jpg?io=getty-c-w750",
          schemaImage: [
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1356169680/image_1356169680.jpg?io=getty-c-w1280",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1356169680/image_1356169680.jpg?io=getty-c-crop-16-9",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1356169680/image_1356169680.jpg?io=getty-c-crop-4-3",
          ],
        },
      },
      {
        id: "3889422",
        type: "news",
        attributes: {
          publishOn: "2022-10-06T14:00:11-04:00",
          isLockedPro: false,
          commentCount: 0,
          gettyImageUrl:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/487831223/image_487831223.jpg",
          videoPreviewUrl: null,
          themes: {
            "prepare-hide-from-qp": {
              path: "/",
              slug: "prepare-hide-from-qp",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "market-pulse": {
              path: "/",
              slug: "market-pulse",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "on-the-move": {
              path: "/market-news/on-the-move",
              slug: "on-the-move",
              title: "On the Move",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            energy: {
              path: "/market-news/energy",
              slug: "energy",
              title: "Energy ",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
          },
          title:
            "Consolidated Water among energy/materials gainers, Flexible Solutions in losers pack",
          lastModified: "2022-10-06T14:00:54-04:00",
          isExclusive: false,
          status: "Active",
          content:
            '<p></p> <ul> <li>\n<b>Gainers: </b>Mesa Royalty Trust (<a href="https://seekingalpha.com/symbol/MTR" title="Mesa Royalty Trust">MTR</a>) <font color="green">+9%</font>. Berry (<a href="https://seekingalpha.com/symbol/BRY" title="Berry Corporation">BRY</a>) <font color="green">+9%</font>. Ramaco Resources (<a href="https://seekingalpha.com/symbol/METC" title="Ramaco Resources, Inc.">METC</a>) <font color="green">+7%</font>. Fortuna Silver Mines (<a href="https://seekingalpha.com/symbol/FSM" title="Fortuna Silver Mines Inc.">FSM</a>) <font color="green">+7%</font>. Consolidated Water Co. (<a href="https://seekingalpha.com/symbol/CWCO" title="Consolidated Water Co. Ltd.">CWCO</a>) <font color="green">+7%</font>.</li> <li>\n<b>Losers: </b>Gold Royalty (<a href="https://seekingalpha.com/symbol/GROY" title="Gold Royalty Corp.">GROY</a>) <font color="red">-16%</font>. Cadiz (<a href="https://seekingalpha.com/symbol/CDZI" title="Cadiz Inc.">CDZI</a>) <font color="red">-10%</font>. Flexible Solutions International (<a href="https://seekingalpha.com/symbol/FSI" title="Flexible Solutions International, Inc.">FSI</a>) <font color="red">-10%</font>. Glatfelter (<a href="https://seekingalpha.com/symbol/GLT" title="Glatfelter Corporation">GLT</a>) <font color="red">-9%</font>. Kronos Worldwide (<a href="https://seekingalpha.com/symbol/KRO" title="Kronos Worldwide, Inc.">KRO</a>) <font color="red">-9%</font>.</li> </ul>',
          metered: false,
          correctionReason: null,
        },
        relationships: {
          author: {
            data: {
              id: "56260577",
              type: "newsAuthorUser",
            },
          },
          sentiments: {
            data: [],
          },
          primaryTickers: {
            data: [],
          },
          secondaryTickers: {
            data: [
              {
                id: "2304",
                type: "tag",
              },
              {
                id: "2823",
                type: "tag",
              },
              {
                id: "3910",
                type: "tag",
              },
              {
                id: "8539",
                type: "tag",
              },
              {
                id: "9861",
                type: "tag",
              },
              {
                id: "12214",
                type: "tag",
              },
              {
                id: "13731",
                type: "tag",
              },
              {
                id: "572042",
                type: "tag",
              },
              {
                id: "583888",
                type: "tag",
              },
              {
                id: "609042",
                type: "tag",
              },
            ],
          },
          otherTags: {
            data: [],
          },
          ratingChangeNotice: {},
        },
        links: {
          self: "/news/3889422-consolidated-water-among-energymaterials-gainers-flexible-solutions-in-losers-pack",
          canonical:
            "https://seekingalpha.com/news/3889422-consolidated-water-among-energymaterials-gainers-flexible-solutions-in-losers-pack",
          uriImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/487831223/image_487831223.jpg?io=getty-c-w750",
          schemaImage: [
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/487831223/image_487831223.jpg?io=getty-c-w1280",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/487831223/image_487831223.jpg?io=getty-c-crop-16-9",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/487831223/image_487831223.jpg?io=getty-c-crop-4-3",
          ],
        },
      },
      {
        id: "3889421",
        type: "news",
        attributes: {
          publishOn: "2022-10-06T13:53:48-04:00",
          isLockedPro: false,
          commentCount: 0,
          gettyImageUrl:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/471458018/image_471458018.jpg",
          videoPreviewUrl: null,
          themes: {
            "large-cap": {
              path: "/",
              slug: "large-cap",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "hidden-from-qp": {
              path: "/",
              slug: "hidden-from-qp",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "news-metered": {
              path: "/",
              slug: "news-metered",
              title: null,
              sasource: "",
              non_theme: true,
            },
          },
          title: "Westlake upgraded to Neutral at UBS on favorable risk-reward",
          lastModified: "2022-10-06T13:57:38-04:00",
          isExclusive: false,
          status: "Active",
          content:
            '<p></p> <p>Westlake (<span class="ticker-hover-wrapper">NYSE:<a href="https://seekingalpha.com/symbol/WLK" title="Westlake Corporation">WLK</a></span>) on Thursday was upgraded to a Neutral rating from Sell by analysts at UBS. The bank said the risk-reward ratio is more balanced for the chemical maker after its stock declined by about<span class="paywall-full-content"> 40% from midyear highs.</span></p> <p class="paywall-full-content">“With heightened demand risk near term it\'s too early for us to get more constructive, but we believe at these levels the downside is nearly priced in,” Joshua Spector, analyst at UBS, said in an Oct. 6 report.</p> <p class="paywall-full-content">UBS lowered its Q3 EPS estimate for Westlake to$4.97 from $5.34, compared with the consensus estimate of $4.74. The bank raised its price target to $95 a share from $92, based on an enterprise value-to-EBITDA multiple of about 4 times.</p> <p class="paywall-full-content">Westlake has fallen 7% this year, compared with a 22% decline for the S&amp;P 500 Stock Index (<a href="https://seekingalpha.com/symbol/SP500" title="S&amp;P 500 Index">SP500</a>).</p> <p class="paywall-full-content">KeyBanc in August downgraded chemical producers including Westlake, Dow (<a href="https://seekingalpha.com/symbol/DOW" title="Dow Inc.">DOW</a>) and LyondellBasell Industries (<a href="https://seekingalpha.com/symbol/LYB" title="LyondellBasell Industries N.V.">LYB</a>) to Underweight from Sector Weight because of declines in prices for different kinds of plastics made by the companies.</p> <p class="paywall-full-content">Westlalke’s products include polyvinyl chloride (PVC), a plastic that’s commonly used in pipes, siding and trim for homes. It also makes chlorine and caustic soda, or chlor-alkali, that are used in a variety of industrial and consumer products.</p> <p class="paywall-full-content">Seeking Alpha contributor Michael Fitzsimmons rates Westlake (<a href="https://seekingalpha.com/symbol/WLK" title="Westlake Corporation">WLK</a>) as a Buy based on its <a href="https://seekingalpha.com/article/4536019-westlake-better-living-through-chemicals" target="_blank">price-to-earnings multiple</a>.</p> <table border="0" cellpadding="0" cellspacing="0" width="284" class="paywall-full-content"> <colgroup> <col width="64"> <col width="78"> <col width="64"> <col width="78"> </colgroup> <tr> <td width="284" height="20" colspan="4">UBS estimates for Westlake (<a href="https://seekingalpha.com/symbol/WLK" title="Westlake Corporation">WLK</a>), Oct. 6</td> </tr> <tr> <td height="20"> </td> <td colspan="3">2022E</td> </tr> <tr> <td height="20"> </td> <td>New</td> <td> </td> <td>Old</td> </tr> <tr> <td height="20">Sales (mln)</td> <td align="right">$15,989</td> <td> </td> <td align="right">$16,382</td> </tr> <tr> <td height="20">EBITDA (mln)</td> <td align="right">$4,853</td> <td> </td> <td align="right">$4,970</td> </tr> <tr> <td height="20">EPS</td> <td align="right">$21.20</td> <td> </td> <td align="right">$21.85</td> </tr> <tr> <td height="20"> </td> <td colspan="3">2023E</td> </tr> <tr> <td height="20"> </td> <td>New</td> <td> </td> <td>Old</td> </tr> <tr> <td height="20">Sales (mln)</td> <td align="right">$13,485</td> <td> </td> <td align="right">$14,067</td> </tr> <tr> <td height="20">EBITDA (mln)</td> <td align="right">$3,520</td> <td> </td> <td align="right">$3,598</td> </tr> <tr> <td height="20">EPS</td> <td align="right">$13.90</td> <td> </td> <td align="right">$15.15</td> </tr> <tr> <td height="20"> </td> <td colspan="3">2024E</td> </tr> <tr> <td height="20"> </td> <td>New</td> <td> </td> <td>Old</td> </tr> <tr> <td height="20">Sales (mln)</td> <td align="right">$13,336</td> <td> </td> <td align="right">$13,291</td> </tr> <tr> <td height="20">EBITDA (mln)</td> <td align="right">$3,372</td> <td> </td> <td align="right">$3,195</td> </tr> <tr> <td height="20">EPS</td> <td align="right">$13.80</td> <td> </td> <td align="right">$13.70</td> </tr> </table>',
          metered: true,
          correctionReason: null,
        },
        relationships: {
          author: {
            data: {
              id: "57065721",
              type: "newsAuthorUser",
            },
          },
          sentiments: {
            data: [],
          },
          primaryTickers: {
            data: [
              {
                id: "6322",
                type: "tag",
              },
            ],
          },
          secondaryTickers: {
            data: [
              {
                id: "16745",
                type: "tag",
              },
              {
                id: "587766",
                type: "tag",
              },
              {
                id: "598720",
                type: "tag",
              },
            ],
          },
          otherTags: {
            data: [],
          },
          ratingChangeNotice: {},
        },
        links: {
          self: "/news/3889421-westlake-upgraded-to-neutral-at-ubs-on-favorable-risk-reward",
          canonical:
            "https://seekingalpha.com/news/3889421-westlake-upgraded-to-neutral-at-ubs-on-favorable-risk-reward",
          uriImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/471458018/image_471458018.jpg?io=getty-c-w750",
          schemaImage: [
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/471458018/image_471458018.jpg?io=getty-c-w1280",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/471458018/image_471458018.jpg?io=getty-c-crop-16-9",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/471458018/image_471458018.jpg?io=getty-c-crop-4-3",
          ],
        },
      },
      {
        id: "3889420",
        type: "news",
        attributes: {
          publishOn: "2022-10-06T13:51:09-04:00",
          isLockedPro: false,
          commentCount: 5,
          gettyImageUrl:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1153672796/image_1153672796.jpg",
          videoPreviewUrl: null,
          themes: {
            "hidden-from-qp": {
              path: "/",
              slug: "hidden-from-qp",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "us-economy": {
              path: "/market-news/us-economy",
              slug: "us-economy",
              title: "U.S. Economy",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            "news-metered": {
              path: "/",
              slug: "news-metered",
              title: null,
              sasource: "",
              non_theme: true,
            },
          },
          title:
            "Chicago Fed's Evans sees unemployment rising, sees QT completed in a few years",
          lastModified: "2022-10-06T13:57:02-04:00",
          isExclusive: false,
          status: "Active",
          content:
            '<p></p> <p>Expect the unemployment rate to "creep up" as the Federal Reserves rate hikes take hold, <a href="https://www.chicagofed.org/publications/speeches/2022/october-06-il-chamber-of-commerce" target="_blank">said</a> Thursday Chicago Fed President Charles Evans at the Illinois Chamber of Commerce annual luncheon.</p> <p>"Inflation is very high right now and<span class="paywall-full-content"> that’s the issue that’s top of mind for the Federal Resererve and everyone," he said.</span></p> <p class="paywall-full-content">"Momentum in core inflation" is most concerning to the Fed, he added. High inflation has spread from a limited number of sectors to a much broader range of products, Evans said.</p> <p class="paywall-full-content">He acknowledges that the central bank acted a little later than it probably should have. "Looking back, I could see that we should have started earlier," he said.</p> <p class="paywall-full-content">Evans expects its balance sheet reduction to be completed in about three years. "Our balance sheet will always grow with the U.S. economy," he said. "It will never be back at the $800B level it was in 2007."</p> <p class="paywall-full-content"><strong>Updated at 1:55 PM ET: </strong>The Fed\'s dot plot median expectation is that it will raise rates by 125 more basis points over the next two meetings. He declined to estimate how much the next hike would be.</p> <div class="paywall-full-content">Still, "there\'s a good amount of strength in the U.S. economy," he said. Evans is optimistic that economic growth is picking up in the second half of 2022.</div> <div class="paywall-full-content"> </div> <div class="paywall-full-content"> On Wednesday, Atlanta Fed President Raphael Bostic said he expects the fed funds rate will need to reach 4.0%-4.5% and hold them there a while to see <a href="https://seekingalpha.com/news/3889024-federal-reserve-must-stay-purposeful-and-resolute-in-inflation-fight-bostic-says" target="_blank">how the economy and price respond.</a> </div>',
          metered: true,
          correctionReason: null,
        },
        relationships: {
          author: {
            data: {
              id: "49447318",
              type: "newsAuthorUser",
            },
          },
          sentiments: {
            data: [],
          },
          primaryTickers: {
            data: [],
          },
          secondaryTickers: {
            data: [],
          },
          otherTags: {
            data: [],
          },
          ratingChangeNotice: {},
        },
        links: {
          self: "/news/3889420-chicago-feds-evans-sees-unemployment-rising-qt-completed-in-a-few-years",
          canonical:
            "https://seekingalpha.com/news/3889420-chicago-feds-evans-sees-unemployment-rising-qt-completed-in-a-few-years",
          uriImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1153672796/image_1153672796.jpg?io=getty-c-w750",
          schemaImage: [
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1153672796/image_1153672796.jpg?io=getty-c-w1280",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1153672796/image_1153672796.jpg?io=getty-c-crop-16-9",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1153672796/image_1153672796.jpg?io=getty-c-crop-4-3",
          ],
        },
      },
      {
        id: "3889417",
        type: "news",
        attributes: {
          publishOn: "2022-10-06T13:42:16-04:00",
          isLockedPro: false,
          commentCount: 0,
          gettyImageUrl:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1365097518/image_1365097518.jpg",
          videoPreviewUrl: null,
          themes: {
            "large-cap": {
              path: "/",
              slug: "large-cap",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "prepare-hide-from-qp": {
              path: "/",
              slug: "prepare-hide-from-qp",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "news-metered": {
              path: "/",
              slug: "news-metered",
              title: null,
              sasource: "",
              non_theme: true,
            },
          },
          title:
            "Hot Stocks: PINS rises on upgrade; COST climbs on sales data; STZ falls on earnings; STX drops",
          lastModified: "2022-10-06T13:42:17-04:00",
          isExclusive: false,
          status: "Active",
          content:
            '<p></p> <div> <p>Analyst comments provided a notable catalyst in Thursday\'s midday trading. Pinterest (<span class="ticker-hover-wrapper">NYSE:<a href="https://seekingalpha.com/symbol/PINS" title="Pinterest, Inc.">PINS</a></span>) rose following an upgrade from Goldman Sachs, while Seagate Technology (<a href="https://seekingalpha.com/symbol/STX" title="Seagate Technology Holdings plc">STX</a>) dropped on a cautious comment.</p> <p>In other news, Costco Wholesale (<a href="https://seekingalpha.com/symbol/COST" title="Costco Wholesale Corporation">COST</a>) advanced following the<span class="paywall-full-content"> release of strong monthly sales figures. Meanwhile, Constellation Brands (</span><a href="https://seekingalpha.com/symbol/STZ" title="Constellation Brands, Inc." class="paywall-full-content">STZ</a><span class="paywall-full-content">) endured downward pressure following the announcement of its quarterly results.</span></p> <p class="paywall-full-content"><strong>Gainers</strong></p> <p class="paywall-full-content">Pinterest (<a href="https://seekingalpha.com/symbol/PINS" title="Pinterest, Inc.">PINS</a>) gained ground in midday action, rising nearly 5% following a <a href="https://seekingalpha.com/news/3889167-pinterest-pops-as-goldman-sachs-upgrades-citing-more-positive-risk-reward-skew" target="_blank">bullish comment</a> from Goldman Sachs. Analyst Eric Sheridan raised his rating on the stock to Buy from Neutral, citing a "more positive" skew in the risk-reward dynamic for the social media firm.</p> <p class="paywall-full-content">In making the upgrade, Goldman pointed to improved user growth and engagement. This could lead to upside in 2023 and 2024 for both revenue and operating margin, the firm said.</p> <p class="paywall-full-content">Elsewhere, Costco Wholesale (<a href="https://seekingalpha.com/symbol/COST" title="Costco Wholesale Corporation">COST</a>) also showed midday strength, rising 1.5% after the retailer released <a href="https://seekingalpha.com/news/3889026-costco-wholesale-reports-85-comparable-sales-growth-in-september" target="_blank">monthly sales stats</a>. COST reported that its comparable sales rose 8.5% in September. Net sales climbed 10%.</p> <p class="paywall-full-content"><strong>Decliners</strong></p> <p class="paywall-full-content">Constellation Brands (<a href="https://seekingalpha.com/symbol/STZ" title="Constellation Brands, Inc.">STZ</a>) dropped in the wake of its quarterly report. Despite headline numbers that beat expectations, <a href="https://seekingalpha.com/news/3889335-constellation-brands-slips-as-analysts-remain-cautious-on-beer-trends-canopy-overhang" target="_blank">analysts expressed caution</a> for the future.</p> <p class="paywall-full-content">The beer and wine maker <a href="https://seekingalpha.com/news/3889159-constellation-brands-non-gaap-eps-of-3_17-beats-0_36-revenue-of-2_66b-beats-150m" target="_blank">surpassed projections</a> with its earnings and revenue, with its top line rising 12% from last year. </p> <p class="paywall-full-content">Even with the strong results, however, analysts outlined concerns that expectations for depletions, which track sales to retailers by distributors, have gotten too high. There was also worry related to a $1.06B impairment charge from the STZ\'s investment in Canopy Growth (<a href="https://seekingalpha.com/symbol/CGC" title="Canopy Growth Corporation">CGC</a>).</p> <p class="paywall-full-content">Meanwhile, Seagate Technology (<a href="https://seekingalpha.com/symbol/STX" title="Seagate Technology Holdings plc">STX</a>) lost ground in intraday action, hurt by a <a href="https://seekingalpha.com/news/3889363-seagate-shares-fall-as-benchmark-cuts-estimates-and-storage-concerns-grow" target="_blank">cautious note from Benchmark</a>. Mark Miller lowered its earnings and revenue estimates for the company, saying firms in the sector "have recently lowered their forecasts for the September quarter due to weaker trends."</p> <p class="paywall-full-content">To track Wall Street\'s best- and worst-performing stocks, head over to <a href="https://seekingalpha.com/market-news/on-the-move" target="_blank">Seeking Alpha\'s On The Move section</a>.</p> </div>',
          metered: true,
          correctionReason: null,
        },
        relationships: {
          author: {
            data: {
              id: "54408948",
              type: "newsAuthorUser",
            },
          },
          sentiments: {
            data: [],
          },
          primaryTickers: {
            data: [
              {
                id: "554446",
                type: "tag",
              },
            ],
          },
          secondaryTickers: {
            data: [
              {
                id: "58",
                type: "tag",
              },
              {
                id: "1022",
                type: "tag",
              },
              {
                id: "2497",
                type: "tag",
              },
              {
                id: "149663",
                type: "tag",
              },
            ],
          },
          otherTags: {
            data: [],
          },
          ratingChangeNotice: {},
        },
        links: {
          self: "/news/3889417-hot-stocks-pins-rises-on-upgrade-cost-climbs-on-sales-data-stz-falls-on-earnings-stx-drops",
          canonical:
            "https://seekingalpha.com/news/3889417-hot-stocks-pins-rises-on-upgrade-cost-climbs-on-sales-data-stz-falls-on-earnings-stx-drops",
          uriImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1365097518/image_1365097518.jpg?io=getty-c-w750",
          schemaImage: [
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1365097518/image_1365097518.jpg?io=getty-c-w1280",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1365097518/image_1365097518.jpg?io=getty-c-crop-16-9",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1365097518/image_1365097518.jpg?io=getty-c-crop-4-3",
          ],
        },
      },
      {
        id: "3889416",
        type: "news",
        attributes: {
          publishOn: "2022-10-06T13:39:39-04:00",
          isLockedPro: false,
          commentCount: 6,
          gettyImageUrl:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1317587887/image_1317587887.jpg",
          videoPreviewUrl: null,
          themes: {
            healthcare: {
              path: "/market-news/healthcare",
              slug: "healthcare",
              title: "Healthcare ",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            "large-cap": {
              path: "/",
              slug: "large-cap",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "hidden-from-qp": {
              path: "/",
              slug: "hidden-from-qp",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "on-the-move": {
              path: "/market-news/on-the-move",
              slug: "on-the-move",
              title: "On the Move",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            "news-metered": {
              path: "/",
              slug: "news-metered",
              title: null,
              sasource: "",
              non_theme: true,
            },
          },
          title:
            "'New' Biohaven up 81% days after Pfizer acquisition as investors see pipeline potential",
          lastModified: "2022-10-06T13:39:41-04:00",
          isExclusive: false,
          status: "Active",
          content:
            '<p></p> <ul> <li>Although <a href="https://seekingalpha.com/news/3888102-pfizer-116b-acquisition-of-biohaven-pharmaceuticals-closes" target="_blank">Pfizer completed its acquisition of Biohaven Pharmaceutical</a> on Monday, the company lives on as a separately traded company, Biohaven Ltd. (BHVN), due to a spinoff before the acquisition closed.</li> <li>Biohaven Ltd. (BHVN) shares are <span class="green">up ~81%</span> since<span class="paywall-full-content"> Monday\'s close through Thursday afternoon trading.</span> </li> <li class="paywall-full-content">While Pfizer gained the migraine treatment Nurtec ODT (rimegepant) and zavegepant, in phase 3 for migraine, the "new" Biohaven still has a substantial pipeline, but no marketed products.</li> <li class="paywall-full-content">In phase 3, Biohaven (BHVN) has taldefgrobep alfa for spinal muscular atrophy and troriluzole for spinocerebular ataxia and obsessive-compulsive disorder. In phase 1, it has BHV-7000 for refractory focal epilepsy and several other indications.</li> </ul>',
          metered: true,
          correctionReason: null,
        },
        relationships: {
          author: {
            data: {
              id: "53161691",
              type: "newsAuthorUser",
            },
          },
          sentiments: {
            data: [],
          },
          primaryTickers: {
            data: [
              {
                id: "1216",
                type: "tag",
              },
            ],
          },
          secondaryTickers: {
            data: [],
          },
          otherTags: {
            data: [],
          },
          ratingChangeNotice: {},
        },
        links: {
          self: "/news/3889416-new-biohaven-up-81-days-after-pfizer-acquisition-as-investors-see-pipeline-potential",
          canonical:
            "https://seekingalpha.com/news/3889416-new-biohaven-up-81-days-after-pfizer-acquisition-as-investors-see-pipeline-potential",
          uriImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1317587887/image_1317587887.jpg?io=getty-c-w750",
          schemaImage: [
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1317587887/image_1317587887.jpg?io=getty-c-w1280",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1317587887/image_1317587887.jpg?io=getty-c-crop-16-9",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1317587887/image_1317587887.jpg?io=getty-c-crop-4-3",
          ],
        },
      },
      {
        id: "3889415",
        type: "news",
        attributes: {
          publishOn: "2022-10-06T13:31:28-04:00",
          isLockedPro: false,
          commentCount: 10,
          gettyImageUrl:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/469565348/image_469565348.jpg",
          videoPreviewUrl: null,
          themes: {
            "large-cap": {
              path: "/",
              slug: "large-cap",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "hidden-from-qp": {
              path: "/",
              slug: "hidden-from-qp",
              title: null,
              sasource: "",
              non_theme: true,
            },
            "top-news": {
              path: "/market-news/top-news",
              slug: "top-news",
              title: "Top News",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
            "news-metered": {
              path: "/",
              slug: "news-metered",
              title: null,
              sasource: "",
              non_theme: true,
            },
            consumer: {
              path: "/market-news/consumer",
              slug: "consumer",
              title: "Consumer ",
              sasource: "theme_breadcrumb",
              non_theme: false,
            },
          },
          title: "Tesla is lifted to investment grade at S&P",
          lastModified: "2022-10-06T14:20:01-04:00",
          isExclusive: false,
          status: "Active",
          content:
            '<p></p> <p>S&amp;P Global Ratings raised its long-term credit rating on Tesla (<span class="ticker-hover-wrapper">NASDAQ:<a href="https://seekingalpha.com/symbol/TSLA" title="Tesla, Inc.">TSLA</a></span>) to BBB from BB+ to place the company at the investment grade level for the first time.</p> <p>The ratings agency said it now views Tesla\'s (<a href="https://seekingalpha.com/symbol/TSLA" title="Tesla, Inc.">TSLA</a><span class="paywall-full-content">) credit profile more favorably because it continues to demonstrate market leadership in electric vehicles, with solid manufacturing efficiency that supports strong EBITDA margins and sustained positive free operating cash flow.</span></p> <p class="paywall-full-content">"In 2022 and 2023, we expect Tesla to sustain FOCF to sales of over 10%, compared with our prior upside trigger of 2%, backed by industry-leading EBITDA margins of roughly 20%, compared with our upside trigger of 18% and well above our 10% threshold for above average margins for automakers. This is despite high expenses related to the ramp up of its Berlin and Austin manufacturing facilities, ongoing supply chain disruptions, and rising commodity costs." </p> <p class="paywall-full-content">S&amp;P noted that Tesla (<a href="https://seekingalpha.com/symbol/TSLA" title="Tesla, Inc.">TSLA</a>) has partially offset the effects of the industry disruption with higher average selling prices, sale of regulatory credits, and lower manufacturing costs compared with our prior expectations.</p> <p class="paywall-full-content">Shares of Tesla (<a href="https://seekingalpha.com/symbol/TSLA" title="Tesla, Inc.">TSLA</a>) pared an earlier loss and was down <span class="red">0.30% </span>to $240.07 at 1:30 p.m. ET.</p>',
          metered: true,
          correctionReason: null,
        },
        relationships: {
          author: {
            data: {
              id: "954720",
              type: "newsAuthorUser",
            },
          },
          sentiments: {
            data: [],
          },
          primaryTickers: {
            data: [
              {
                id: "16123",
                type: "tag",
              },
            ],
          },
          secondaryTickers: {
            data: [],
          },
          otherTags: {
            data: [],
          },
          ratingChangeNotice: {},
        },
        links: {
          self: "/news/3889415-tesla-is-lifted-to-investment-grade-at-sp",
          canonical:
            "https://seekingalpha.com/news/3889415-tesla-is-lifted-to-investment-grade-at-sp",
          uriImage:
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/469565348/image_469565348.jpg?io=getty-c-w750",
          schemaImage: [
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/469565348/image_469565348.jpg?io=getty-c-w1280",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/469565348/image_469565348.jpg?io=getty-c-crop-16-9",
            "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/469565348/image_469565348.jpg?io=getty-c-crop-4-3",
          ],
        },
      },
    ],
  };

  return (
    <Wrapper>
      {/* <button
        onClick={() => {
          handleNews();
        }}
      ></button>
      {data ? <>{data.data[0].attributes.title}</> : <>'loading...'</>} */}

      {<h2>News🔥</h2>}
      {data.data?.map((newsObject) => {
        return (
          <NewsDiv>
            <News>
              {<Img src={`${newsObject.attributes.gettyImageUrl}`} />}
              <A
                href={newsObject.links.canonical}
                target="_blank"
                rel="noreferrer"
              >
                {newsObject.attributes.title}
              </A>
            </News>
          </NewsDiv>
        );
      })}
    </Wrapper>
  );
};

export default NewsFeed;

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid var(--color-beige);
`;

// Stock feed section
const NewsDiv = styled.div`
  border: 2.5px var(--color-purple) solid;
  border-radius: 10px;
  padding: 20px;
  margin: 2px;
  cursor: pointer;
  background: var(--color-beige);
`;

const Img = styled.img`
  width: 100px;
  border-radius: 10px;
`;
const News = styled.div`
  border-radius: 10px;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.4s ease-in-out;
    background: var(--color-purple);
    color: var(--color-beige);
  }
`;
const A = styled.a`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
