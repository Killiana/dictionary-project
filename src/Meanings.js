import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, indexMean) {
        return (
          <div key={indexMean}>
            <div className="definition">{definition.definition}</div>

            <div className="example">{definition.example}</div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
