import React from "react";
import PropTypes from "prop-types";
import FilmCardAdditional from "../film-card-additional/film-card-additional";

const FilmsListAdditional = ({films}) => {

  let filmsAdditional = [];
  films.forEach((film, index) => {
    if (index < 4) {
      filmsAdditional.push(film);
    } else {
      return;
    }
  });

  return (
    <div className="catalog__movies-list">
      {filmsAdditional.map((filmAdditional, index) => (
        <FilmCardAdditional
          key={`${index}-${filmAdditional.title}`}
          film={filmAdditional}
        />
      ))}
    </div>
  );
};

FilmsListAdditional.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsListAdditional;
