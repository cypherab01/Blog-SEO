import { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";

const BlogLists = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });

  if (!response.ok) {
    return <div>Failed to fetch blogs</div>;
  }

  const data: Blog[] = await response.json();

  return (
    <>
      <div className="flex flex-col gap-4">
        {data.map((blog: Blog, index: number) => (
          <BlogCard
            key={index}
            id={blog.id}
            title={blog.title}
            body={blog.body}
          />
        ))}
      </div>
    </>
  );
};
export default BlogLists;
