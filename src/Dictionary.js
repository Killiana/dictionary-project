import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [key, setKey] = useState(props.defaultKey);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function getResponse(response) {
    setResults(response.data[0]);
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${key}`;
    axios.get(apiUrl).then(getResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleChange(event) {
    setKey(event.target.value);
  }
  function load() {
    setLoaded(true);
    Search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <div className="top">Look up a word </div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleChange}
              defaultValue={props.defaultKey}
            />
          </form>
          <span> i.e. star, asteroid, meteoroid, galaxy </span>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
