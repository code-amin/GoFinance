import styled from "styled-components";

const Footer = () => (
    <Wrapper>
        <Text>Footer</Text>
    </Wrapper>
);

const Wrapper = styled.div`
  position:fixed;
  bottom:10px;
  margin: 0px auto;
  height: 160px;
  width:100%;
  background-color:indigo;
`;


const Text = styled.p`
  color: var(--color-beige);
  font-family: var(--font-heading);
  font-size: 36px;
  text-align: center;
  margin: 12px 0 0 24px;
  
`;

export default Footer;
