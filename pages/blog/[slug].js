import React, {Fragment} from 'react'
import {Stack, Heading, LightMode} from '@chakra-ui/react'
import gql from 'graphql-tag'
import Error from 'next/error'
import Head from 'next/head'
import {client} from '../../lib/graphcms'
import {Post} from '../../components/post'
import {Header} from '../../components/header'
import {Content} from '../../components/content'
import {Link} from '../../components/link'

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

export default function SinglePost(props) {
  if (!props.post) {
    return <Error statusCode="404" />
  }
  const {
    post: {title, content, date},
  } = props

  return (
    <Fragment>
      <Head>
        <title>{title} | Jakob Gillich</title>
      </Head>
      <Header />
      <Content color="gray.900">
        <LightMode>
          <Stack p={5}>
            <Heading level="2" margin="none">
              {title}
            </Heading>
            <Post content={content} date={date} />
            <Link href="/blog" color="teal.500">
              Back to blog
            </Link>
          </Stack>
        </LightMode>
      </Content>
    </Fragment>
  )
}

export async function getServerSideProps({query: {slug}}) {
  const {data} = await client.query({
    query,
    variables: {slug},
  })

  return {
    props: data,
  }
}
