import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <section className="images">
        <div className="row">
          {props.images.map(function (image, indexPic) {
            return (
              <div className="col-4" key="indexPic">
                <a href={image.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={image.src.tiny}
                    className="img-fluid"
                    alt="search"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
