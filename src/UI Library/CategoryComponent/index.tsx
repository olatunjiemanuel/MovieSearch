import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CategoryComponentProps {
  CategoryText?: string;
  onPress?: () => void;
  selected?: boolean;
}

const CategoryComponent: React.FC<CategoryComponentProps> = ({
  CategoryText,
  onPress,
  selected,
}) => {
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
