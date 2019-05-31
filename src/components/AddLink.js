import React, { useState } from 'react';
import { useInput } from './UseInput';

const AddLink = props => {
  const { value: url, bind: bindUrl, reset: resetUrl } = useInput('');
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
  const [articles, setArticles] = useState([]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const newArticle = { url, title };
    setArticles([...articles, newArticle]);

    resetUrl();
    resetTitle();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          placeholder="Link to Read..."
          {...bindUrl}
        />
        <input type="text" name="title" placeholder="Title..." {...bindTitle} />
        <button type="submit">Add Link</button>
      </form>
      <ul>
        <h3>List of Articles</h3>
        {articles.map(article => (
          <li key={article.url}>{article.title}</li>
        ))}
      </ul>
    </>
  );
};

export default AddLink;
