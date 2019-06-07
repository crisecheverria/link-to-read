import React from 'react';
import Card from './Card';

export default function ListArticles({
  articles,
  deleteArticle,
  reactLogo,
  jsLogo,
  htmlLogo
}) {
  return (
    <div className="columns is-multiline">
      {articles &&
        articles.map(article => (
          <div key={article.url} className="column is-3">
            <Card
              article={article}
              deleteArticle={deleteArticle}
              reactLogo={reactLogo}
              jsLogo={jsLogo}
              htmlLogo={htmlLogo}
            />
          </div>
        ))}
    </div>
  );
}
