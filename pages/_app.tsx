import { AppProps } from 'next/app';
import '../assets/scss/index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Footer from '../components/Footer';

const client = new ApolloClient({
  uri: '/api',
  cache: new InMemoryCache({
    addTypename: false
  })
});


export default function MyApp({ Component, pageProps }: AppProps) {
  if(typeof window === "undefined") return <></>;

  return <ApolloProvider client={client}>
    <Component {...pageProps} />
    <Footer />
  </ApolloProvider>
}
