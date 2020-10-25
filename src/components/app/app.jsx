import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmInList from "../film-in-list/film-in-list";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = ({films}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <Main
              onPlayButtonClick={() => history.push(`/films`)}
              films={films}
            />
          )}
        />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <FilmInList
            films={films}
          />
        </Route>
        <Route exact path="/films/:id/details">
          <FilmDetails
            films={films}
          />
        </Route>
        <Route exact path="/films/:id/reviews">
          <FilmReviews
            films={films}
          />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview
            films={films}
          />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    background: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.array.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rating: PropTypes.number.isRequired,
      ratingDescription: PropTypes.string.isRequired,
    }).isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    duration: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      dateTime: PropTypes.string.isRequired,
    })).isRequired
  })).isRequired,
};

export default App;
