import React, {PureComponent} from 'react'
import {Heading, Grid, Box, Anchor, Button} from 'grommet'
import gql from 'graphql-tag'
import Link from 'next/link'
import {Next, Previous} from 'grommet-icons'
import DefaultLayout from '../../layouts'
import {client} from '../../lib/graphcms'
import Post from '../../components/Post'

const POSTS_PER_PAGE = 5

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

export default class AllPosts extends PureComponent {
  static async getInitialProps({query: {page}}) {
    page = parseInt(page, 10) || 1
    const {data} = await client.query({
      query,
      variables: {first: POSTS_PER_PAGE, skip: POSTS_PER_PAGE * (page - 1), orderBy: 'date_DESC'}
    })
    return {...data, page}
  }

  render() {
    const {
      page,
      posts,
      postsCount: {
        aggregate: {count}
      }
    } = this.props
    const hasOlderPage = page * POSTS_PER_PAGE < count
    const hasNewerPage = page !== 1

    return (
      <DefaultLayout>
        <Grid columns={['large']} gap="large" justifyContent="center">
          <Box gap="medium">
            {posts.edges.map(({node: {title, content, date, id, slug}}) => (
              <Box key={id}>
                <Link href={`/blog/${slug}`}>
                  <Anchor href={`/blog/${slug}`}>
                    <Heading level="2" margin="none">
                      {title}
                    </Heading>
                  </Anchor>
                </Link>
                <Post content={content} date={date} />
              </Box>
            ))}
          </Box>
          <Box direction="row" justify="between">
            <Link href={`/blog?page=${page + 1}`}>
              <Button
                icon={<Previous />}
                label="Older"
                href={hasOlderPage ? `/blog?page=${page + 1}` : undefined}
                disabled={!hasOlderPage}
              />
            </Link>
            <Link href={`/blog?page=${page - 1}`}>
              <Button
                icon={<Next />}
                label="Newer"
                href={hasNewerPage ? `/blog?page=${page - 1}` : undefined}
                disabled={!hasNewerPage}
                reverse
              />
            </Link>
          </Box>
        </Grid>
      </DefaultLayout>
    )
  }
}
