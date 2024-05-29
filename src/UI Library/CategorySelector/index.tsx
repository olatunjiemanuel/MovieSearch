import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import CategoryComponent from "../CategoryComponent";

interface CategorySelectorProps {
  selectedCategory?: string;
  onSelectCategory: (t: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const Categories = ["Science", "Drama", "Mystery", "Comedy"];

  return (
    <View style={styles.sliderCntnr}>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        data={Categories}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <CategoryComponent
            selected={selectedCategory === item}
            CategoryText={item}
            onPress={() => onSelectCategory(item)}
          />
        )}
      />
    </View>
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
