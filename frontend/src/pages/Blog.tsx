import { useParams } from "react-router-dom";
import { FullBlog } from "../component/FullBlog";
import { useBlogs } from "../hooks/useBlogs";

export const Blog = () => {
  const { id } = useParams();

  const [blogs, loading] = useBlogs(id);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <FullBlog blog={blogs} />
    </div>
  );
};
