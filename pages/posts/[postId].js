import Head from "next/head";
import Image from "next/image";

import { getPostData, getPostsFiles } from "../../lib/post-util";

import ReactMarkdown from "react-markdown";

import postCss from "./Post.module.scss";

let Post = (props) => {
  let { postData } = props;

  let {
    content,
    date,
    image,
    slug,
    title,
    url,
    gitHub,
    liveSite,
    discreption,
    keywords,
  } = postData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/ico" href="/Images/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="512x512"
          href="/Images/favicons/andriod-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="192x192"
          href="/Images/favicons/andriod-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="72x72"
          href="/Images/favicons/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="32x32"
          href="/Images/favicons/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="16x16"
          href="/Images/favicons/favicon-16x16.png"
        />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <meta name="description" content={discreption} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={postCss.post}>
        <div className={postCss.imgTag}>
          <Image
            className={postCss.imageTag}
            src={"/Images/postImages/" + image}
            alt="post img"
            width="1000px;"
            height="600px;"
          />
        </div>
        <div className={postCss.btnLinks}>
          <a href={gitHub} className={postCss.btnLink}>
            View The Source Code
          </a>

          <a href={liveSite} className={postCss.btnLink}>
            View The Live Demo
          </a>
        </div>
        <article className={postCss.postBdy}>
          <ReactMarkdown>{`# ${title}`}</ReactMarkdown>
          <ReactMarkdown skipHtml={true}>{content}</ReactMarkdown>
        </article>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  let { params } = context;

  let postData = getPostData(params.postId);

  return {
    props: { postData },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  let postFileNames = getPostsFiles();

  let fileNames = postFileNames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );

  return {
    paths: fileNames.map((fileName) => ({ params: { postId: fileName } })),
    fallback: "blocking",
  };
}

export default Post;
