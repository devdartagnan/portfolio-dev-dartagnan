import { createGlobalStyle } from 'styled-components';
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight:  ["100" , "300" , "400" , "500" , "700" , "900"],
  subsets: ['latin'],
})
const inter = Inter({ subsets: ['latin'] })

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: ${inter.style.fontFamily};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
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
  max-width: 100vw;
  overflow-x: hidden;
}
::-moz-selection { /* Code for Firefox */
  color: #f5a1a1;
  }

::selection {
  color: #f5a1a1;
  }
`;