import Header from "./../components/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <>
        <Header />
      </>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
