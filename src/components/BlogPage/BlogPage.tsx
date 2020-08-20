import React, { useState, useEffect } from "react";
import urlifyArticleTitle from "../../functions/urlifyArticleTitle";
import "./BlogPage.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogPage = (props) => {
  // data type for props.data...
  interface blogData {
    comment: any[];
    _id: string;
    post_id: number;
    title: string;
    content: string;
    date: string;
    img: string;
  }

  const [items] = useState<blogData[]>(props.data);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numberOfResults, setNumberOfResults] = useState<number>(10);

  let lastId = numberOfResults * currentPage; // 10 * 1 = 10
  let firstId = lastId - numberOfResults;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const arrayOfBlogPosts = items
    .filter((item) => item.post_id > firstId && item.post_id <= lastId)
    .map((item, index) => (
      <Link
        to={{
          pathname: `/BlogPost/${urlifyArticleTitle(item.title)}`,
        }}
        className="link-component"
      >
        <div className="blog-post-listing" key={index}>
          <p className="blog-title">{item.title}</p>
          <p className="blog-content">
            {item.content.substring(0, 199)}
            ...
          </p>
          <img src={item.img} className="blog-img" alt={item.title}></img>
          <p className="blog-date">{item.date}</p>
        </div>
      </Link>
    ));

  const createResultsPerPageButtons = (): object[] => {
    const resultsPerPageButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
      (item, index) => (
        <div
          key={index}
          className="results-per-page-btn"
          onClick={() => {
            setNumberOfResults(item);
            setCurrentPage(1);
          }}
        >
          {item}
        </div>
      )
    );
    return resultsPerPageButtons;
  };

  return (
    <div
      className={
        props.darkMode
          ? `blog-page-dark-mode blog-page`
          : `blog-page-light-mode blog-page`
      }
    >
      <h1 className="blog-page-title">Blog</h1>
      {arrayOfBlogPosts}

      <p>Page {currentPage}</p>
      <p>
        Results: {firstId + 1} -{" "}
        {currentPage * numberOfResults <= items.length ? lastId : items.length}
      </p>
      <div className="next-prev-page-btn-container">
        <button
          className="prev-page-btn"
          onClick={
            currentPage !== 1
              ? () => setCurrentPage(currentPage - 1)
              : () => setCurrentPage(currentPage)
          }
        >
          Prev Page
        </button>
        <button
          className="next-page-btn"
          onClick={
            currentPage * numberOfResults < items.length
              ? () => setCurrentPage(currentPage + 1)
              : () => setCurrentPage(currentPage)
          }
        >
          Next Page
        </button>
      </div>
      <div className="results-per-page-title">Results Per Page</div>
      <div className="results-per-page-container">
        {createResultsPerPageButtons()}
        {/* setNumberOfResults to user selected, then set currentPage to 1 */}
      </div>
    </div>
  );
};
export default BlogPage;

BlogPage.propTypes = {
  darkMode: PropTypes.bool,
  data: PropTypes.array,
};
