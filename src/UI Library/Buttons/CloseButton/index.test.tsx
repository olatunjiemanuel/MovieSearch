import React from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react-native";

import CloseButton from "./index";

describe("Close Button test", () => {
  it("tests that the onPress function of the close button works ", () => {
    const mockOnpress = jest.fn();

    const { getByTestId } = render(<CloseButton onPress={mockOnpress} />);
    const closeButton = getByTestId("closeButton");
    fireEvent.press(closeButton);

    expect(mockOnpress).toHaveBeenCalled();
  });
});
