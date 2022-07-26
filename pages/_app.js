import "../styles/globals.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
