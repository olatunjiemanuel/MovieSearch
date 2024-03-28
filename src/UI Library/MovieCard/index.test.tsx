import React from "react";
import MovieCard from "./index";
import renderer from "react-test-renderer";
import { describe, it, expect } from "@jest/globals";

describe("testing the movie card component", () => {
  it("Testing that App UI renders correctly", () => {
    const tree = renderer.create(<MovieCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
