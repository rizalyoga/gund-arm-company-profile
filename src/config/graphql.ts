import { InMemoryCache, ApolloClient, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://api.spacex.land/graphql",
});

export const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});
