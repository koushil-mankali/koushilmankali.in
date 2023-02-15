import { baseUrl } from "../lib/constants";

// the main function to be exported as default
const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  //we get our array from the environment
  const posts = JSON.parse(process.env.posts);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${posts
        .map((url) => {
          return `
            <url>
              <loc>${baseUrl}${url.path}</loc>
              <lastmod>${url.date}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.9</priority>
            </url>
          `;
        })
        .join("")}
    </urlset >
  `;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
};

export default Sitemap;
