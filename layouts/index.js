import React, {Fragment, Children} from 'react'
import {Anchor, Box, Heading} from 'grommet'
import Link from 'next/link'
import {withRouter} from 'next/router'
import Head from 'next/head'

const ActiveLink = withRouter(({router, children, ...props}) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      color: router.pathname === props.href ? 'accent-1' : undefined
    })}
  </Link>
))

const DefaultLayout = ({children}) => (
  <Fragment>
    <Head>
      <title>Jakob Gillich</title>
    </Head>
    <Box direction="row" justify="between" pad="small">
      <Heading level="3" margin="none">
        Jakob Gillich
      </Heading>
      <Box direction="row" gap="small">
        <ActiveLink href="/">
          <Anchor href="#" primary size="large" label="About" />
        </ActiveLink>
        <ActiveLink href="/blog">
          <Anchor href="#" primary size="large" label="Blog" />
        </ActiveLink>
      </Box>
    </Box>
    {children}
    <Box pad="medium">{/*Footer*/}</Box>
  </Fragment>
)

export default DefaultLayout
