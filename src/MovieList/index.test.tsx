import { describe, expect, it } from "@jest/globals";
import { SearchMovies, FilterMovies } from "./index";

describe("MovieList functions", () => {
  it("SearchMovies returns correct results", () => {
    const query = "galactic";
    const results = SearchMovies(query);

    expect(results.length).toBe(1);
    expect(results[0].title).toBe("The Galactic Odyssey");
  });

  it("SearchMovies returns correct results for genre", () => {
    const query = "drama";
    const results = SearchMovies(query);

    expect(results.length).toBe(1);
    expect(results[0].title).toBe("Midnight Melodies");
  });

  it("SearchMovies returns correct results for release year", () => {
    const query = "2021";
    const results = SearchMovies(query);

    expect(results.length).toBe(1);
    expect(results[0].title).toBe("Mystery Manor");
  });

  it("FilterMovies returns correct results", () => {
    const query = "comedy";
    const results = FilterMovies(query);

    expect(results.length).toBe(1);
    expect(results[0].title).toBe("Culinary Chronicles");
  });

  it("FilterMovies returns correct results for partial genre", () => {
    const query = "myst";
    const results = FilterMovies(query);

    expect(results.length).toBe(1);
    expect(results[0].title).toBe("Mystery Manor");
  });

  it("SearchMovies returns empty array for no match", () => {
    const query = "nonexistent";
    const results = SearchMovies(query);

    expect(results.length).toBe(0);
  });

  it("FilterMovies returns empty array for no match", () => {
    const query = "nonexistent";
    const results = FilterMovies(query);

    expect(results.length).toBe(0);
  });
});
