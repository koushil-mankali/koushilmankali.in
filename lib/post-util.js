import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDir = path.join(process.cwd(), "posts");

export function getPostsFiles() {
    return fs.readdirSync(postDir);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export default function getAllPosts() {
  let postFiles = getPostsFiles();

  let allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort(
    (postA, postB) => postA.number - postB.number
  );

  return sortedPosts;
}
