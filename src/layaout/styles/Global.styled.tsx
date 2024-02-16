import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import {throws} from "assert";


export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.2;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  a {
    color: ${theme.colors.font};
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    cursor: pointer;
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }

section{
  padding: 100px 0;
}

p{
  font-size: 14px;
  line-height: 1.4;
}

h3 {
  font-family: "Josefin Sans", sans-serif;  
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
}
`

