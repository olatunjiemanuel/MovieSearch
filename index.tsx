import { StyleSheet, Text, View, Platform, FlatList } from "react-native";
import React, { useEffect } from "react";

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

  const Search = () => {
    const listsearch = SearchMovies("science");
    console.log(listsearch);
  };

  useEffect(() => {
    Search();
  }, []);

  return (
    <View style={styles.mainCntnr}>
      <View>
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
                {/* <Text>{item.title}</Text>
                <Text>{item.cast}</Text>
                <Text>{item.director}</Text>
                <Text>{item.genre}</Text>
                <Text>{item.plot}</Text>
                <Text>{item.poster_url}</Text>
                <Text>{item.release_year}</Text>
                <View style={{ marginTop: 20 }}></View> */}
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
});
