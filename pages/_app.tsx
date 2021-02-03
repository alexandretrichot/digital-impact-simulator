import { AppProps } from 'next/app';
import '../assets/scss/index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Footer from '../components/Footer';
import { useEffect } from 'react';

const client = new ApolloClient({
  uri: '/api',
  cache: new InMemoryCache({
    addTypename: false
  })
});

function show() {
  document.body.style.opacity = '1';
}


export default function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") return <></>;

  useEffect(() => {
    window.addEventListener('load', show);

    return () => {
      window.removeEventListener('load', show);
    }
  });

  return <ApolloProvider client={client}>
    <Component {...pageProps} />
    <Footer />
  </ApolloProvider>
}
