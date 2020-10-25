import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const FilmCardAdditional = ({film}) => {
  const {
    image,
    title,
  } = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/0">{title}</Link>
      </h3>
    </article>
  );
};

FilmCardAdditional.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmCardAdditional;
