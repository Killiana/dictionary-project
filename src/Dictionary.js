import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

export default function Dictionary(props) {
  let [key, setKey] = useState(props.defaultKey);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);
  function getResponse(response) {
    setResults(response.data[0]);
  }

  function handlePex(response) {
    setImages(response.data.photos);
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${key}`;
    axios.get(apiUrl).then(getResponse);

    let pexApiKey = "563492ad6f91700001000001a3fc6b564d2546918680d8298d708b37";
    let pexUrl = `https://api.pexels.com/v1/search?query=${key}&per_page=6`;
    axios
      .get(pexUrl, { headers: { Authorization: `Bearer ${pexApiKey}` } })
      .then(handlePex);
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
        <Images images={images} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
