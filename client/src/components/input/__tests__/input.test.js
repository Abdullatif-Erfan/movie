import react from "react";
import { shallow } from "enzyme";
import Input from "../Input";

const setUp = (props = {}) => {
  const component = shallow(<Input {...props} />);
  return component;
};

describe("Reusable Input Field Component", () => {
  let component;
  beforeEach(() => {
    const props = [
      {
        type: "search",
        className: "form-control",
        placeholder: "placeholder sample text",
        value: "movie title"
      }
    ];
    component = setUp(props);
  });

  it("Should render reusable search input field", () => {
    expect(component.find("input").length).toBe(1);
  });
});
