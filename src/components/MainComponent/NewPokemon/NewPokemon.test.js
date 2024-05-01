import React from "react";
import { shallow } from "enzyme";
import NewPokemon from "./NewPokemon";

describe("NewPokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewPokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
