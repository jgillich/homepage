import React, {Fragment} from 'react'
import {useRouter} from 'next/router'
import {Heading, IconButton, Box, Button, Stack, LightMode} from '@chakra-ui/react'
import gql from 'graphql-tag'
import Head from 'next/head'
import {Link} from '../../components/link'
import {ArrowLeft, ArrowRight} from 'react-feather'
import {client} from '../../lib/graphcms'
import {Content} from '../../components/content'
import {Header} from '../../components/header'
import {Post} from '../../components/post'

const POSTS_PER_PAGE = 2

const query = gql`
  query posts($first: Int, $skip: Int, $where: PostWhereInput, $orderBy: PostOrderByInput) {
    posts: postsConnection(first: $first, skip: $skip, where: $where, orderBy: $orderBy) {
      edges {
        node {
          id
          title
          slug
          content
          date
        }
      }
    }
    postsCount: postsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`

export default function Index({
  page,
  posts,
  postsCount: {
    aggregate: {count},
  },
}) {
  const router = useRouter()
  const hasOlderPage = page * POSTS_PER_PAGE < count
  const hasNewerPage = page !== 1

  return (
    <Fragment>
      <Head>
        <title>Blog | Jakob Gillich</title>
      </Head>
      <Header />
      <Content bg="white" color="gray.900">
        <LightMode>
          <Stack p={5} spacing={10} minW="0" wrap="wrap">
            {posts.edges.map(({node: {title, content, date, id, slug}}) => (
              <Box key={id}>
                <Link href={`/blog/${slug}`}>
                  <Heading>{title}</Heading>
                </Link>
                <Post content={content} date={date} />
              </Box>
            ))}
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={5} shouldWrapChildren={true}>
              <Box>
                <IconButton
                  aria-label="Older posts"
                  icon={<ArrowLeft />}
                  title="Older"
                  as="a"
                  href={hasOlderPage ? `/blog?page=${page + 1}` : undefined}
                  onClick={e => {
                    router.push(`/blog?page=${page + 1}`)
                    e.preventDefault()
                  }}
                  isDisabled={!hasOlderPage}
                ></IconButton>
              </Box>
              <Box>
                <IconButton
                  aria-label="Newer posts"
                  icon={<ArrowRight />}
                  title="Newer"
                  as="a"
                  href={hasNewerPage ? `/blog?page=${page - 1}` : undefined}
                  onClick={e => {
                    router.push(`/blog?page=${page - 1}`)
                    e.preventDefault()
                  }}
                  isDisabled={!hasNewerPage}
                ></IconButton>
              </Box>
            </Stack>
          </Stack>
        </LightMode>
      </Content>
    </Fragment>
  )
}

export async function getServerSideProps({query: {page}}) {
  page = parseInt(page, 10) || 1
  const {data} = await client.query({
    query,
    variables: {first: POSTS_PER_PAGE, skip: POSTS_PER_PAGE * (page - 1), orderBy: 'date_DESC'},
  })

  return {
    props: {...data, page},
  }
}
