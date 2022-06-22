import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nol6u90hs001yw9sqfgi9e/master',
  cache: new InMemoryCache()
})