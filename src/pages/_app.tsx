import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { darkTheme } from "../styles/themes/darkTheme";
import { GlobalStyle } from '../styles/globals';
import { useLocalStorage } from "usehooks-ts";
import Layout from './layout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {

  const [theme] = useLocalStorage("theme_dart", darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <title>DevDartagnan | Front-end Developer.</title>
        <meta name="description" content="This is my portfolio of front end developer, called devdartagnan, here you will see some of my works,
        some information about me and a way to contact me.  "></meta>
        <meta property="og:title" content="DevDartagnan | Front-end Developer." />
        <meta property="og:type" content="portfolio" />
        <meta property="og:url" content="devdartagnan.com" />
        <meta property="og:image" content="/android-chrome-192x192.png" />
      </Head>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
