import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";

import CategoryComponent from "../CategoryComponent";

const CategorySlider = () => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.sliderCntnr}>
      <View>
        <CategoryComponent CategoryText="Sci-Fi" />
      </View>
      <View style={styles.componentStyle}>
        <CategoryComponent CategoryText="Drama" />
      </View>
      <View style={styles.componentStyle}>
        <CategoryComponent CategoryText="Mystery" />
      </View>
      <View style={styles.componentStyle}>
        <CategoryComponent CategoryText="Comedy" />
      </View>
    </ScrollView>
  );
};

export default CategorySlider;

const styles = StyleSheet.create({
  sliderCntnr: {
    alignItems: "center",
    height: 50,
    padding: 5,
    flexDirection: "row",
    marginBottom: 10,
  },
  componentStyle: {
    marginLeft: 10,
  },
});
