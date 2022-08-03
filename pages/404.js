import Head from "next/head";
import Link from "next/Link";

import errCss from "../styles/Error.module.scss";

let Error = () => {
  return (
    <>
      <Head>
        <title>Error Page Not Found!</title>
      </Head>
      <div className={errCss.container}>
        <h1 className={errCss.h1}>Error Page Not Found!!!</h1>
        <Link href="/">
          <a className={errCss.hm}>Go to Home Page</a>
        </Link>
      </div>
    </>
  );
};

export default Error;
