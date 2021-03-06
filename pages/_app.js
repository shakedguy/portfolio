import Router from 'next/router';
import nProgress from 'nprogress';
import '../styles/globals.css';
import '../styles/cardStyle.css';
import '../styles/overflowStyles.css';
import '../styles/nprogress.css';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from '../theme';
import Head from 'next/head';
import Page from '../components/Page';
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const App = (props) => {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider theme={Theme}>
      <Head>
        <title>Guy Shakeds Website</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width = device-width, initial-scale = 1.0' />
        <link rel='icon' href='/favicon.png' />
        <meta charSet='UTF-8' />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
};

export default App;
