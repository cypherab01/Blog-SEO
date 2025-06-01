import Link from "next/link";
import { TypographyH1, TypographyH4, TypographyP } from "./Typography";

const BlogCard = ({
  title,
  body,
  id,
}: {
  title: string;
  body: string;
  id: number;
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 py-4 relative isolate grid-flow-col rounded-md">
      <div className="col-span-2 hidden sm:block">
        <TypographyH1>{id}</TypographyH1>
      </div>

      <div className="col-span-10">
        <TypographyH4>
          <Link href={`/blog/${id}`}>
            <span className="absolute inset-0 hover:bg-primary/10"></span>
            {title}
          </Link>
        </TypographyH4>
        <TypographyP>{body}</TypographyP>
      </div>
    </div>
  );
};
export default BlogCard;
