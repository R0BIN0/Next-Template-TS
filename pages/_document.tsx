import Document, { Html, Head, Main, NextScript } from "next/document";

export class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr" style={{ scrollBehavior: "smooth" }}>
        <Head>
          {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href=""
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href=""
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href=""
          />
          <link rel="manifest" href="" />
          <link
            rel="mask-icon"
            href=""
            color=""
          />
          <meta name="msapplication-TileColor" content="" />

          <meta
            name="description"
            content=""
          ></meta>
          <meta name="title" content="" />



          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:locale" content="fr_FR" />
          <meta
            property="og:title"
            content=""
          />
          <meta
            property="og:description"
            content=""
          />
          <meta property="og:site_name" content="" />
          <meta
            property="og:image"
            content=""
          />

          <meta property="twitter:card" content="" />
          <meta property="twitter:url" content="" />
          <meta
            property="twitter:title"
            content=""
          />
          <meta
            property="twitter:description"
            content=""
          />
          <meta
            property="twitter:image"
            content=""
          ></meta>

          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content=""
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content=""
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
