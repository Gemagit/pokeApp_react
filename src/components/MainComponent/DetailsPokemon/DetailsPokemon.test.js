import React from "react";
import { shallow } from "enzyme";
import DetailsPokemon from "./DetailsPokemon";

describe("DetailsPokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DetailsPokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
