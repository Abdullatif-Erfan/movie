export const movieReducerInitialState = {
  movies: [],
  movie: {},
  loading: true,
  error: ""
};

export interface movieState {
  movies?: {};
  movie?: {};
  loading: boolean;
  error?: string;
}

export interface movieDeclarationTypes {
  Title?: string;
  Year?: number;
  imdbID?: string;
  Type?: string;
  Poster?: string;
}

export interface searchMovieDeclarationTypes {
  Title?: string;
  imdbID?: string;
  Director?: string;
  Plot?: string;
  Poster?: string;
}
