import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  // GestureResponderEvent,
} from "react-native";
import React from "react";

const ButtonComponent = (props: {
  buttonText?: string;
  onPress?: any;
  // onPress?: GestureResponderEvent;
}) => {
  const { buttonText, onPress } = props;

  return (
    <View>
      <TouchableOpacity style={styles.buttonCntnr} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
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
    backgroundColor: "blue",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
});
