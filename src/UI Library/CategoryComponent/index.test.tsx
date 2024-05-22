import React from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react-native";

import CategoryComponent from "./index";

describe("Testing the category compoenent", () => {
  it("tests that the onPress function of the category component works ", () => {
    const mockOnpress = jest.fn();

    const { getByTestId } = render(<CategoryComponent onPress={mockOnpress} />);
    const categoryComponent = getByTestId("CategoryComponent");
    fireEvent.press(categoryComponent);

    expect(mockOnpress).toHaveBeenCalled();
  });
});
