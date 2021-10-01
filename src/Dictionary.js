import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [key, setKey] = useState("");
  let [results, setResults] = useState(null);

  function getResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function Search(event) {
    event.preventDefault();
    //alert(`searching ${key}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${key}`;
    axios.get(apiUrl).then(getResponse);
  }
  function handleChange(event) {
    setKey(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" onChange={handleChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
