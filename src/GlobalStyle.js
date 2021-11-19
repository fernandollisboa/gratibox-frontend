import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
      background-color: var(--color-0);
      font-family: "Roboto", Sans-Serif;
      width: 100%;
      min-width: 100vw;
      height: 100%;
    }

    *{
      font-family: "Roboto", Sans-Serif;
      box-sizing: border-box;
    }

    :root {
      --color-0: #6d7ce4;
      --color-1: #e63c80;
      --color-2: #e0d1ed;
      --color-3: #e5cdb3;
      --color-4: #ffffff;
    }
`;

export default GlobalStyle;
