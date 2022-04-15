import react from "react";
import MovieList from "../movielist/MovieList";
import { shallow } from "enzyme";
import { findByTestAttrr } from "../../../utils/testUtils";

const setUp = (props = {}) => {
  const component = shallow(<MovieList {...props} />);
  return component;
};

describe("MovieList Component", () => {
  let component;
  beforeEach(() => {
    const initialState = [
      { index: 1 },
      {
        Title: "Movie Title",
        imdbID: "imdbId of a movie",
        Poster: "Poster of a movie",
        Type: "Type of a movie"
      }
    ];
    component = setUp(initialState);
  });

  it("Should render card element", () => {
    const card = findByTestAttrr(component, "card-element");
    expect(card.length).toBe(1);
  });

  it("Should render movie title", () => {
    const title = findByTestAttrr(component, "movie-title");
    expect(title.length).toBe(1);
  });

  it("Should render movie poster", () => {
    const poster = findByTestAttrr(component, "movie-poster");
    expect(poster.length).toBe(1);
  });
});
