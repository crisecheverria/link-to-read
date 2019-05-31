import React, { useState, useEffect } from 'react';
import { setItem, getItem } from '../helpers';

const AddLink = props => {
  const [link, setLink] = useState('');
  const [savedLink, setSavedLink] = useState('');

  useEffect(() => {
    setSavedLink(getItem('link'));
  }, []);

  const handleChange = e => {
    setLink(e.target.value);
  };

  const handleSubmit = () => {
    setItem('link', link);
  };

  return (
    <>
      <input
        type="text"
        name="link"
        value={link}
        placeholder="Link to Read..."
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Link
      </button>
      <p>{link}</p>
      <h1>Saved link:</h1>
      <p>{savedLink}</p>
    </>
  );
};

export default AddLink;
