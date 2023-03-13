import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${({ theme }) => theme.palette.colors.background};
    color: ${({ theme }) => theme.palette.textColor.text};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: 'inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'inter', sans-serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
html,
body {
  height: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}
::-moz-selection { /* Code for Firefox */
  color:${({ theme }) => theme.palette.textColor.hover};
  }

::selection {
  color: ${({ theme }) => theme.palette.textColor.hover};
  }
`;