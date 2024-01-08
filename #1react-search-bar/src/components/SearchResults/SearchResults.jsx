import React from "react";
import "./SearchResults.css";
export const SearchResults = ({ result, id }) => {
  return (
    <>
      <div className="search-result">{result.name}</div>
    </>
  );
};
