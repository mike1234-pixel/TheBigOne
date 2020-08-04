import React, { useState, useEffect } from "react";
import urlifyArticleTitle from "../../functions/urlifyArticleTitle";
import "./BlogPage.scss";
import { Link } from "react-router-dom";

const BlogPage = (props) => {
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
              pathname: `/BlogPost/${urlifyArticleTitle(item.title)}`,
            }}
          >
            ...
          </Link>
        </p>
        <img src={item.img} className="blog-img" alt={item.title}></img>
        <p className="blog-date">{item.date}</p>
      </div>
    ));

  const createResultsPerPageButtons = () => {
    let resultsPerPageButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
      <div
        className="results-per-page-btn"
        onClick={() => {
          setNumberOfResults(item);
          setCurrentPage(1);
        }}
      >
        {item}
      </div>
    ));
    return resultsPerPageButtons;
  };

  if (error) {
    return <div>Error:</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        className={
          props.darkMode ? `dark-mode blog-page` : `light-mode blog-page`
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
          {createResultsPerPageButtons()}
          {/* setNumberOfResults to user selected, then set currentPage to 1 */}
        </div>
      </div>
    );
  }
};
export default BlogPage;
