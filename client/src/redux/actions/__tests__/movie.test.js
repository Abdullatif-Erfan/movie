import moxios from "moxios";
import { testStore } from "./../../../utils/testUtils";
import { getMovies, searchMovieDetailsById } from "../movie";

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

  // it("Should be called searchMovieDetailsById method then store should be updated successfully", () => {
  //   return stores.dispatch(searchMovieDetailsById(imdbID)).then(() => {
  //     const newState = stores.getState();
  //     expect(newState.movie.movie["imdbID"]).toBe(imdbID);
  //     // expect(newState.movie.movie["imdbID"]).toBeDefined();
  //   });
  // });
});

// =====================================
// describe("Search movie action", () => {
//   beforeEach(() => {
//     moxios.install();
//   });

//   afterEach(() => {
//     moxios.uninstall();
//   });

//   const stores2 = testStore();
//   const imdbID = "tt3554046";

//   // moxios.wait(() => {
//   //   const request = moxios.requests.mostRecent();
//   //   request.respondWith({
//   //     status: 200,
//   //     response: imdbID
//   //   });
//   // });

//   // =================

//   it("Should be called searchMovieDetailsById method then store should be updated successfully", () => {
//     return stores2.dispatch(searchMovieDetailsById(imdbID)).then(() => {
//       const newState = stores2.getState();
//       expect(newState.movie.movie["imdbID"]).toBe(imdbID);
//       // expect(newState.movie.movie["imdbID"]).toBeDefined();
//     });
//   });
// });

// ================== old one =====================
// import moxios from "moxios";
// import { testStore } from "../utils/testUtils";
// import { getMovies } from "../redux/actions/movie2";

// describe("getMovies action creator test", () => {
//   beforeEach(() => {
//     // install means, detect axios call and test with moxios
//     moxios.install();
//   });

//   afterEach(() => {
//     moxios.uninstall();
//   });

//   it("for test", () => {});
//   test("sotore is updated correctly", async () => {
//     // const expectedState = [
//     //   {
//     //     Poster: "image url",
//     //     Title: "Movie title",
//     //     Type: "movie",
//     //     Year: 2022,
//     //     imdbID: "imdbID sample"
//     //   }
//     // ];
//     // const store = testStore();
//     // moxios.wait(() => {
//     //   const request = moxios.requests.mostRecent();
//     //   request.respondWith({
//     //     status: 200,
//     //     response: expectedState
//     //   });
//     // });
//     // return store.dispatch(getMovies()).then(() => {
//     //   const newState = store.getState();
//     //   console.log(newState);
//     //   // expect(newState.movies).toBe(expectedState);
//     // });
//   });
// });

// // =============== sample ============
// // import configureMockStore from 'redux-mock-store';
// // import thunk from 'redux-thunk';
// // import moxios from 'moxios';
// // import * as actions from './../../../../src/modules/inputData/action';
// // import { API_URL } from './../../../../src/constants';

// // const middlewares = [thunk];
// // const mockStore = configureMockStore(middlewares);

// // describe('InputData actions', () => {
// //  test('Test input value update', () => {
// //  moxios.install();
// //  moxios.stubRequest(`${API_URL}/process-input/`, { status: 200, response: 'A nice test result' });
// //  const store = mockStore();

// //  return store.dispatch(actions.handleSubmit('anyData'))
// //   .then(() => {
// //     expect(store.getActions()).toEqual([
// //       { type: 'UPDATE_OUTPUTT', payload: 'A nice test result' },
// //     ]);
// //   });

// =================  for login ===================
// import configureStore from "redux-mock-store";
// import thunk from "redux-thunk";
// import { Dispatch } from "redux";
// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

// // use your store inside your tests
// const store = mockStore();

// const sampleData = [
//   {
//     Poster: "https://m.media-amazon/100.jpg",
//     Title: "Movie title",
//     Type: "movie",
//     Year: 2021,
//     imdbID: "imdbID sample"
//   }
// ];

// describe("new method", () => {
//   test("...", async () => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: sampleData
//       });
//     });

//     expect(store.dispatch(getMovies())).toEqual(sampleData);
//     // expect(API.post).toHaveBeenCalledWith(/* ... */);
//   });
// });
