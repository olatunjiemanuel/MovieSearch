import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ButtonComponent = (props: { buttonText?: string }) => {
  const { buttonText } = props;
  return (
    <View>
      <TouchableOpacity style={styles.buttonCntnr}>
        <Text style={styles.buttonText}>ButtonText</Text>
        {/* <Text>{buttonText}</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonCntnr: {
    padding: 20,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "green",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
});
