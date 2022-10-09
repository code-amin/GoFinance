import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Text>GoFinance © All rights reserved 2022</Text>
      <Text>Data provided by SeekingAlpha</Text>
      <Text>Data provided b</Text>
      <Text>Data provided by</Text>

      <Text>Sitemap</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display:flex;
  padding-top:100px;
`;

const Text = styled.div`
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #9370DB;
  color: #FFFFFF;
  font-size: 14px;
  padding: 20px;
`;

export default Footer;
