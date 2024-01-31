import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Platform,
} from "react-native";
import React, { useState } from "react";

//UI imports
import ButtonComponent from "../Buttons/ButtonComponent";

const MovieCard = (props: {
  movieTitle?: string;
  genre?: string;
  release_year?: number;
  director?: string;
  cast?: [cast1: string, cast2: string, cast3: string];
  plot?: string;
}) => {
  const [modalView, setModalView] = useState(false);
  const { movieTitle, genre, release_year, director, cast, plot } = props;
  return (
    <TouchableOpacity
      style={styles.movieCardCntnr}
      onPress={() => {
        setModalView(true);
      }}
    >
      <Modal visible={modalView} transparent animationType="slide">
        <View style={styles.modalBackDrop}>
          <View style={styles.movieCardModal}>
            <ButtonComponent
              buttonText="close"
              onPress={() => {
                setModalView(!modalView);
              }}
            />
            <View style={styles.modalImageCntnr}></View>
            <Text>MovieTitle:{movieTitle}</Text>
            <Text>Genre:{genre}</Text>
            <Text>Released:{release_year}</Text>
            <Text>Director:{director}</Text>
            <Text>Cast:{cast}</Text>
            <Text>Plot:{plot}</Text>
          </View>
        </View>
      </Modal>
      <View style={styles.imageCntnr}></View>
      <View style={styles.subCntnr}>
        <View style={styles.subTextCntnr}>
          <View style={styles.subHeadCntnr}>
            <Text>Genre</Text>
          </View>
          <Text style={styles.subTxt}>{genre}</Text>
        </View>
        <View style={styles.subTextCntnr}>
          <View style={[styles.subHeadCntnr, { width: 100 }]}>
            <Text>Release Year</Text>
          </View>
          <Text style={styles.subTxt}>{release_year}</Text>
        </View>
      </View>
      <Text style={styles.movieTitleTxt}>{movieTitle}</Text>
      <View style={styles.subHeadCntnr}>
        <Text>Starring</Text>
      </View>
      <Text>{cast}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  movieCardCntnr: {
    backgroundColor: "lightgrey",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
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
    backgroundColor: "#fff",
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
  movieCardModal: {
    backgroundColor: "#fff",
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    marginTop: Platform.OS === "ios" ? 50 : null,
  },
  modalBackDrop: {
    // backgroundColor: "orange",
    backgroundColor: "rgba(51,51,51,0.5)",
    flex: 1,
  },
  modalImageCntnr: {
    backgroundColor: "grey",
    width: 330,
    height: 200,
    borderRadius: 10,
  },
});
