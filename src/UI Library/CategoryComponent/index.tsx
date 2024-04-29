import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const CategoryComponent = (props: { CategoryText: string }) => {
  const { CategoryText } = props;
  return (
    <TouchableOpacity style={styles.mainCntnr}>
      <Text style={styles.categoryTxt}>{CategoryText}</Text>
    </TouchableOpacity>
  );
};

export default CategoryComponent;

const styles = StyleSheet.create({
  mainCntnr: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  categoryTxt: {
    color: "white",
  },
});
