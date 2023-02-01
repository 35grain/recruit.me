import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { Navigation } from '@/components/Navigation'

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#46DF06',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '#475B63',
      background: '$white',
      text: '#2e2c2f',
      gradient: 'linear-gradient(112deg, $primary -10%, $blue600 80%)',
      link: '#46DF06',
      linkLight: '$white'
    },
    space: {},
    fonts: {}
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Head>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp;