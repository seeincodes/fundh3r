import { AppProps } from 'next/app';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
    // tslint:disable-next-line
    // @ts-ignore
  <Component {...pageProps} />
);

export default MyApp;
