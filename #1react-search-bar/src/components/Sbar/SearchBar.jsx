import { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setResults }) => {
  //To grab the input text
  const [input, setInput] = useState("");

  //To fetch data from external API
  const fetchData = (value) => {
    //async function fetch:
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jValue) => {
        const results = jValue.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
