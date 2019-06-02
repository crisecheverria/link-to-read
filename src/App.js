import React, { useState, useEffect } from 'react';
import AddLink from './components/AddLink';
import ListArticles from './components/ListArticles';
import reactLogo from './images/react.svg';
import jsLogo from './images/js.png';
import { setObject, getObject } from './helpers';

function App() {
  const [articles, setArticles] = useState([]);

  const techs = ['react', 'js'];

  useEffect(() => {
    const localStorageArticles = getObject('articles');
    if (localStorageArticles !== undefined) setArticles(localStorageArticles);
  }, []);

  useEffect(() => {
    setObject('articles', articles);
  }, [articles]);

  function deleteArticle(articleId) {
    const newArticleList = articles.filter(({ url }) => url !== articleId);
    setObject('articles', newArticleList);
    setArticles(newArticleList);
  }

  return (
    <div className="container">
      <AddLink articles={articles} setArticles={setArticles} techs={techs} />
      <ListArticles
        articles={articles}
        deleteArticle={deleteArticle}
        reactLogo={reactLogo}
        jsLogo={jsLogo}
      />
    </div>
  );
}

export default App;
