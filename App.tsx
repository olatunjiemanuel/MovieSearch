import React from "react";
import { StyleSheet, View } from "react-native";

//app import
import MovieSearch from "./index";

export default function App() {
  return (
    <View style={styles.container}>
      <MovieSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
