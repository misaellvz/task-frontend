import React, { PropsWithChildren } from "react";
import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../components/Layout';

const MyApp: React.FC<PropsWithChildren<AppProps>> = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>

  )
}


export default MyApp;
