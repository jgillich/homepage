import 'highlight.js/styles/github.css'
import React, {Fragment} from 'react'
import {ApolloProvider} from 'react-apollo'
import {client} from '../lib/graphcms'
import {ChakraProvider, CSSReset, ColorModeProvider} from '@chakra-ui/react'
import Head from 'next/head'
import {theme} from '../components/theme'
import useRouterScroll from '../components/use-router-scroll'

export default function App({Component, pageProps}) {
  useRouterScroll()

  return (
    <Fragment>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ApolloProvider client={client}>
          <ColorModeProvider
            options={{
              useSystsemColorMode: true,
            }}
          >
            <Component {...pageProps} />
          </ColorModeProvider>
        </ApolloProvider>
      </ChakraProvider>
    </Fragment>
  )
}
