import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxwithStyledComponent from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  const FlexContainer = styled.div`
    display: flex;
    justify-items: rows;
  `;

  return (
    <FlexContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxwithStyledComponent />
      <BoxwithStyledComponent $isBlack={true} />
    </FlexContainer>
  );
}
