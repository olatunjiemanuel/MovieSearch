import { StyleSheet, Text, View, Platform, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

//component imports
import SearchBarComponent from "./src/UI Library/Forms/SearchBarComponent";
import MovieCard from "./src/UI Library/MovieCard";

//data imoport
import MovieList from "./src/MovieList/index";

//function import
import { SearchMovies } from "./src/MovieList/index";

const MovieSearch = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [movieData, setMovieData] = useState(MovieList);

  // Search Query
  const Search = () => {
    const searchResults = SearchMovies(searchQuery);
    setMovieData(searchResults);
  };

  return (
    <View style={styles.mainCntnr}>
      <View style={styles.searchCntnr}>
        <SearchBarComponent
          placeHolder="Find a movie"
          onChangeText={(value: string) => {
            setSearchQuery(value);
            console.log(value);
          }}
          handleSubmit={() => {
            Search();
          }}
        />
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={movieData}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <View>
                <MovieCard
                  movieTitle={item.title}
                  genre={item.genre}
                  release_year={item.release_year}
                  director={item.director}
                  cast={item.cast}
                  plot={item.plot}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MovieSearch;

const styles = StyleSheet.create({
  mainCntnr: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: Platform.OS === "ios" ? 60 : 20,
  },
  searchCntnr: {
    marginBottom: 20,
  },
});
