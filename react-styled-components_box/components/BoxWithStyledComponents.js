import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  background-color: ${({ $isBlack }) =>
    $isBlack === true ? "black" : "green"};

  &:hover {
    background-color: red;
  }
`;

// function Box({ isBlack }) {
//   return <StyledBox $isBlack={isBlack}></StyledBox>;
// }
export default StyledBox;
