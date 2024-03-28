import React from "react";
import ButtonComponent from "./index";
import { render, fireEvent } from "@testing-library/react-native";
import { describe, it, expect, jest } from "@jest/globals";

describe("Testing button component", () => {
  it("tests that the onPress function is called when button is pressed", () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(<ButtonComponent onPress={mockOnPress} />);
    const buttonPressed = getByTestId("Button");
    fireEvent.press(buttonPressed);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
