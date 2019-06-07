import React, { useState, useEffect } from 'react';
import AddLink from './components/AddLink';
import ListArticles from './components/ListArticles';
// import Search from './components/Search';
import { setObject, getObject } from './helpers';
import reactLogo from './images/react.png';
import jsLogo from './images/js.jpg';
import htmlLogo from './images/html.svg';

function App() {
  const [articles, setArticles] = useState([]);

  const techs = ['react', 'js', 'random'];

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

  // function setSearch(search) {
  //   console.log(search);
  //   console.log(articles);
  // }

  return (
    <div className="container">
      <AddLink articles={articles} setArticles={setArticles} techs={techs} />
      {/* <Search setSearch={setSearch} /> */}
      <ListArticles
        articles={articles}
        deleteArticle={deleteArticle}
        reactLogo={reactLogo}
        jsLogo={jsLogo}
        htmlLogo={htmlLogo}
      />
    </div>
  );
}

export default App;
