import { Appbar } from "../component/Appbar";
import { BlogCard } from "../component/BlogCard";
import { Skeleton } from "../component/Skeleton";
import { useBlogs } from "../hooks/useBlogs";

export const Blogs = () => {
  const [blogs, loading] = useBlogs();
  if (loading) {
    return (
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      {/* @ts-ignore */}
      {blogs?.map((item: any) => {
        return (
          <BlogCard
            title={item.title}
            content={item.content}
            authorName={item.author.name ?? "Robot"}
            publishDate="12 may 2023"
            id={item.id}
          />
        );
      })}
    </div>
  );
};
