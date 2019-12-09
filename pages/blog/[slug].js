import React, {PureComponent} from 'react'
import {Grid, Box, Heading} from 'grommet'
import gql from 'graphql-tag'
import Error from 'next/error'
import Head from 'next/head'
import DefaultLayout from '../../layouts'
import {client} from '../../lib/graphcms'
import Post from '../../components/Post'

const query = gql`
  query($slug: String) {
    post(where: {slug: $slug}) {
      id
      title
      slug
      content
      date
    }
  }
`

export default class SinglePost extends PureComponent {
  static async getInitialProps({query: {slug}}) {
    const {data} = await client.query({
      query,
      variables: {slug}
    })
    return data
  }

  render() {
    if (!this.props.post) {
      return <Error statusCode="404" />
    }
    const {
      post: {title, content, date}
    } = this.props

    return (
      <DefaultLayout>
        <Head>
          <title>{title} | Jakob Gillich</title>
        </Head>
        <Grid columns={['large']} gap="large" justifyContent="center">
          <Box>
            <Heading level="2" margin="none">
              {title}
            </Heading>
            <Post content={content} date={date} />
          </Box>
        </Grid>
      </DefaultLayout>
    )
  }
}
