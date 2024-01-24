import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";

//component imports
import ButtonComponent from "./src/UI Library/Buttons/ButtonComponent";
import SearchBarComponent from "./src/UI Library/Forms/SearchBarComponent";

//app import
import MovieSearch from "./index";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text>
      <ButtonComponent />
      <SearchBarComponent /> */}
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
