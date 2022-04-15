import { ActionType } from "../../action-types/types";
import { movieReducerInitialState } from "../../action-types/declarations";

import movieReducer from "../movie";

describe("Movie Reducer test", () => {
  it("Should return default state", () => {
    const defaultExpectedResult = {
      movies: [],
      movie: {},
      loading: true,
      error: ""
    };
    const newState = movieReducer(movieReducerInitialState, {});
    expect(newState).toEqual(defaultExpectedResult);
  });

  it("Should return new state if receiving ActionType of GET_MOVIES", () => {
    const movies = [
      {
        Poster: "image url",
        Title: "Movie title",
        Type: "movie",
        Year: 2021,
        imdbID: "imdbID sample"
      }
    ];

    const expectedResult = {
      movies: movies,
      movie: {},
      loading: false,
      error: ""
    };

    const newState = movieReducer(movieReducerInitialState, {
      type: ActionType.GET_MOVIES,
      payload: movies
    });
    expect(newState).toEqual(expectedResult);
  });

  // ====================== Test of Seaching a movie by imdbID ======================
  it("Should return a movie details if receiving ActionType of SEARCH_MOVIE", () => {
    const movie = [
      {
        title: "Movie title",
        director: "movie",
        plot: "imdbID sample",
        poster: "image url"
      }
    ];

    const expectedSearchResult = {
      movies: [],
      movie: movie,
      loading: false,
      error: ""
    };

    const newState = movieReducer(movieReducerInitialState, {
      type: ActionType.SEARCH_MOVIE,
      payload: movie
    });
    expect(newState).toEqual(expectedSearchResult);
  });

  // ====================== Test of Error Message ======================
  it("Should return a custom error message if receiving ActionType of ERROR_MOVIES", () => {
    const err = "Our custom error message";

    const expectedErrorResult = {
      movies: [],
      movie: {},
      loading: false,
      error: err
    };

    const newState = movieReducer(movieReducerInitialState, {
      type: ActionType.ERROR_MOVIES,
      payload: err
    });
    expect(newState).toEqual(expectedErrorResult);
  });
});
