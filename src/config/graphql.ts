import { InMemoryCache, ApolloClient, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://api.spacex.land/graphql",
});

export const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});
