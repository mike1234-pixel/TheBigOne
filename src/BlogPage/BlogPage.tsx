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
  const [numberOfResults, setNumberOfResults] = useState(10);

  let lastId = numberOfResults * currentPage; // 10 * 1 = 10
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
    .filter((item) => item.id > firstId && item.id <= lastId)
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
                comment: item.comment,
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
        <img src={item.img} className="blog-img" alt={item.title}></img>
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
              : () => setCurrentPage(currentPage)
          }
        >
          PREV PAGE x
        </button>
        <p>Page {currentPage}</p>
        <p>
          Results: {firstId + 1} -{" "}
          {currentPage * numberOfResults <= items.length
            ? lastId
            : items.length}
        </p>
        <button
          onClick={
            currentPage * numberOfResults < items.length
              ? () => setCurrentPage(currentPage + 1)
              : () => setCurrentPage(currentPage)
          }
        >
          NEXT PAGE x
        </button>

        <div className="results-per-page-title">Results Per Page</div>
        <div className="results-per-page-container">
          <div
            className="results-per-page-btn"
            onClick={() => {
              setNumberOfResults(1);
              setCurrentPage(1);
            }}
          >
            1
          </div>
          <div
            className="results-per-page-btn"
            onClick={() => {
              setNumberOfResults(2);
              setCurrentPage(1);
            }}
          >
            2
          </div>
          <div
            className="results-per-page-btn"
            onClick={() => {
              setNumberOfResults(3);
              setCurrentPage(1);
            }}
          >
            3
          </div>
          <div
            className="results-per-page-btn"
            onClick={() => {
              setNumberOfResults(4);
              setCurrentPage(1);
            }}
          >
            4
          </div>
          <div
            className="results-per-page-btn"
            onClick={() => {
              setNumberOfResults(5);
              setCurrentPage(1);
            }}
          >
            5
          </div>
          <div
            className="results-per-page-btn"
            onClick={() => {
              setNumberOfResults(6);
              setCurrentPage(1);
            }}
          >
            6
          </div>
          <div
            className="results-per-page-btn"
            onClick={() => {
              setNumberOfResults(7);
              setCurrentPage(1);
            }}
          >
            7
          </div>
          <div
            className="results-per-page-btn"
            onClick={() => {
              setNumberOfResults(8);
              setCurrentPage(1);
            }}
          >
            8
          </div>
          <div
            className="results-per-page-btn"
            onClick={() => {
              setNumberOfResults(9);
              setCurrentPage(1);
            }}
          >
            9
          </div>
          <div
            className="results-per-page-btn"
            onClick={() => {
              setNumberOfResults(10);
              setCurrentPage(1);
            }}
          >
            10
          </div>
          {/* setNumberOfResults to user selected, then set currentPage to 1 */}
        </div>
      </div>
    );
  }
};
export default BlogPage;

// what is the page limit?
// currentPage (3) * numberOfResults (5) = (15)  items.length
//
