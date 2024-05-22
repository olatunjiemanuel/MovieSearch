import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import React from "react";
import CategoryComponent from "../CategoryComponent";

const CategorySelector = <T extends (t: string) => void>(props: {
  selectedCategory?: string;
  onSelectCategory: T;
}) => {
  const { selectedCategory, onSelectCategory } = props;

  const Categories = ["Science", "Drama", "Mystery", "Comedy"];

  return (
    <ScrollView horizontal contentContainerStyle={styles.sliderCntnr}>
      <View>
        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
          data={Categories}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => (
            <CategoryComponent
              selected={selectedCategory === item}
              CategoryText={item}
              onPress={() => {
                onSelectCategory(item);
              }}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default CategorySelector;

const styles = StyleSheet.create({
  componentStyle: {
    marginLeft: 10,
  },
  sliderCntnr: {
    alignItems: "center",
    height: 50,
    padding: 5,
    flexDirection: "row",
    marginBottom: 10,
  },
});
