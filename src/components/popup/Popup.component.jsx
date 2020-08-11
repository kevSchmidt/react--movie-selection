import React from "react";

import "./Popup.styles.scss";

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span> ({selected.Year}) </span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>

        <div className="plot">
          <img src={selected.Poster} alt="poster" />
          <p> {selected.Plot} </p>
        </div>

        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Popup;