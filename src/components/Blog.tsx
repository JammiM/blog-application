import blogData from "../assets/blog.json";

type Blog = {
  id: number;
  title: string;
  cover: string;
  author: string;
};

export function Blog() {
  const htmlForBlogData = blogData.map((blogPost: Blog, index) => (
    <article key={index}>
      <h3>{blogPost.title}</h3>
      <picture>
        <source srcSet={blogPost.cover} />
        <img src={blogPost.cover} alt={blogPost.title} />
      </picture>
    </article>
  ));

  return (
    <div className="container">
      <div className="blog">{htmlForBlogData}</div>
    </div>
  );
}
