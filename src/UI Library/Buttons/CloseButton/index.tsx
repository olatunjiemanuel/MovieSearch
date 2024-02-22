import { TouchableOpacity } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";

const CloseButton = <t extends () => void>(props: { onPress: t }) => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="close" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default CloseButton;
