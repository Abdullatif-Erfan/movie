import moxios from "moxios";
import { testStore } from "./../../../utils/testUtils";
import { getMovies } from "../movie";

describe("getMovies action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    jest.useRealTimers();
  });
  // jest.useFakeTimers("legacy");
  jest.setTimeout(30000);
  const sampleData = [
    {
      Poster: "https://m.media-amazon/100.jpg",
      Title: "Movie title",
      Type: "movie",
      Year: 2021,
      imdbID: "imdbID sample"
    }
  ];

  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: sampleData
    });
  });

  const stores = testStore();

  /**
   * if getMovies method will be called, action will be dispateched, and store  will be updated, then the new data should have year field with a value of 2021
   *
   * Note: when we add new record, the will copy the current state and add new record at the end of the list, so we have to test if store has at least one movie record
   */
  it("Should be called getMovies method then store should be updated successfully", () => {
    return stores.dispatch(getMovies()).then(() => {
      const newState = stores.getState();
      // expect(newState.movie).toBe(sampleData);
      // console.log(newState.movie.movies[0].Year); // 2021
      expect(newState.movie.movies[0].Year).toBe("2021");
    });
  });
});
