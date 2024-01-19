import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ButtonComponent = (props: { buttonText?: string }) => {
  const { buttonText } = props;
  return (
    <View>
      <TouchableOpacity style={styles.buttonCntnr}>
        <Text>ButtonComponent</Text>
        {/* <Text>{buttonText}</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonCntnr: {
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
  },
});
