import React from "react";
import { describe, it, jest, expect } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react-native";

import SearchBarComponent from "./index";

describe("testing the search bar component", () => {
  it("tests that user input and submit function works", () => {
    const mockOnSubmit = jest.fn();
    const mockOnChangeText = jest.fn();
    const placeHolder = "Search...";

    const { getByTestId } = render(
      <SearchBarComponent
        placeHolder={placeHolder}
        handleSubmit={mockOnSubmit}
        onChangeText={mockOnChangeText}
      />,
    );

    const searchBarInput = getByTestId("searchBar");

    fireEvent.changeText(searchBarInput, "example search");

    expect(mockOnChangeText).toHaveBeenCalled();
    expect(placeHolder).toBe("Search...");

    fireEvent(searchBarInput, "submitEditing");

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
