import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com/" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
