import React from 'react';
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero">
    <div className="hero-body">
      <h1 className="title">
        Employee Directory
      </h1>
      <h3 className="subtitle">
        Click on the the column headings to sort by heading or use the search box to filter your results.
      </h3>
    </div>
  </div>
  );
};

export default Banner;