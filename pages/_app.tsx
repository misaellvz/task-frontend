import React, { PropsWithChildren } from "react";
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0';
import client from '@graphql/client';
import Layout from '@components/Layout';

const MyApp: React.FC<PropsWithChildren<AppProps>> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ApolloProvider>
  )
}

export default MyApp;
