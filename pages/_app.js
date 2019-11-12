import React, {Fragment} from 'react'
import App from 'next/app'
import {Grommet} from 'grommet'
import {hp} from 'grommet-theme-hp'
import sanitize from 'raw-loader!sanitize.css/sanitize.css'
import {createGlobalStyle} from 'styled-components'
import {ApolloProvider} from 'react-apollo'
import {deepMerge} from 'grommet/utils'
import {client} from '../lib/graphcms'

const Sanitize = createGlobalStyle`${sanitize}`

const theme = deepMerge(hp, {})

export default class _App extends App {
  constructor(props) {
    super(props)
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <Fragment>
        <Sanitize />
        <Grommet theme={theme}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Grommet>
      </Fragment>
    )
  }
}
