import { AppProps } from 'next/app';
import '../assets/scss/index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Footer from '../components/Footer';

const client = new ApolloClient({
  uri: '/api',
  cache: new InMemoryCache()
});


export default function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <Component {...pageProps} />
    <Footer />
  </ApolloProvider>
}
