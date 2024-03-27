import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const useBlogs = (id?: string) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    if (id) {
      axios
        .get(BACKEND_URL + `/api/v1/blog/${id}`, {
          headers: {
            Authorization: "sdsd " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setBlogs(response.data.blog);
          setLoading(false);
        });
    } else {
      axios
        .get(BACKEND_URL + `/api/v1/blog/bulk`, {
          headers: {
            Authorization: "sdsd " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setBlogs(response.data.blogs);
          setLoading(false);
        });
    }
  }, []);
  return [blogs, loading];
};
