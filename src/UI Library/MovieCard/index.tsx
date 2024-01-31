import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MovieCard = () => {
  return (
    <TouchableOpacity style={styles.movieCardCntnr}>
      <View style={styles.imageCntnr}></View>
      <View style={styles.subCntnr}>
        <View style={styles.subTextCntnr}>
          <View style={styles.subHeadCntnr}>
            <Text>Cast</Text>
          </View>
          <Text style={styles.subTxt}>Cast</Text>
        </View>
        <View style={styles.subTextCntnr}>
          <View style={styles.subHeadCntnr}>
            <Text>Genre</Text>
          </View>
          <Text style={styles.subTxt}>Genre</Text>
        </View>
      </View>
      <Text style={styles.movieTitleTxt}>MovieCard</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  movieCardCntnr: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
  },
  imageCntnr: {
    backgroundColor: "grey",
    width: 330,
    height: 100,
    borderRadius: 10,
  },
  subCntnr: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTextCntnr: {
    alignItems: "center",
  },
  subTxt: {
    marginTop: 10,
  },
  subHeadCntnr: {
    backgroundColor: "grey",
    padding: 5,
    marginTop: 20,
    borderRadius: 10,
    width: 70,
    alignItems: "center",
  },
  movieTitleTxt: {
    marginTop: 10,
    fontWeight: "700",
    fontSize: 30,
  },
});
