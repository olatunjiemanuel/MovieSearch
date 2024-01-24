import { StyleSheet, Text, View, Platform, FlatList } from "react-native";
import React from "react";

//component imports
import SearchBarComponent from "./src/UI Library/Forms/SearchBarComponent";

//data imoport
import MovieList from "./src/MovieList/index";

const MovieSearch = () => {
  console.log(MovieList[0]);

  return (
    <View style={styles.mainCntnr}>
      <View>
        <SearchBarComponent placeHolder="Find a movie" />
      </View>
      <View>
        <FlatList
          data={MovieList}
          keyExtractor={(item) => {
            item.title;
          }}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.title}</Text>
                <Text>{item.cast}</Text>
                <Text>{item.director}</Text>
                <Text>{item.genre}</Text>
                <Text>{item.plot}</Text>
                <Text>{item.poster_url}</Text>
                <Text>{item.release_year}</Text>
                <Text>{item.title}</Text>
                <View style={{ marginTop: 20 }}></View>
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
    marginTop: Platform.OS === "ios" ? 60 : 20,
  },
});
