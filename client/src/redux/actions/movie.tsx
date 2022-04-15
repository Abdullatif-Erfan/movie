import axiosInstance from "../../utils/axios";
import { ActionType } from "../action-types/types";
import { Action } from "../action-types/actions";
import { Dispatch } from "redux";

// GET Movies
export const getMovies = () => async (dispatch: Dispatch<Action>) => {
  try {
    const result = await axiosInstance.get("/movies");
    if (result.data.status === "failed") {
      dispatch({
        type: ActionType.ERROR_MOVIES,
        payload: result.data.message
      });
    } else {
      dispatch({
        type: ActionType.GET_MOVIES,
        payload: result.data.records
      });
    }
  } catch (err) {
    dispatch({
      type: ActionType.ERROR_MOVIES,
      payload: "getMovies method Error"
    });
  }
};

// search a movie by id
export const searchMovieDetailsById = (imdbID: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    const result = await axiosInstance.post(`/movies/${imdbID}`);
    /**
     * Check if at least has one record, dispatch an action
     * else show custom message from server side application
     */
    if (result.data.status === "failed") {
      dispatch({
        type: ActionType.ERROR_MOVIES,
        payload: result.data.message
      });
    } else {
      dispatch({
        type: ActionType.SEARCH_MOVIE,
        payload: result.data.records
      });
    }
  } catch (err) {
    dispatch({
      type: ActionType.ERROR_MOVIES,
      payload: "searchMovieDetailsById method Error"
    });
  }
};
