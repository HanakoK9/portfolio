import 'tailwindcss/tailwind.css';
import styles from '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>BHUPESH</title>
      </head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
