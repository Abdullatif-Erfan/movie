import {
  movieDeclarationTypes,
  searchMovieDeclarationTypes
} from "../action-types/declarations";
import { ActionType } from "./types";

// === Movie Get Action Types ====
interface getMoviesActionTypes {
  type: ActionType.GET_MOVIES;
  payload: movieDeclarationTypes;
}

// === Movie Search Action Types ====
interface searchMovieActionTypes {
  type: ActionType.SEARCH_MOVIE;
  payload: searchMovieDeclarationTypes;
}

// === Movie Error Action Types ====
interface movieErrorActionTypes {
  type: ActionType.ERROR_MOVIES;
  payload: {};
}

export type Action =
  | getMoviesActionTypes
  | movieErrorActionTypes
  | searchMovieActionTypes;
