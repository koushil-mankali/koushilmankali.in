const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

//the directory where you keep markdown files
//you can copy and paste this code and the above  code in the same file
//you need just to remove the mydir declaration as it is duplicated
const mydir1 = path.join(process.cwd(), "posts");

function getArticleMeta(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(mydir1, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items = {};
  fields.forEach((field) => {
    if (field === "slug") {
      //store the markdown file name in items[slug]
      items[field] = realSlug;
    }

    if (field === "content") {
      //  store file content in items[content] with matter library
      items[field] = content;
    }

    if (data[field]) {
      //store any field you declare in the header markdown file to the item[givenName]
      items[field] = data[field];
    }
  });

  return items;
}

const mydir = path.join(process.cwd(), "posts");

function getArticles() {
  return fs.readdirSync(mydir);
}

const articles = getArticles();

const basicPosts = articles.map((slugFile) => {
  //this depends on the way you construct you meta articles
  // and how it is possible to deconstruct them
  //here we got the filename, and the date when it was written
  const { slug, date } = getArticleMeta(slugFile, ["slug", "date"]);

  return { slug, date };
});

//build our articles array
const posts = [
  //map static pages such as home, about and privacy
  { path: `/`, date: "2021-09-01T23:35:07.322Z" },
  { path: `/about`, date: "2021-09-05T23:35:07.322Z" },
  { path: `/privacy`, date: "2021-09-23T23:35:07.322Z" },
  //map the others
  ...basicPosts.map((post) => {
    return {
      path: `/${post.slug}`,
      date: post.date,
    };
  }),
];

//Save the array in the env file, luckily this one will be available on runtime, so we will have
//access to is as long as the app is running
fs.writeFileSync(".env", "posts=" + JSON.stringify(posts, null), "utf-8");
