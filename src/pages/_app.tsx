import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes"
import '../styles/global.scss';
import Layout from './layout'
import Head from 'next/head'
import PageProvider from '@/components/PageProvider';
import '../styles/global.scss'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="description" content="This is my portfolio of front end developer, called devdartagnan, here you will see some of my works,
        some information about me and a way to contact me.  "></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:title" content="DevDartagnan | Front-end Developer." />
        <meta property="og:type" content="portfolio" />
        <meta property="og:url" content="devdartagnan.com" />
        <meta property="og:image" content="/android-chrome-192x192.png" />
        <title>DevDartagnan | Front-end Developer.</title>
        <script src="assets/js/macy.min.js"></script>
      </Head>
      <PageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageProvider>
    </ThemeProvider>
  )
}
