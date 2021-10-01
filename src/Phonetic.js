import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return <div> {props.phonetic.text} </div>;
}
