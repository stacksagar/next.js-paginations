import '../styles/globals.css';
import '../styles/custom.module.css';
// import 'nprogress/nprogress.css';
// import NProgress from 'nprogress';
// import Router from 'next/router';

// (() => {
//   NProgress.configure({ showSpinner: false });
//   Router.events.on('routeChangeStart', () => {
//     NProgress.start();
//   });
//   Router.events.on('routeChangeComplete', () => {
//     NProgress.done();
//   });
//   Router.events.on('routeChangeError', () => {
//     NProgress.done();
//   });
// })();

import Header from '../components/Header';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
