import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useRef } from "react";

//icons import
import { AntDesign } from "@expo/vector-icons";

const SearchBarComponent = (props: { placeHolder?: string }) => {
  const { placeHolder } = props;
  const searchInputRef = useRef<TextInput>(null);
  const [typing, setTyping] = useState(false);

  return (
    <View style={styles.FormCntnr}>
      <View>
        <TextInput
          style={styles.searchForm}
          placeholder={placeHolder}
          onFocus={() => setTyping(true)}
          onBlur={() => {
            setTyping(false);
          }}
          ref={searchInputRef}
        />
      </View>
      <View style={styles.searchIconCntnr}>
        {typing ? (
          <TouchableOpacity
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
