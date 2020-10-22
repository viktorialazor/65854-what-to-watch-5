import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(film) {
    this.setState({activeCard: film});
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, index) => (
          <FilmCard
            key={`${index}-${film.title}`}
            film={film}
            handleHover={this.handleHover}
          />
        ))}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsList;
