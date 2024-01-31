import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

// UI Imports
import { AntDesign } from "@expo/vector-icons";

const CloseButton = (props: { onPress: any }) => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="close" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default CloseButton;

const styles = StyleSheet.create({});
