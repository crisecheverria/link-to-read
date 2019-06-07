import React from 'react';
import { useInput } from './UseInput';

export default function Search({ setSearch }) {
  const { value: search, bind: bindSearch, reset: resetSearch } = useInput('');

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearch(search);

    resetSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field is-grouped">
        <div className="control">
          <input
            type="text"
            name="search"
            className="input"
            placeholder="Search..."
            {...bindSearch}
          />
        </div>

        <div className="control">
          <button type="submit" className="button is-link">
            Add Link
          </button>
        </div>
      </div>
    </form>
  );
}
