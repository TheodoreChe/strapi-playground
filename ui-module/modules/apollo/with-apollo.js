import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import nextWidthApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

const GRAPHQL_URL = process.env.API_URL || "http://localhost:1337/graphql";

const link = createHttpLink({ fetch, uri: GRAPHQL_URL });

// Docs: https://www.npmjs.com/package/next-with-apollo
export const withApollo = nextWidthApollo(
    ({ initialState }) =>
        new ApolloClient({
            link: link,
            cache: new InMemoryCache()
                .restore(initialState || {})
        })
);