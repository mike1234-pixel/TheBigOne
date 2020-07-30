import React, { useState, useEffect } from "react";
import "./BlogPage.scss";
import { useStore } from "react-redux";
import { Link } from "react-router-dom";

const BlogPage = (props) => {
  const store = useStore();
  const state = store.getState();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState<any[]>([]);
  const [items, setItems] = useState([]);

  // pagination
  const [numberOfResults] = useState(5);
  const [currentPage, setCurrentPage] = useState(2);

  // useEffect similar to componentDidMount
  useEffect(() => {
    // window.fetch = built-in ajax api (does the same as axios)
    fetch("http://localhost:4000/blogEntries")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data.blogEntries);
          // items is now equal to data from the api
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // return scrollbar to top on page refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // get all numbers between
  function getAllNumbersBetween(x, y) {
    var numbers = [];
    for (var i = x; i < y; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  // consts for pagination
  // example numberOfResults = 5, current page 1.
  // numberOfResults = 10, current page 2.
  let lastId = numberOfResults * currentPage; // 5 * 1 = 5.
  let firstId = lastId - (numberOfResults + 1); // 5 - (5 + 1) = 0
  let resultsToShow = getAllNumbersBetween(firstId, lastId); // [1, 2, 3, 4, 5]

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
        {items.map((item) =>
          item.id <= firstId && item.id <= lastId ? (
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
          ) : (
            ""
          )
        )}
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          Previous Page
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          See More Posts
        </button>
      </div>
    );
  }
};
export default BlogPage;
