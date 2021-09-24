import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [key, setKey] = useState({});

  function getResponse(response) {
    console.log(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
    alert(`searching ${key}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/colour${key}`;
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
    </div>
  );
}
