import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  padding: 2rem 0 0 0.5rem;
  font-size: 3rem;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase
`;

const Text = styled.p`
  margin: 0;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Tab</Title>
      <Text>A react tab component.</Text>
    </HeaderContainer>
  );
}
