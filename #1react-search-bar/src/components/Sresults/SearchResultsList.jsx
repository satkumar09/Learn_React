//import React from 'react'
import { SearchResults } from "../SearchResults/SearchResults";
import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {
  return (
    <>
      <div className="results-list">
        {
          //to add code inside this div, {} is used
          <div>
            {results.map((result, id) => {
              return <SearchResults result={result} key={id} />;
            })}
          </div>
        }
      </div>
    </>
  );
};
