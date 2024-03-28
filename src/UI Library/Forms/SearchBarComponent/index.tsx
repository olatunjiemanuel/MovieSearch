import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState, useRef } from "react";

import { AntDesign } from "@expo/vector-icons";

const SearchBarComponent = <
  t extends () => void,
  u extends (arg: string) => void,
>(props: {
  placeHolder?: string;
  handleSubmit?: t;
  onChangeText?: u;
}) => {
  const { placeHolder, handleSubmit, onChangeText } = props;
  const searchInputRef = useRef<TextInput>(null);
  const [typing, setTyping] = useState(false);

  return (
    <View style={styles.FormCntnr}>
      <View>
        <TextInput
          testID="searchBar"
          style={styles.searchForm}
          placeholder={placeHolder}
          onSubmitEditing={handleSubmit}
          onFocus={() => setTyping(true)}
          onChangeText={onChangeText}
          onBlur={() => {
            setTyping(false);
          }}
          ref={searchInputRef}
        />
      </View>
      <View style={styles.searchIconCntnr}>
        {typing ? (
          <TouchableOpacity
            testID="clearSearchButton"
            onPress={() => {
              searchInputRef.current?.clear();
              searchInputRef.current?.blur();
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <AntDesign name="search1" size={24} color="black" />
        )}
      </View>
    </View>
  );
};

export default SearchBarComponent;

const styles = StyleSheet.create({
  FormCntnr: {
    borderWidth: 1,
    flexDirection: "row",
    padding: 10,
    width: 375,
    borderRadius: 10,
  },
  searchForm: {
    width: 320,
    height: 30,
  },
  searchIconCntnr: {
    paddingLeft: 5,
  },
});
