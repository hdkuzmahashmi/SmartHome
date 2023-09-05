import GlobalStyle from "../styles";

import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: gray;
  border-radius: 0.2em;
  border: none;
  padding: 1em;
  color: white;

  &:hover {
    background-color: var(--colorlink);
    color: #ffffff;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <StyledList>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </StyledList>
      </Nav>
      <Component {...pageProps} />
    </>
  );
}
