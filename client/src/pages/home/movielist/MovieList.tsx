import React from "react";
import { Link } from "react-router-dom";
import { movieDeclarationTypes } from "../../../redux/action-types/declarations";
import "./movieListStyle.css";

type propTypes = {
  index?: number;
  movie: movieDeclarationTypes;
};

const MovieList: React.FC<propTypes> = ({ index, movie = {} }: propTypes) => {
  const { Title, imdbID, Poster, Type } = movie;
  return (
    <div key={index} className="col-md-3 col-sm-4 col-xs-6">
      <div className="col-12 card mt-20 mb-20" data-test="card-element">
        <Link to={`/details/${imdbID}`}>
          <div className="movieTitle" data-test="movie-title">
            {Title}
          </div>
          <span>
            {/* in our list the poster of one movie is N/A */}
            {Poster != "N/A" ? (
              <img
                src={Poster}
                alt="Movie Poster"
                data-test="movie-poster"
                className="moviePoster"
              />
            ) : (
              <div className="noImageFound">
                <div className="vh_center">No Image</div>
              </div>
            )}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MovieList;
