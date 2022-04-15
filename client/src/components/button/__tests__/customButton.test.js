import React from "react";
import { findByTestAttrr } from "../../../utils/testUtils";
import CustomButton from "../CustomButton";
import { shallow } from "enzyme";

const setUp = (props = {}) => {
  const component = shallow(<CustomButton {...props} />);
  return component;
};

describe("Custom Button Component", () => {
  let component;
  let mockCallBack;
  beforeEach(() => {
    mockCallBack = jest.fn();
    const props = {
      children: "Example Button Text",
      onClick: mockCallBack,
      btnType: "success"
    };
    component = setUp(props);
  });

  it("Should render reusable button", () => {
    const button = findByTestAttrr(component, "re-usable-button");
    expect(button.length).toBe(1);
  });

  it("Expects to run onClick function when button is pressed in the DOM", () => {
    const button = shallow(
      <CustomButton onClick={mockCallBack}></CustomButton>
    );
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
