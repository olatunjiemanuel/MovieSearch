import React from "react";
import renderer from "react-test-renderer";
import { describe, it, expect } from "@jest/globals";

import App from "./App";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();

    if (tree == null) {
      throw new Error("tree object is null, app not rendered");
    }
    if (Array.isArray(tree)) {
      throw new Error("Expecting one base object for render");
    }
    if (tree.children == null) {
      throw new Error("no children found");
    }

    expect(tree).not.toBeNull();
    expect(Array.isArray(tree)).toBeFalsy();
    expect(tree.children).toBeDefined();
    expect(tree.children.length).toBe(1);
  });
});
