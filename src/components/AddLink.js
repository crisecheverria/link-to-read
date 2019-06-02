import React from 'react';
import { useInput } from './UseInput';

const AddLink = ({ articles, setArticles, techs }) => {
  const { value: url, bind: bindUrl, reset: resetUrl } = useInput('');
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
  const { value: tech, bind: bindTech, reset: resetTech } = useInput('');

  const handleSubmit = evt => {
    evt.preventDefault();

    const newArticle = { url, title, tech };
    setArticles([...articles, newArticle]);

    resetUrl();
    resetTitle();
    resetTech();
  };

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column is-8">
            <form onSubmit={handleSubmit}>
              <div className="field is-grouped">
                <div className="control">
                  <input
                    type="text"
                    name="url"
                    className="input"
                    placeholder="Link..."
                    {...bindUrl}
                  />
                </div>
                <div className="control">
                  <input
                    type="text"
                    name="title"
                    className="input"
                    placeholder="Title..."
                    {...bindTitle}
                  />
                </div>
                <div className="control">
                  <div className="select">
                    <select {...bindTech}>
                      <option>Tech...</option>
                      {techs.map((tech, i) => (
                        <option key={i}>{tech}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="control">
                  <button type="submit" className="button is-link">
                    Add Link
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddLink;
