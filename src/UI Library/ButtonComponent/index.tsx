import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ButtonComponent = (props: any) => {
  const { buttonText } = props;
  return (
    <View>
      <TouchableOpacity>
        <Text>ButtonComponent</Text>
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
