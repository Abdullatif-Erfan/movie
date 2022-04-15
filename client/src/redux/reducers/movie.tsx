import { Action } from "../action-types/actions";
import { ActionType } from "../action-types/types";
import {
  movieReducerInitialState,
  movieState
} from "../action-types/declarations";

function movie(state: movieState = movieReducerInitialState, action: Action) {
  const { type, payload } = action; // destructured

  switch (type) {
    case ActionType.GET_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false
      };
    case ActionType.SEARCH_MOVIE:
      return {
        ...state,
        movie: payload,
        loading: false
      };
    case ActionType.ERROR_MOVIES:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
export default movie;
