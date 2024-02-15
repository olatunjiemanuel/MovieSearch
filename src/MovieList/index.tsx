const MovieList: ReadonlyArray<{
  title: string;
  genre: string;
  release_year: number;
  rating: number;
  director: string;
  cast: [string, string, string];
  plot: string;
  poster_url: string;
}> = [
  {
    title: "The Galactic Odyssey",
    genre: "Science Fiction",
    release_year: 2022,
    rating: 8.5,
    director: "Alexandra Nova",
    cast: ["John Stellar", "Emma Nebula", "Michael Quasar"],
    plot: "In a distant galaxy, a group of explorers embarks on an epic journey to save their dying star system.",
    poster_url: "https://example.com/posters/galactic_odyssey.jpg",
  },
  // {
  //   title: "Midnight Melodies",
  //   genre: "Drama",
  //   release_year: 2023,
  //   rating: 7.8,
  //   director: "Olivia Harmony",
  //   cast: ["Ethan Moonlight", "Sophia Serenade", "Liam Crescendo"],
  //   plot: "A struggling musician finds solace in the vibrant nightlife of a city, discovering love and redemption through music.",
  //   poster_url: "https://example.com/posters/midnight_melodies.jpg",
  // },
  {
    title: "Mystery Manor",
    genre: "Mystery",
    release_year: 2021,
    rating: 9.0,
    director: "Victor Enigma",
    cast: ["Isabella Riddle", "Daniel Cipher", "Oliver Puzzler"],
    plot: "A detective with a knack for solving puzzles is called to unravel the secrets of a haunted mansion with a dark history.",
    poster_url: "https://example.com/posters/mystery_manor.jpg",
  },
  {
    title: "Culinary Chronicles",
    genre: "Comedy",
    release_year: 2024,
    rating: 6.5,
    director: "Gordon Laughsalot",
    cast: ["Jessica Giggles", "Sammy Sizzle", "Charlie Chuckle"],
    plot: "A hilarious journey of three aspiring chefs competing in a cooking competition, turning the kitchen into a comedy arena.",
    poster_url: "https://example.com/posters/culinary_chronicles.jpg",
  },
];

export const SearchMovies = (query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  const results = MovieList.filter(
    (movies) =>
      movies.title.toLowerCase().includes(lowerCaseQuery) ||
      movies.genre.toLowerCase().includes(lowerCaseQuery) ||
      movies.cast.includes(lowerCaseQuery) ||
      movies.plot.toLowerCase().includes(lowerCaseQuery) ||
      movies.release_year.toString().toLowerCase().includes(lowerCaseQuery),
  );
  return results;
};

export default MovieList;
