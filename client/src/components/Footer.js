import styled from "styled-components";

const Footer = () => (
    <Wrapper>
        <Text>Footer</Text>
    </Wrapper>
);

const Wrapper = styled.div`
  width:100%;
  background-color:indigo;
`;


const Text = styled.p`
  color: var(--color-beige);
  font-family: var(--font-heading);
  font-size: 16px;
  text-align: center;
  
`;

export default Footer;
