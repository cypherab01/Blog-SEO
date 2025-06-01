import { TypographyH4, TypographyP } from "@/components/custom/Typography";
import { Blog } from "@/types/blog";
import { Metadata } from "next";

export const generateStaticParams = async (): Promise<{ id: string }[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    return [];
  }

  const data: Blog[] = await response.json();
  return data.map((blog) => ({
    id: blog.id.toString(),
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "force-cache",
    }
  );
  const data: Blog = await response.json();
  return { title: data.title, description: data.body };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    return <div>Failed to fetch blog</div>;
  }

  const data: Blog = await response.json();
  return (
    <div className="col-span-10">
      <TypographyH4>{data.title}</TypographyH4>
      <TypographyP>{data.body}</TypographyP>
    </div>
  );
};
export default BlogDetailsPage;
