import NextNProgress from 'nextjs-progressbar';
import PropTypes from 'prop-types';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress height={8} color="#209cee" />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
