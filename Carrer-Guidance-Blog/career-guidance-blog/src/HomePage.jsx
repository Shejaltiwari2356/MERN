import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   // Fetch articles from backend API
  //   fetch("/api/articles")
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data));
  // }, []);

  useEffect(() => {
    // Fetch articles from backend API
    fetch("http://localhost:5000/api/articles") // Make sure this URL matches your backend
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the fetched articles for debugging
        setArticles(data);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div>
      <h1>Career Guidance Blog</h1>
      {articles.length ? (
        <div>
          {articles.map((article) => (
            <div key={article._id} style={{ marginBottom: "20px" }}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
};
export default HomePage;
