import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface ButtonComponentProps {
  buttonText?: string;
  onPress?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  buttonText,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity
        testID="Button"
        style={styles.buttonCntnr}
        onPress={onPress}
      >
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
