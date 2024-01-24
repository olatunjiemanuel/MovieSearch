import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

//component imports
import SearchBarComponent from "./src/UI Library/Forms/SearchBarComponent";

const MovieSearch = () => {
  return (
    <View style={styles.mainCntnr}>
      <SearchBarComponent placeHolder="Find a movie" />
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
