import React from 'react';

export default function Card({ article, deleteArticle, reactLogo, jsLogo }) {
  const { url, title, tech } = article;

  function removeArticle(url) {
    deleteArticle(url);
  }
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={tech === 'react' ? reactLogo : jsLogo} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">{title}</div>
      </div>
      <footer className="card-footer">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-footer-item"
        >
          Read
        </a>
        <span onClick={() => removeArticle(url)} className="card-footer-item">
          Delete
        </span>
      </footer>
    </div>
  );
}
