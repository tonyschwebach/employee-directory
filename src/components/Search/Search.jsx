// rsc component
// state for search
// componentDidMount?
// onChange
// no onSubmit in example
// render search box

import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <form
      className="columns my-6 is-centered"
      onSubmit={props.handleFormSubmit}
    >
      <div className="form-group column is-5">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="searchTerm"
          type="text"
          className="form-control input"
          placeholder="Search Name, Phone#, or Email"
          id="search"
        />
      </div>
    </form>
  );
};

export default Search;
