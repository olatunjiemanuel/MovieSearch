import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const CategoryComponent = <T extends () => void>(props: {
  CategoryText?: string;
  backgroundColor?: string;
  onPress?: T;
  selected?: boolean;
}) => {
  const { CategoryText, onPress, selected } = props;

  return (
    <TouchableOpacity
      testID="CategoryComponent"
      style={[
        styles.mainCntnr,
        { backgroundColor: selected ? "blue" : "grey" },
      ]}
      onPress={onPress}
    >
      <Text style={styles.categoryTxt}>{CategoryText}</Text>
    </TouchableOpacity>
  );
};

export default CategoryComponent;

const styles = StyleSheet.create({
  mainCntnr: {
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryTxt: {
    color: "white",
  },
});
