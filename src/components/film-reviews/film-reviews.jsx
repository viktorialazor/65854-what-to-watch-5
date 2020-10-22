import React from "react";
import PropTypes from "prop-types";
import FilmsListAdditional from "../films-list-additional/films-list-additional";

const FilmReviews = ({films}) => {
  const film = films[0];
  let filmsFirstColumn = [];
  let filmsSecondColumn = [];

  film.reviews.forEach((review, index, array) => {
    if (index < array.length / 2) {
      filmsFirstColumn.push(review);
    }
  });

  film.reviews.forEach((review, index, array) => {
    if (index >= array.length / 2) {
      filmsSecondColumn.push(review);
    }
  });

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.background} alt={film.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre[0]}</span>
                <span className="movie-card__year">{film.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.poster} alt={`${film.title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-card__reviews movie-card__row">
                <div className="movie-card__reviews-col">
                  {filmsFirstColumn.map((review, index) => (
                    <div key={`${index}-${review.author}`} className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">{review.text}</p>

                        <footer className="review__details">
                          <cite className="review__author">{review.author}</cite>
                          <time className="review__date" >{review.date}</time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">{review.rating.rating}</div>
                    </div>
                  ))}
                </div>
                <div className="movie-card__reviews-col">
                  {filmsSecondColumn.map((review, index) => (
                    <div key={`${index}-${review.author}`} className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">{review.text}</p>

                        <footer className="review__details">
                          <cite className="review__author">{review.author}</cite>
                          <time className="review__date" >{review.date}</time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">{review.rating.rating}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsListAdditional
            films={films}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

FilmReviews.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    background: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.array.isRequired,
    year: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      dateTime: PropTypes.string.isRequired,
    }))
  })).isRequired,
};

export default FilmReviews;
