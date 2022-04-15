import React, { Fragment, useEffect, useState, ChangeEvent } from "react";
import { getMovies } from "../../redux/actions/movie";
import { movieDeclarationTypes } from "../../redux/action-types/declarations";
import Spinner from "../../components/loader/Spinner";
import CustomInput from "../../components/input/Input";
import MovieList from "./movielist/MovieList";

// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AppState } from "../../redux/reducers";

type propTypes = {
  getMovies?: () => void;
  loading?: boolean;
  state: { movies?: movieDeclarationTypes; loading?: boolean; error?: {} };
};

const Home = ({ getMovies, state: { movies, loading, error } }: propTypes) => {
  useEffect(() => {
    getMovies();
  }, []);

  // ========= handle search query =========================
  const [searchQuery, updateSearchQuery] = React.useState("");
  const [timeoutId, updateTimeoutId] = React.useState();

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    /** should not update the state for each character change */
    updateSearchQuery(event.target.value);
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => console.log("searchQuery updated"), 500);
    updateTimeoutId(timeout);
  };

  function searchKeyword(rows: React.ReactNode[] | any) {
    return rows.filter(
      row => row.Title.toLowerCase().indexOf(searchQuery) > -1
    );
  }
  const refreshPage = () => {
    window.location.reload();
  };

  let errWithQuotes = String(error); // convert object to string
  let errors = errWithQuotes.replace(/['"]+/g, ""); // remove double quotes

  return (
    <Fragment>
      <div className="container">
        {/* =========== Search Wrapper =========== */}
        <div className="searchWrapper" data-test="search-wrapper">
          <div className="row no-gutters">
            <div className="col">
              <CustomInput
                type="search"
                className="form-control"
                placeholder="Search by movie title, in lowercase"
                value={searchQuery}
                onChange={onTextChange}
              />
            </div>
          </div>
        </div>
        {/* =========== End Search Wrapper =========== */}

        <div className="col-12">
          <div className="row cardWrapper" data-test="card-wrapper">
            {errors != "" ? (
              <h1 className="warning">{errors}</h1>
            ) : (
              <Fragment>
                {loading && movies === [] ? (
                  <Spinner />
                ) : (
                  <Fragment>
                    {movies && (movies as React.ReactNode[]).length >= 1 ? (
                      searchKeyword(movies).map(
                        (movie: movieDeclarationTypes, index: number) => (
                          <MovieList key={index} movie={movie} />
                        )
                      )
                    ) : (
                      <h2>
                        {" "}
                        List is empty please hit the refresh button to get the
                        new data <br />
                        <button
                          className="btn btn-success"
                          onClick={refreshPage}
                        >
                          Refresh
                        </button>
                      </h2>
                    )}
                  </Fragment>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

/** @NO_NEED propTypes like this, but I defined at the top  */
// Home.propTypes = {
//   getMovies: PropTypes.func.isRequired,
//   movies: PropTypes.object
// };

const mapStateToProps = (state: AppState) => ({
  state: state.movie
});

export default connect(
  mapStateToProps,
  { getMovies }
)(Home);
