import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import { withApollo } from "../modules/apollo";

const App = ({ Component, pageProps, apollo }) => {
    return (
        <ApolloProvider client={apollo}>
            <Head>
                <title>strapi Playground</title>
            </Head>
            <Component {...pageProps} />
        </ApolloProvider>
    )
};

export default withApollo(App);