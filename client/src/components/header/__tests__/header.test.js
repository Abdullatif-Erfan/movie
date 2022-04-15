import React from "react";
import { findByTestAttrr } from "../../../utils/testUtils";
import Header from "../Header";
import { shallow } from "enzyme";

const setUp = (props = {}) => {
  const component = shallow(<Header />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render headerWrapper element", () => {
    const button = findByTestAttrr(component, "header-wrapper");
    expect(button.length).toBe(1);
  });

  it("Should render logo image", () => {
    const logoName = "logo.png";
    const logo = shallow(<Header logoName={logoName} />);
    expect(logo.find("img").prop("src")).toEqual(logoName);
  });
});
