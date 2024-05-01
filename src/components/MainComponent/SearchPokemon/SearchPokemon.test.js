import React from "react";
import { shallow } from "enzyme";
import SearchPokemon from "./SearchPokemon";

describe("SearchPokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchPokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
