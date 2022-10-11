import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Text>GoFinance © All rights reserved 2022</Text>
      <Text>Data provided by SeekingAlpha</Text>
      <Text>Contact us</Text>
      <Text>Careers</Text>
      <Text>Disclosure</Text>
      <Text>Privacy policy</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  bottom: 0;
  position: relative;
  width: 100%;
  display: flex;
  height: 70px;
`;

const Text = styled.div`
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #9370db;
  color: #ffffff;
  font-size: 14px;
  padding: 20px;
`;

export default Footer;
