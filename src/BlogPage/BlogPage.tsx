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
      <div
        className={
          state.darkMode ? `dark-mode blog-page` : `light-mode blog-page`
        }
      >
        {items.map((item) => (
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
                {" "}
                ...
              </Link>{" "}
              {/* need to be in the map method to pass them down as props for each one */}
            </p>
            <img src={item.img} className="blog-img"></img>
            <p className="blog-date">{item.date}</p>
          </div>
        ))}
      </div>
    );
  }
};
export default BlogPage;

// to send images will need to send images that are saved externally, then just send across the path
