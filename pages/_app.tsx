// General
import type { AppProps } from "next/app";

// Styles
import GlobalStyle from "../styles/Global/Reset.style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
