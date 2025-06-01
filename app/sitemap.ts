import { Blog } from "@/types/blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    return [];
  }

  const data: Blog[] = await response.json();

  const postEntries: MetadataRoute.Sitemap = data.map(
    ({ id }: { id: number }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`,
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    ...postEntries,
  ];
}
