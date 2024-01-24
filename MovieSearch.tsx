import { View } from "react-native";
import React from "react";
import SearchBarComponent from "./src/UI Library/Forms/SearchBarComponent";
import MovieList from "./src/MovieList/index";
import { styles } from ".";

export const MovieSearch = () => {
  console.log(MovieList);

  return (
    <View style={styles.mainCntnr}>
      <SearchBarComponent placeHolder="Find a movie" />
    </View>
  );
};
