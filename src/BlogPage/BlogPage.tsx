import React, { useState, useEffect } from "react";
import "./BlogPage.scss";
import { useStore } from "react-redux";
import { Link } from "react-router-dom";

const BlogPage = (props) => {
  const store = useStore();
  const state = store.getState();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfResults] = useState(5);

  let lastId = numberOfResults * currentPage - 1;
  let firstId = lastId - numberOfResults;

  useEffect(() => {
    fetch("http://localhost:4000/blogEntries")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data.blogEntries);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const arrayOfBlogPosts = items
    .filter((item) => item.id >= firstId && item.id <= lastId)
    .map((item) => (
      <div className="blog-post">
        <p className="blog-title">{item.title}</p>
        <p className="blog-content">
          {item.content.substring(0, 199)}
          <Link
            to={{
              pathname: "/BlogPost",
              state: {
                title: item.title,
                img: item.img,
                content: item.content,
                date: item.date,
              },
            }}
            onClick={() =>
              store.dispatch({
                type: "UPDATE_URL_TITLE",
                title: item.title,
              })
            }
          >
            ...
          </Link>
        </p>
        <img src={item.img} className="blog-img"></img>
        <p className="blog-date">{item.date}</p>
      </div>
    ));

  if (error) {
    return <div>Error:</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        className={
          state.darkMode ? `dark-mode blog-page` : `light-mode blog-page`
        }
      >
        {arrayOfBlogPosts}
        <button
          onClick={
            currentPage !== 1
              ? () => setCurrentPage(currentPage - 1)
              : () => setCurrentPage(1)
          }
        >
          PREV PAGE x
        </button>
        <p>Page {currentPage}</p>
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          NEXT PAGE x
        </button>
      </div>
    );
  }
};
export default BlogPage;
