import React from "react";
import { shallow } from "enzyme";
import DetailsPage from "../DetailsPage";
import { findByTestAttrr, testStore } from "../../../utils/testUtils";

const setUp = (props = {}) => {
  const store = testStore(props);
  const component = shallow(<DetailsPage store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe("Movie details Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render custom-container", () => {
    const wrapper = findByTestAttrr(component, "custom-container");
    expect(wrapper.length).toBe(1);
  });
});
