import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [key, setKey] = useState({});
  function Search(event) {
    event.preventDefault();
    alert(`searching ${key}`);
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
