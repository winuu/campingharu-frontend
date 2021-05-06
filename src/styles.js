import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colorTheme = {
  black: "#000000",
  accent: "#191a20",
  primary: "#3f4150",
  secondary: "#8c8d96",
  tertiary: "#b2b3b9",
  border: "#e0e2e7",
  background: "#f7f8fa",
  white: "#ffffff",
  blue: "#3da5f5",
  darkBlue: "#3186c4",
  lightBlue: "#ecf6fe",
  red: "#f86d7d",
  green: "#22c58b",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
        background-color:${(props) => props.theme.white};
        font-size:16px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        height: 100vh
    }
    a {
      text-decoration: none;
      color:inherit;
    }
    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
    .date-off {
      opacity:0.4;
      background-color: ${(props) => props.theme.secondary};
      cursor: not-allowed;

    }
    .sunday {
      color: ${(props) => props.theme.red};
    }
`;
