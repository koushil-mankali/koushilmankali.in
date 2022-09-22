import Head from "next/head";
import Image from "next/image";

import { getPostData, getPostsFiles } from "../../lib/post-util";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import Navbar from '../../components/Navbar/Navbar';
import postCss from "./Post.module.css";

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
        <link rel="icon" href="/koushil.jpg" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <meta name="description" content={discreption} />
        <meta name="keywords" content={keywords} />
        <meta name="language" content="eng" />
        <meta name="next-head-count" content="18" />
      </Head>
      <Navbar />
      <div className={postCss.post} >
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
          <a href={gitHub} className={postCss.btnLink} target="_blank" rel="noreferrer">
            View The Source Code
          </a>

          <a href={liveSite} className={postCss.btnLink} target="_blank" rel="noreferrer">
            View The Live Demo
          </a>
        </div>
        <article className={postCss.postBdy}>
          <ReactMarkdown>{`# ${title}`}</ReactMarkdown>
          <ReactMarkdown skipHtml={false} remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
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
