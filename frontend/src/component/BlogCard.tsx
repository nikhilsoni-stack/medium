import { useNavigate } from "react-router-dom";

interface props {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  id: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishDate,
  id,
}: props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/blog/" + id);
  };
  return (
    <div className="ml-16 mt-16" onClick={onClick}>
      <div>
        <Avatar name={authorName} /> {authorName} &#x2022; {publishDate}
      </div>
      <div className="text-xl mt-2">{title}</div>
      <div className="text-md mt-2">{content}</div>
      <div className="text-slate-300">{`${Math.ceil(
        content.length / 100
      )} minutes`}</div>
      <div className="bg-slate-200 h-0.5 w-full mt-2"></div>
    </div>
  );
};

export const Avatar = ({ name }: any) => {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
};
