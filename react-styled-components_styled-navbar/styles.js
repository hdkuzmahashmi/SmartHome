import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
:root{
  --colorlink:purple;
}
  body {
    margin: 0;
    font-family: system-ui;
  }
`;
