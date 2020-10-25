import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, handleHover} = this.props;
    const {
      image,
      title,
    } = film;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          handleHover(film);
        }}
      >
        <div className="small-movie-card__image">
          <img src={image} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to="/films/0">{title}</Link>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  handleHover: PropTypes.func.isRequired,
  film: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmCard;
