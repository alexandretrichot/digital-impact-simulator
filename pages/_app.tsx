import { AppProps } from 'next/app';
import '../assets/scss/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
