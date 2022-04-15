import React from "react";
import { shallow } from "enzyme";
import Home from "../Home";
import { findByTestAttrr, testStore } from "../../../utils/testUtils";

const setUp = (props = {}) => {
  const store = testStore(props);
  const component = shallow(<Home store={store} />)
    .childAt(0)
    .dive();
  /**
   * ----------------- .childAt(0) -----------------------
   * if we use console.log(component.debug()), then we see:
   * <ContextProvider value={{...}}>
       <Home store={{...}} state={{...}} getMovies={[Function (anonymous)]} />
     </ContextProvider>
   * in order to remove provider and just test the exact component,
   * we have to remove <Provider></Provider> by .childAt(0)
   * --------------------- dive() ----------------------------
   * we still can't access elements inside our component, it seems like this:
   * <Home store={{...}} state={{...}} getMovies={[Function (anonymous)]} />
   * we have to use dive() method  of enzyme to get all elements of a component
   */
  // console.log(component.debug());
  return component;
};

describe("Home Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render search wrapper", () => {
    const wrapper = findByTestAttrr(component, "search-wrapper");
    expect(wrapper.length).toBe(1);
  });

  it("Should render card-wrapper element", () => {
    const wrapper = findByTestAttrr(component, "card-wrapper");
    expect(wrapper.length).toBe(1);
  });

  it("Should render reusable search input field", () => {
    expect(component.find("CustomInput").length).toBe(1);
  });
});
