import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'

const GRAPHCMS_API = 'https://api-eu-central-1.graphcms.com/v2/cjy2ykzm30xhn01cxxtuj1b0w/master'

export const client = new ApolloClient({
  link: new HttpLink({uri: GRAPHCMS_API}),
  cache: new InMemoryCache(),
  fetch,
})
