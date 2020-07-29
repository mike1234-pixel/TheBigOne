import React, { useState, useEffect } from "react";
import "./BlogPage.scss";
import { useStore } from "react-redux";

const BlogPage = () => {
  const store = useStore();
  const state = store.getState();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<any[]>([]);

  // useEffect similar to componentDidMount
  useEffect(() => {
    // window.fetch = built-in ajax api (does the same as axios)
    fetch("http://localhost:4000/blogEntries")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data.blogEntries);
          console.log(items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error:</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={state.darkMode ? `dark-mode` : `light-mode`}>
        {items.map((item) => (
          <div className="blog-post">
            <p className="blog-title">{item.title}</p>
            <p className="blog-content">{item.content}</p>
            <p className="blog-date">{item.date}</p>
          </div>
        ))}
        <h1>success</h1>
      </div>
    );
  }
};
export default BlogPage;
