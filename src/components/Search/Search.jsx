// rsc component
// state for search
// componentDidMount?
// onChange
// no onSubmit in example
// render search box

import React from 'react';
import "./Search.css";

const Search = (props) => {
  return (
    <form className="columns my-6 is-centered">
      <div className="form-group column is-5">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="searchTerm"
          type="text"
          className="form-control input"
          placeholder="Search for an Employee by Name, Phone Number, or Email"
          id="search"
        />

      </div>
    </form>
  );
};

export default Search;