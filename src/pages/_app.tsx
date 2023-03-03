import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { darkTheme } from "../styles/themes/darkTheme";
import { GlobalStyle } from '../styles/globals';
import { useLocalStorage } from "usehooks-ts";
import Layout from './layout'

export default function App({ Component, pageProps }: AppProps) {

  const [theme] = useLocalStorage("theme_dart", darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
