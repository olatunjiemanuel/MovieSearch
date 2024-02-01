import { StyleSheet, Text, View, Platform, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

//component imports
import SearchBarComponent from "./src/UI Library/Forms/SearchBarComponent";
import ButtonComponent from "./src/UI Library/Buttons/ButtonComponent";
import MovieCard from "./src/UI Library/MovieCard";

//data imoport
import MovieList from "./src/MovieList/index";

//function import
import { SearchMovies } from "./src/MovieList/index";

const MovieSearch = () => {
  // console.log(MovieList[0]);

  const [searchQuery, setSearchQuery] = useState(null);

  const Search = () => {
    const listsearch = SearchMovies("science");
    console.log(listsearch);
  };

  useEffect(() => {
    Search();
  }, []);

  return (
    <View style={styles.mainCntnr}>
      <View style={styles.searchCntnr}>
        <SearchBarComponent placeHolder="Find a movie" />
      </View>
      {/* <View>
        <MovieCard />
      </View> */}
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={MovieList}
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
